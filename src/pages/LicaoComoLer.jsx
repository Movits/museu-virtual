import { Link } from 'react-router-dom'
import Ornament from '../components/Ornament.jsx'
import useReveal from '../components/useReveal.js'
import '../styles/academia.css'

function Exercicio({ titulo, children, to }) {
  return (
    <aside className="exercicio reveal">
      <p className="eyebrow">Exercício de olhar</p>
      <h3>{titulo}</h3>
      <p>{children}</p>
      <Link to={to} className="exercicio-link">Abrir a obra nesta lupa ›</Link>
    </aside>
  )
}

export default function LicaoComoLer() {
  useReveal()

  return (
    <div className="academia-page">
      <header className="galeria-header">
        <div className="galeria-header-lado">
          <Link to="/academia" className="galeria-link">‹ Academia</Link>
        </div>
        <span className="galeria-marca">Museu Virtual</span>
        <div className="galeria-header-lado galeria-header-direita">
          <Link to="/galeria" className="galeria-link">Galeria</Link>
        </div>
      </header>

      <article className="licao">
        <header className="licao-cabecalho">
          <p className="eyebrow reveal">Módulo I · Lição única</p>
          <h1 className="reveal">Como ler um quadro</h1>
          <div className="reveal"><Ornament /></div>
          <p className="licao-tempo reveal">Leitura de 15 minutos, com quatro exercícios no acervo</p>
        </header>

        <section className="licao-texto">
          <p className="reveal">
            Diante de uma pintura famosa, a maioria de nós faz a mesma coisa: olha por sete segundos, lê a plaquinha, fotografa e segue adiante. Não é falta de interesse. É que ninguém nos ensinou o que fazer com os olhos. Um quadro não se entrega de uma vez, como um cartaz; ele se desdobra no tempo, como uma música. Esta lição propõe um método simples, em quatro perguntas, para que qualquer pintura comece a falar.
          </p>

          <h2 className="reveal">1. Por onde o olho entra?</h2>
          <p className="reveal">
            Toda pintura bem construída tem uma porta. O pintor decide onde seu olhar entra e por qual caminho ele percorre a tela: uma diagonal de luz, uma mão estendida, uma fileira de cabeças. Antes de perguntar o que o quadro significa, pergunte por onde você entrou nele e o que o conduziu. Repare na primeira coisa que viu. Ela raramente está ali por acaso: em geral é o ponto mais claro, mais quente ou mais contrastado da composição, e foi calculada para ser a primeira palavra da frase.
          </p>
          <Exercicio
            titulo="A diagonal de luz de Caravaggio"
            to="/obra/vocacao-de-sao-mateus?lupa=feixe-de-luz"
          >
            Na Vocação de São Mateus, cubra mentalmente o facho de luz e tente entrar no quadro por outro lugar. Não há outro lugar. A luz é a porta, e ela desce exatamente na direção do homem que será chamado.
          </Exercicio>

          <h2 className="reveal">2. De onde vem a luz, e o que ela esconde?</h2>
          <p className="reveal">
            A luz de um quadro nunca é neutra: ela escolhe. Ilumina um rosto e apaga outro, dá peso a uma mão e dissolve um fundo. Pergunte de onde a luz vem, se a fonte aparece na cena ou está fora dela, e principalmente o que ficou na sombra. Nos mestres, a sombra não é ausência: é o lugar onde o quadro guarda o que quer dizer em voz baixa.
          </p>
          <Exercicio
            titulo="A sombra que assina"
            to="/obra/ronda-noturna?lupa=sombra-da-mao"
          >
            Na Ronda Noturna, a mão do capitão projeta uma sombra sobre o casaco do tenente, e a sombra aponta para o brasão de Amsterdã bordado no tecido. Rembrandt usa a própria luz para comentar a cena. Quantos pintores você conhece que dão função à sombra de um gesto?
          </Exercicio>

          <h2 className="reveal">3. O que fazem as mãos?</h2>
          <p className="reveal">
            Os rostos das pinturas aprenderam a posar; as mãos, quase nunca. É nelas que os pintores escondem o verbo da frase: abençoam, apontam, hesitam, seguram, soltam. Em qualquer cena com figuras, faça o inventário das mãos antes de julgar as expressões. Um quadro inteiro pode girar em torno de dois dedos que quase se tocam, como no teto da Capela Sistina.
          </p>
          <Exercicio
            titulo="A mão que cita outra mão"
            to="/obra/vocacao-de-sao-mateus?lupa=mao-de-cristo"
          >
            A mão de Cristo na Vocação repete o gesto do Adão de Michelangelo na Criação. Um pintor citando outro, como um escritor cita um verso. Quando você reconhece a citação, o quadro dobra de tamanho: a vocação de Mateus vira uma segunda criação.
          </Exercicio>

          <h2 className="reveal">4. Que objetos estão falando?</h2>
          <p className="reveal">
            Na pintura antiga, quase nada é decoração. Frutas, espelhos, velas, cães, instrumentos: cada objeto podia carregar um significado que o público da época lia sem esforço, como nós lemos placas de trânsito. Esse vocabulário se perdeu, e recuperá-lo é metade do prazer. Diante de um interior flamengo ou de uma natureza-morta, pergunte: se cada objeto fosse uma palavra, qual seria a frase?
          </p>
          <Exercicio
            titulo="A corda que se partiu"
            to="/obra/os-embaixadores?lupa=alaude"
          >
            No alaúde dos Embaixadores, uma única corda está arrebentada. Para quem sabia ler, era um grito: a harmonia da Europa cristã tinha se rompido. Um detalhe de dois centímetros carrega a crise inteira de 1533.
          </Exercicio>

          <h2 className="reveal">O hábito dos dez minutos</h2>
          <p className="reveal">
            O método é este: porta, luz, mãos, objetos. Quatro perguntas, nenhuma exige diploma. O que elas exigem é tempo: dez minutos diante de uma única obra valem mais do que uma tarde correndo por um museu inteiro. Os curadores chamam isso de olhar lento, e os contemplativos conheciam o segredo muito antes: não somos nós que terminamos de ver um quadro; é ele que, aos poucos, termina de nos mostrar quem somos.
          </p>
          <p className="reveal">
            Escolha agora uma obra do acervo que você nunca tenha examinado de verdade. Antes de abrir qualquer lupa, gaste seus dez minutos com as quatro perguntas. Depois abra as lupas e confira o que você mesmo já tinha descoberto.
          </p>
        </section>

        <footer className="licao-rodape reveal">
          <Ornament width={150} />
          <Link to="/galeria" className="btn-gold">Praticar na galeria</Link>
          <p className="licao-rodape-nota">
            Os próximos módulos da Academia estão em preparação.{' '}
            <Link to="/academia">Veja o currículo completo</Link>.
          </p>
        </footer>
      </article>
    </div>
  )
}
