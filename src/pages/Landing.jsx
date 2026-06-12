import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { obras } from '../data/obras/index.js'
import Ornament from '../components/Ornament.jsx'
import useReveal from '../components/useReveal.js'
import '../styles/landing.css'

const base = import.meta.env.BASE_URL
const destaques = ['jardim-das-delicias', 'ronda-noturna', 'noite-estrelada']

export default function Landing() {
  const navigate = useNavigate()
  const [entrando, setEntrando] = useState(false)
  useReveal()

  // transição de "mergulho": a página inteira avança para dentro da pintura
  const entrar = (e) => {
    e.preventDefault()
    if (entrando) return
    setEntrando(true)
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setTimeout(() => navigate('/galeria'), reduz ? 50 : 1250)
  }

  return (
    <div className={`landing ${entrando ? 'is-entering' : ''}`}>
      <section className="hero">
        <div className="hero-fundo" style={{ backgroundImage: `url(${base}hero/hero-landing.jpg)` }} />
        <div className="hero-veu" />
        <div className="hero-conteudo">
          <p className="eyebrow hero-aparece">Pinturas em altíssima resolução</p>
          <h1 className="hero-titulo hero-aparece">Museu Virtual</h1>
          <div className="hero-aparece hero-ornamento"><Ornament width={210} /></div>
          <p className="hero-sub hero-aparece">
            Uma galeria para ver de perto: a história, os símbolos e os segredos
            que cada quadro esconde a um palmo da tela.
          </p>
          <a href="#visita" className="hero-aparece hero-cue" aria-label="Descer para conhecer o museu">
            <span className="hero-cue-seta" />
          </a>
        </div>
      </section>

      <section className="citacao" id="visita">
        <p className="citacao-texto reveal">"A beleza salvará o mundo."</p>
        <p className="citacao-autor reveal">Fiódor Dostoiévski, O Idiota, 1869</p>
      </section>

      <section className="lupa-secao">
        <div className="lupa-secao-imagem reveal">
          <div className="lupa-circulo">
            <img src={`${base}hero/detalhe-espelho.jpg`} alt="O espelho convexo de O Casal Arnolfini, de Jan van Eyck, visto de perto" />
          </div>
          <p className="lupa-legenda">
            O espelho de <em>O Casal Arnolfini</em> tem 5 centímetros de cenas da Paixão.
          </p>
        </div>
        <div className="lupa-secao-texto">
          <p className="eyebrow reveal">A experiência</p>
          <h2 className="reveal">Toda obra esconde outras obras</h2>
          <p className="reveal">
            Há quadros que guardam mundos inteiros em alguns centímetros: um
            pintor refletido em um espelho, uma caveira que só aparece de lado,
            uma corda partida que fala de uma Europa dividida.
          </p>
          <p className="reveal">
            Em cada obra do museu você encontrará lupas. Cada uma mergulha em um
            detalhe e conta o que ele significa: a história, a técnica, a fé e a
            filosofia que passam despercebidas a olho nu. Aproxime-se quanto
            quiser: as imagens vêm dos melhores scans em domínio público, com a
            nitidez de quem visita a obra a um palmo de distância.
          </p>
        </div>
      </section>

      <section className="destaques">
        <p className="eyebrow reveal">A coleção</p>
        <h2 className="reveal">Quase cinco séculos de pintura</h2>
        <div className="reveal"><Ornament /></div>
        <p className="destaques-sub reveal">
          De Van Eyck a Van Gogh: dez obras-primas, escolhidas pela densidade do
          que há para descobrir dentro delas.
        </p>
        <div className="destaques-grid">
          {destaques.map((slug, i) => {
            const obra = obras.find((o) => o.slug === slug)
            return (
              <Link
                to={`/obra/${slug}`}
                key={slug}
                className="destaque reveal"
                style={{ transitionDelay: `${i * 0.18}s` }}
              >
                <div className="destaque-moldura">
                  <img src={`${base}thumbs/${slug}.jpg`} alt={`${obra.titulo}, ${obra.artista}`} loading="lazy" />
                </div>
                <span className="destaque-titulo">{obra.titulo}</span>
                <span className="destaque-artista">{obra.artista}, {obra.ano}</span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="entrada">
        <div className="reveal"><Ornament width={150} /></div>
        <h2 className="reveal">A porta está aberta</h2>
        <p className="reveal entrada-sub">
          Entre sem pressa. Os museus foram feitos para quem caminha devagar.
        </p>
        <a href="#galeria" onClick={entrar} className="btn-gold reveal">Entrar no museu</a>
      </section>

      <footer className="landing-footer">
        <p>
          Museu Virtual. Todas as obras em domínio público; reproduções do
          Wikimedia Commons.
        </p>
      </footer>
    </div>
  )
}
