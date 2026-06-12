import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { buscarObras } from '../data/obras/index.js'
import '../styles/busca.css'

const base = import.meta.env.BASE_URL

export default function Busca({ aberta, onFechar }) {
  const [consulta, setConsulta] = useState('')
  const inputRef = useRef(null)
  const resultados = buscarObras(consulta)

  useEffect(() => {
    if (aberta) {
      setConsulta('')
      const t = setTimeout(() => inputRef.current?.focus(), 350)
      return () => clearTimeout(t)
    }
  }, [aberta])

  useEffect(() => {
    if (!aberta) return
    const onKey = (e) => {
      if (e.key === 'Escape') onFechar()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [aberta, onFechar])

  return (
    <div className={`busca ${aberta ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Buscar no acervo">
      <button className="busca-fechar" onClick={onFechar} aria-label="Fechar busca">×</button>
      <div className="busca-conteudo">
        <p className="eyebrow">Buscar no acervo</p>
        <input
          ref={inputRef}
          className="busca-input"
          type="text"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
          placeholder="Um artista, um tema, um estilo..."
          aria-label="Termo de busca"
        />
        <p className="busca-dica">
          Experimente: <button onClick={() => setConsulta('arte sacra')}>arte sacra</button>
          <button onClick={() => setConsulta('Rembrandt')}>Rembrandt</button>
          <button onClick={() => setConsulta('paisagem')}>paisagem</button>
          <button onClick={() => setConsulta('barroco')}>barroco</button>
        </p>

        {consulta.trim().length >= 2 && (
          <p className="busca-contagem">
            {resultados.length === 0 && 'Nenhuma obra encontrada nesta ala do museu.'}
            {resultados.length === 1 && 'Uma obra encontrada.'}
            {resultados.length > 1 && `${resultados.length} obras encontradas.`}
          </p>
        )}

        <div className="busca-resultados">
          {resultados.map((obra) => (
            <Link to={`/obra/${obra.slug}`} key={obra.slug} className="busca-item" onClick={onFechar}>
              <div className="busca-item-moldura">
                <img src={`${base}thumbs/${obra.slug}.jpg`} alt="" loading="lazy" />
              </div>
              <span className="busca-item-titulo">{obra.titulo}</span>
              <span className="busca-item-artista">{obra.artista}, {obra.ano}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
