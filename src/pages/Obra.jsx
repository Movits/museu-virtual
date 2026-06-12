import { useEffect, useState } from 'react'
import { Link, Navigate, useParams, useSearchParams } from 'react-router-dom'
import { obras, getObra } from '../data/obras/index.js'
import Viewer from '../components/Viewer.jsx'
import Ornament from '../components/Ornament.jsx'
import '../styles/obra.css'

export default function ObraRoute() {
  const { slug } = useParams()
  const obra = getObra(slug)
  if (!obra) return <Navigate to="/galeria" replace />
  return <Obra key={slug} obra={obra} />
}

function Obra({ obra }) {
  // deep-link: #/obra/<slug>?lupa=<id> abre a obra já com a lupa ativa
  const [searchParams] = useSearchParams()
  const lupaInicial = obra.lupas.find((l) => l.id === searchParams.get('lupa'))?.id ?? null
  const [activeLupaId, setActiveLupaId] = useState(lupaInicial)
  const [sobreAberto, setSobreAberto] = useState(false)
  const [lupasVisiveis, setLupasVisiveis] = useState(true)
  const [cartao, setCartao] = useState(!lupaInicial)

  const idx = obras.indexOf(obra)
  const anterior = obras[(idx - 1 + obras.length) % obras.length]
  const proxima = obras[(idx + 1) % obras.length]
  const lupaAtiva = obra.lupas.find((l) => l.id === activeLupaId)

  // Cartão de entrada com o título, que se desfaz sozinho
  useEffect(() => {
    const t = setTimeout(() => setCartao(false), 3000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (activeLupaId) setActiveLupaId(null)
        else if (sobreAberto) setSobreAberto(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeLupaId, sobreAberto])

  const selectLupa = (id) => {
    setSobreAberto(false)
    setActiveLupaId(id)
  }

  // fração da tela ocupada pelo painel da lupa (para centralizar o recorte no espaço livre)
  const panelFraction =
    typeof window !== 'undefined' && window.innerWidth > 900 ? Math.min(440, window.innerWidth * 0.36) / window.innerWidth : 0

  return (
    <div className="obra-page">
      <Viewer
        obra={obra}
        activeLupaId={activeLupaId}
        onSelectLupa={selectLupa}
        lupasVisiveis={lupasVisiveis}
        panelFraction={lupaAtiva ? panelFraction : 0}
      />

      <div className={`obra-cartao ${cartao ? '' : 'is-hidden'}`} aria-hidden="true">
        <div>
          <p className="eyebrow">{obra.artista}</p>
          <h1>{obra.titulo}</h1>
          <p className="obra-cartao-ano">{obra.ano}</p>
        </div>
      </div>

      <header className="obra-topbar">
        <Link to="/galeria" className="obra-voltar">‹ Galeria</Link>
        <div className="obra-titulo">
          <span className="obra-titulo-nome">{obra.titulo}</span>
          <span className="obra-titulo-artista">{obra.artista}, {obra.ano}</span>
        </div>
        <nav className="obra-nav">
          <Link to={`/obra/${anterior.slug}`} title={anterior.titulo} aria-label={`Obra anterior: ${anterior.titulo}`}>‹</Link>
          <Link to={`/obra/${proxima.slug}`} title={proxima.titulo} aria-label={`Próxima obra: ${proxima.titulo}`}>›</Link>
        </nav>
      </header>

      <div className="obra-acoes">
        <button className="obra-acao" onClick={() => { setActiveLupaId(null); setSobreAberto(!sobreAberto) }}>
          Sobre a obra
        </button>
        <button
          className={`obra-acao ${lupasVisiveis ? '' : 'is-off'}`}
          onClick={() => setLupasVisiveis(!lupasVisiveis)}
          title={lupasVisiveis ? 'Ocultar as lupas para contemplar a obra' : 'Mostrar as lupas'}
        >
          {lupasVisiveis ? 'Ocultar lupas' : 'Mostrar lupas'}
        </button>
      </div>

      {/* Painel: sobre a obra */}
      <aside className={`painel painel-sobre ${sobreAberto ? 'is-open' : ''}`} aria-hidden={!sobreAberto}>
        <button className="painel-fechar" onClick={() => setSobreAberto(false)} aria-label="Fechar painel">×</button>
        <div className="painel-conteudo">
          <p className="eyebrow">{obra.artista}</p>
          <h2>{obra.titulo}</h2>
          <Ornament width={150} />
          <dl className="placa">
            <div><dt>Artista</dt><dd>{obra.artista} ({obra.vidaArtista})</dd></div>
            <div><dt>Data</dt><dd>{obra.ano}</dd></div>
            <div><dt>Técnica</dt><dd>{obra.tecnica}</dd></div>
            <div><dt>Dimensões</dt><dd>{obra.dimensoes}</dd></div>
            <div><dt>Localização</dt><dd>{obra.museu}</dd></div>
          </dl>
          {obra.descricao.map((p, i) => (
            <p key={i} className="painel-paragrafo">{p}</p>
          ))}
          {obra.lupas.length > 0 && (
            <>
              <h3 className="painel-subtitulo">Detalhes para ver de perto</h3>
              <ul className="lupa-lista">
                {obra.lupas.map((l, i) => (
                  <li key={l.id}>
                    <button onClick={() => selectLupa(l.id)}>
                      <span className="lupa-lista-num">{String(i + 1).padStart(2, '0')}</span>
                      {l.titulo}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </aside>

      {/* Painel: detalhe da lupa ativa */}
      <aside className={`painel painel-lupa ${lupaAtiva ? 'is-open' : ''}`} aria-hidden={!lupaAtiva}>
        {lupaAtiva && (
          <>
            <button className="painel-fechar" onClick={() => setActiveLupaId(null)} aria-label="Fechar painel">×</button>
            <div className="painel-conteudo">
              <p className="eyebrow">Detalhe</p>
              <h2>{lupaAtiva.titulo}</h2>
              <Ornament width={150} />
              {lupaAtiva.texto.map((p, i) => (
                <p key={i} className="painel-paragrafo">{p}</p>
              ))}
              <button className="btn-gold painel-voltar" onClick={() => setActiveLupaId(null)}>
                Visão geral
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
