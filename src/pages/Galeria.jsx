import { useState } from 'react'
import { Link } from 'react-router-dom'
import { obrasPorSala } from '../data/obras/index.js'
import Ornament from '../components/Ornament.jsx'
import Busca from '../components/Busca.jsx'
import useReveal from '../components/useReveal.js'
import '../styles/galeria.css'

const base = import.meta.env.BASE_URL

function faixaDeAnos(obras) {
  const anos = obras.map((o) => parseInt(String(o.ano).replace(/\D/g, ' ').trim().split(' ')[0], 10)).filter(Boolean)
  if (!anos.length) return ''
  const min = Math.min(...anos)
  const max = Math.max(...anos)
  return min === max ? `${min}` : `${min} a ${max}`
}

export default function Galeria() {
  const [buscaAberta, setBuscaAberta] = useState(false)
  const salas = obrasPorSala()
  useReveal()

  return (
    <div className="galeria-page">
      <header className="galeria-header">
        <div className="galeria-header-lado">
          <Link to="/" className="galeria-link">‹ Entrada</Link>
        </div>
        <span className="galeria-marca">Museu Virtual</span>
        <div className="galeria-header-lado galeria-header-direita">
          <Link to="/academia" className="galeria-link">Academia</Link>
          <button className="galeria-busca-botao" onClick={() => setBuscaAberta(true)} aria-label="Buscar no acervo">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <line x1="15.4" y1="15.4" x2="21" y2="21" />
            </svg>
          </button>
        </div>
      </header>

      <section className="galeria-intro">
        <p className="eyebrow reveal">A coleção</p>
        <h1 className="reveal">Salão Principal</h1>
        <div className="reveal"><Ornament /></div>
        <p className="galeria-intro-texto reveal">
          Quase seis séculos de pintura, sala por sala. Aproxime-se de cada obra
          como se estivesse diante da tela: cada lupa guarda um detalhe que a
          distância esconde.
        </p>
      </section>

      {salas.map((sala) => (
        <section className="sala" key={sala.id}>
          <header className="sala-cabecalho reveal">
            <p className="eyebrow">{faixaDeAnos(sala.obras)}</p>
            <h2>{sala.nome}</h2>
            <Ornament width={150} />
          </header>
          <div className="galeria-grid">
            {sala.obras.map((obra, i) => (
              <Link
                to={`/obra/${obra.slug}`}
                className="quadro reveal"
                key={obra.slug}
                style={{ transitionDelay: `${(i % 3) * 0.15}s` }}
              >
                <div className="moldura">
                  <img src={`${base}thumbs/${obra.slug}.jpg`} alt={`${obra.titulo}, ${obra.artista}`} loading="lazy" />
                </div>
                <div className="quadro-placa">
                  <span className="quadro-titulo">{obra.titulo}</span>
                  <span className="quadro-artista">{obra.artista}, {obra.ano}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <footer className="galeria-footer">
        <Ornament width={140} />
        <p>
          Todas as obras desta coleção estão em domínio público. Reproduções em
          alta resolução obtidas do Wikimedia Commons.
        </p>
      </footer>

      <Busca aberta={buscaAberta} onFechar={() => setBuscaAberta(false)} />
    </div>
  )
}
