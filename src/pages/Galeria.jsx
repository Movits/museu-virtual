import { Link } from 'react-router-dom'
import { obras } from '../data/obras/index.js'
import Ornament from '../components/Ornament.jsx'
import useReveal from '../components/useReveal.js'
import '../styles/galeria.css'

const base = import.meta.env.BASE_URL

export default function Galeria() {
  useReveal()

  return (
    <div className="galeria-page">
      <header className="galeria-header">
        <Link to="/" className="galeria-entrada">‹ Entrada</Link>
        <span className="galeria-marca">Museu Virtual</span>
        <span className="galeria-header-espaco" />
      </header>

      <section className="galeria-intro">
        <p className="eyebrow reveal">A coleção</p>
        <h1 className="reveal">Salão Principal</h1>
        <div className="reveal"><Ornament /></div>
        <p className="galeria-intro-texto reveal">
          Dez obras, quase cinco séculos de pintura. Aproxime-se de cada uma
          como se estivesse diante da tela: cada lupa guarda um detalhe que a
          distância esconde.
        </p>
      </section>

      <main className="galeria-grid">
        {obras.map((obra, i) => (
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
      </main>

      <footer className="galeria-footer">
        <Ornament width={140} />
        <p>
          Todas as obras desta coleção estão em domínio público. Reproduções em
          alta resolução obtidas do Wikimedia Commons.
        </p>
      </footer>
    </div>
  )
}
