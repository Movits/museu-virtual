import { useEffect, useRef } from 'react'
import OpenSeadragon from 'openseadragon'

const LUPA_ICON = `
<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true">
  <circle cx="10.5" cy="10.5" r="6.5"/>
  <line x1="15.4" y1="15.4" x2="21" y2="21"/>
  <line x1="10.5" y1="7.8" x2="10.5" y2="13.2" opacity="0.5"/>
  <line x1="7.8" y1="10.5" x2="13.2" y2="10.5" opacity="0.5"/>
</svg>`

function lupaViewportRect(viewer, lupa) {
  const item = viewer.world.getItemAt(0)
  const size = item.getContentSize()
  return viewer.viewport.imageToViewportRectangle(
    lupa.x * size.x,
    lupa.y * size.y,
    lupa.w * size.x,
    lupa.h * size.y
  )
}

// Folga ao redor da região da lupa e, se houver painel lateral aberto à
// direita, expande o retângulo para que a região fique centrada no espaço livre.
function paddedRect(rect, panelFraction) {
  const fx = rect.width * 0.18
  const fy = rect.height * 0.18
  const out = new OpenSeadragon.Rect(rect.x - fx, rect.y - fy, rect.width + 2 * fx, rect.height + 2 * fy)
  if (panelFraction > 0 && panelFraction < 0.8) {
    out.width = out.width / (1 - panelFraction)
  }
  return out
}

export default function Viewer({ obra, activeLupaId, onSelectLupa, lupasVisiveis, panelFraction }) {
  const elRef = useRef(null)
  const viewerRef = useRef(null)
  const selectRef = useRef(onSelectLupa)
  selectRef.current = onSelectLupa
  const panelFractionRef = useRef(panelFraction)
  panelFractionRef.current = panelFraction

  useEffect(() => {
    const viewer = OpenSeadragon({
      element: elRef.current,
      tileSources: `${import.meta.env.BASE_URL}tiles/${obra.slug}/${obra.slug}.dzi`,
      showNavigationControl: false,
      animationTime: 2.2,
      springStiffness: 4.5,
      zoomPerScroll: 1.35,
      maxZoomPixelRatio: 2.5,
      minZoomImageRatio: 0.82,
      visibilityRatio: 0.7,
      gestureSettingsMouse: { clickToZoom: false, dblClickToZoom: true },
      gestureSettingsTouch: { pinchRotate: false },
    })
    viewerRef.current = viewer

    viewer.addHandler('open', () => {
      elRef.current?.classList.add('is-open')
      obra.lupas.forEach((lupa) => {
        const btn = document.createElement('button')
        btn.className = 'lupa-marker'
        btn.dataset.lupaId = lupa.id
        btn.title = lupa.titulo
        btn.setAttribute('aria-label', `Lupa: ${lupa.titulo}`)
        btn.innerHTML = LUPA_ICON
        // MouseTracker para o clique não ser engolido pelos gestos do canvas
        new OpenSeadragon.MouseTracker({
          element: btn,
          clickHandler: () => selectRef.current(lupa.id),
        })
        viewer.addOverlay({
          element: btn,
          location: lupaViewportRect(viewer, lupa).getCenter(),
          placement: OpenSeadragon.Placement.CENTER,
          checkResize: false,
        })
      })
    })

    return () => {
      viewerRef.current = null
      viewer.destroy()
    }
  }, [obra.slug])

  // Zoom animado até a lupa ativa; sem lupa ativa, volta à visão geral
  useEffect(() => {
    const viewer = viewerRef.current
    if (!viewer || !viewer.world.getItemAt(0)) return
    if (activeLupaId) {
      const lupa = obra.lupas.find((l) => l.id === activeLupaId)
      if (lupa) viewer.viewport.fitBounds(paddedRect(lupaViewportRect(viewer, lupa), panelFractionRef.current))
    } else {
      viewer.viewport.goHome()
    }
  }, [activeLupaId, obra])

  // Estado visual dos marcadores (ativo / ocultos)
  useEffect(() => {
    const el = elRef.current
    if (!el) return
    el.classList.toggle('lupas-ocultas', !lupasVisiveis)
    el.querySelectorAll('.lupa-marker').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lupaId === activeLupaId)
    })
  }, [lupasVisiveis, activeLupaId, obra])

  const zoom = (factor) => {
    const viewer = viewerRef.current
    if (!viewer) return
    viewer.viewport.zoomBy(factor)
    viewer.viewport.applyConstraints()
  }

  return (
    <div className="viewer-wrap">
      <div ref={elRef} className="viewer-canvas" />
      <div className="viewer-controls" role="group" aria-label="Controles de zoom">
        <button onClick={() => zoom(1.6)} aria-label="Aproximar">+</button>
        <button onClick={() => zoom(1 / 1.6)} aria-label="Afastar">−</button>
        <button onClick={() => { onSelectLupa(null); viewerRef.current?.viewport.goHome() }} aria-label="Visão geral">⌂</button>
      </div>
    </div>
  )
}
