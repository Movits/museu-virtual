import { Link } from 'react-router-dom'
import Ornament from '../components/Ornament.jsx'
import useReveal from '../components/useReveal.js'
import '../styles/academia.css'

const EMAIL_INTERESSE =
  'mailto:robertomovits@gmail.com?subject=Academia%20do%20Museu%20Virtual&body=Quero%20ser%20avisado%20quando%20os%20pr%C3%B3ximos%20m%C3%B3dulos%20forem%20lan%C3%A7ados.'

const modulos = [
  {
    numero: 'I',
    titulo: 'Como ler um quadro',
    descricao: 'Composição, luz, gesto e símbolo: o método para parar diante de qualquer pintura e saber o que procurar.',
    disponivel: true,
    rota: '/academia/como-ler-um-quadro',
  },
  {
    numero: 'II',
    titulo: 'Técnica e materiais',
    descricao: 'Da têmpera sobre madeira ao impasto de Van Gogh: o que muda quando muda a matéria da pintura.',
  },
  {
    numero: 'III',
    titulo: 'O Renascimento',
    descricao: 'Perspectiva, humanismo e fé: de Giotto a Rafael, o século em que a pintura aprendeu a respirar.',
  },
  {
    numero: 'IV',
    titulo: 'O Barroco',
    descricao: 'Caravaggio, Rembrandt, Velázquez: o teatro da luz e o realismo do sagrado.',
  },
  {
    numero: 'V',
    titulo: 'Do Romantismo ao Impressionismo',
    descricao: 'O sublime, a revolução e o instante: como a pintura moderna nasceu no século XIX.',
  },
  {
    numero: 'VI',
    titulo: 'Símbolo e fé: a arte sacra',
    descricao: 'Iconografia cristã, tipologia e liturgia: as chaves para ler a maior parte da arte ocidental.',
  },
]

export default function Academia() {
  useReveal()

  return (
    <div className="academia-page">
      <header className="galeria-header">
        <div className="galeria-header-lado">
          <Link to="/" className="galeria-link">‹ Entrada</Link>
        </div>
        <span className="galeria-marca">Museu Virtual</span>
        <div className="galeria-header-lado galeria-header-direita">
          <Link to="/galeria" className="galeria-link">Galeria</Link>
        </div>
      </header>

      <section className="academia-hero">
        <p className="eyebrow reveal">A Academia</p>
        <h1 className="reveal">Aprenda a ver</h1>
        <div className="reveal"><Ornament /></div>
        <p className="academia-hero-texto reveal">
          Um curso para quem quer mais do que passar pelas obras: entender por
          que elas foram pintadas, o que dizem em silêncio e como o olhar se
          educa. Cada módulo usa as próprias obras do museu como sala de aula.
        </p>
      </section>

      <section className="academia-modulos">
        {modulos.map((m) => (
          <article className={`modulo reveal ${m.disponivel ? 'is-aberto' : ''}`} key={m.numero}>
            <span className="modulo-numero">{m.numero}</span>
            <div className="modulo-corpo">
              <h2>{m.titulo}</h2>
              <p>{m.descricao}</p>
              {m.disponivel ? (
                <Link to={m.rota} className="btn-gold modulo-botao">Começar gratuitamente</Link>
              ) : (
                <span className="modulo-breve">Em breve</span>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="academia-aviso">
        <div className="reveal"><Ornament width={150} /></div>
        <h2 className="reveal">O primeiro módulo é aberto a todos</h2>
        <p className="reveal">
          Os próximos módulos estão sendo preparados com o mesmo cuidado das
          análises do acervo. Deixe seu interesse registrado e você será o
          primeiro a saber do lançamento.
        </p>
        <a href={EMAIL_INTERESSE} className="btn-gold reveal">Quero ser avisado</a>
      </section>

      <footer className="galeria-footer">
        <Ornament width={140} />
        <p>Museu Virtual · Academia</p>
      </footer>
    </div>
  )
}
