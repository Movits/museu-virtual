import lamentacaoDeGiotto from './lamentacao-de-giotto.js'
import anunciacaoDeFraAngelico from './anunciacao-de-fra-angelico.js'
import polipticoDeGante from './poliptico-de-gante.js'
import casalArnolfini from './casal-arnolfini.js'
import madonaRolin from './madona-rolin.js'
import descidaDaCruzVanDerWeyden from './descida-da-cruz-van-der-weyden.js'
import anunciacaoDeLeonardo from './anunciacao-de-leonardo.js'
import saoJeronimoNoEscritorio from './sao-jeronimo-no-escritorio.js'
import cristoMortoMantegna from './cristo-morto-mantegna.js'
import primavera from './primavera.js'
import nascimentoDeVenus from './nascimento-de-venus.js'
import damaComArminho from './dama-com-arminho.js'
import jardimDasDelicias from './jardim-das-delicias.js'
import ultimaCeia from './ultima-ceia.js'
import autorretratoDeDurer from './autorretrato-de-durer.js'
import aLebre from './a-lebre.js'
import monaLisa from './mona-lisa.js'
import aTempestade from './a-tempestade.js'
import escolaDeAtenas from './escola-de-atenas.js'
import criacaoDeAdao from './criacao-de-adao.js'
import madonaSistina from './madona-sistina.js'
import bacoEAriadne from './baco-e-ariadne.js'
import osEmbaixadores from './os-embaixadores.js'
import venusDeUrbino from './venus-de-urbino.js'
import proverbiosFlamengos from './proverbios-flamengos.js'
import bodasDeCana from './bodas-de-cana.js'
import torreDeBabel from './torre-de-babel.js'
import cacadoresNaNeve from './cacadores-na-neve.js'
import enterroDoCondeDeOrgaz from './enterro-do-conde-de-orgaz.js'
import vocacaoDeSaoMateus from './vocacao-de-sao-mateus.js'
import ceiaEmEmaus from './ceia-em-emaus.js'
import daviComACabecaDeGolias from './davi-com-a-cabeca-de-golias.js'
import descidaDaCruzRubens from './descida-da-cruz-rubens.js'
import juditeEHolofernes from './judite-e-holofernes.js'
import licaoDeAnatomia from './licao-de-anatomia.js'
import tresGracas from './tres-gracas.js'
import rendicaoDeBreda from './rendicao-de-breda.js'
import madalenaDeLaTour from './madalena-de-la-tour.js'
import rondaNoturna from './ronda-noturna.js'
import venusDoEspelho from './venus-do-espelho.js'
import lasMeninas from './las-meninas.js'
import aLeiteira from './a-leiteira.js'
import vistaDeDelft from './vista-de-delft.js'
import osSindicos from './os-sindicos.js'
import mocaComBrincoDePerola from './moca-com-brinco-de-perola.js'
import retornoDoFilhoProdigo from './retorno-do-filho-prodigo.js'
import oGeografo from './o-geografo.js'
import oBalanco from './o-balanco.js'
import morteDeMarat from './morte-de-marat.js'
import tresDeMaio from './tres-de-maio.js'
import grandeOdalisca from './grande-odalisca.js'
import andarilhoSobreOMarDeNevoa from './andarilho-sobre-o-mar-de-nevoa.js'
import balsaDaMedusa from './balsa-da-medusa.js'
import carroDeFeno from './carro-de-feno.js'
import saturno from './saturno.js'
import liberdadeGuiandoOPovo from './liberdade-guiando-o-povo.js'
import temerario from './temerario.js'
import oAngelus from './o-angelus.js'
import primeiraMissaNoBrasil from './primeira-missa-no-brasil.js'
import olympia from './olympia.js'
import impressaoNascerDoSol from './impressao-nascer-do-sol.js'
import classeDeDanca from './classe-de-danca.js'
import baileNoMoulinDeLaGalette from './baile-no-moulin-de-la-galette.js'
import parisDiaDeChuva from './paris-dia-de-chuva.js'
import barNoFoliesBergere from './bar-no-folies-bergere.js'
import maraba from './maraba.js'
import tardeNaGrandeJatte from './tarde-na-grande-jatte.js'
import independenciaOuMorte from './independencia-ou-morte.js'
import girassois from './girassois.js'
import noiteEstrelada from './noite-estrelada.js'
import oQuartoEmArles from './o-quarto-em-arles.js'
import jogadoresDeCartas from './jogadores-de-cartas.js'
import caipiraPicandoFumo from './caipira-picando-fumo.js'
import oGrito from './o-grito.js'
import saudade from './saudade.js'
import oVioleiro from './o-violeiro.js'
import oBeijo from './o-beijo.js'

// As salas do museu, em ordem de visita
export const salas = [
  { id: 'primitivos', nome: 'Primitivos e Primeiro Renascimento' },
  { id: 'renascimento', nome: 'Renascimento' },
  { id: 'barroco', nome: 'Barroco e o Século de Ouro' },
  { id: 'seculo-xix', nome: 'Do Romantismo ao Moderno' },
  { id: 'brasil', nome: 'Brasil' },
]

// Ordem cronológica dentro do acervo
export const obras = [
  lamentacaoDeGiotto,
  anunciacaoDeFraAngelico,
  polipticoDeGante,
  casalArnolfini,
  madonaRolin,
  descidaDaCruzVanDerWeyden,
  anunciacaoDeLeonardo,
  saoJeronimoNoEscritorio,
  cristoMortoMantegna,
  primavera,
  nascimentoDeVenus,
  damaComArminho,
  jardimDasDelicias,
  ultimaCeia,
  autorretratoDeDurer,
  aLebre,
  monaLisa,
  aTempestade,
  escolaDeAtenas,
  criacaoDeAdao,
  madonaSistina,
  bacoEAriadne,
  osEmbaixadores,
  venusDeUrbino,
  proverbiosFlamengos,
  bodasDeCana,
  torreDeBabel,
  cacadoresNaNeve,
  enterroDoCondeDeOrgaz,
  vocacaoDeSaoMateus,
  ceiaEmEmaus,
  daviComACabecaDeGolias,
  descidaDaCruzRubens,
  juditeEHolofernes,
  licaoDeAnatomia,
  tresGracas,
  rendicaoDeBreda,
  madalenaDeLaTour,
  rondaNoturna,
  venusDoEspelho,
  lasMeninas,
  aLeiteira,
  vistaDeDelft,
  osSindicos,
  mocaComBrincoDePerola,
  retornoDoFilhoProdigo,
  oGeografo,
  oBalanco,
  morteDeMarat,
  tresDeMaio,
  grandeOdalisca,
  andarilhoSobreOMarDeNevoa,
  balsaDaMedusa,
  carroDeFeno,
  saturno,
  liberdadeGuiandoOPovo,
  temerario,
  oAngelus,
  primeiraMissaNoBrasil,
  olympia,
  impressaoNascerDoSol,
  classeDeDanca,
  baileNoMoulinDeLaGalette,
  parisDiaDeChuva,
  barNoFoliesBergere,
  maraba,
  tardeNaGrandeJatte,
  independenciaOuMorte,
  girassois,
  noiteEstrelada,
  oQuartoEmArles,
  jogadoresDeCartas,
  caipiraPicandoFumo,
  oGrito,
  saudade,
  oVioleiro,
  oBeijo,
]

export function getObra(slug) {
  return obras.find((o) => o.slug === slug)
}

export function obrasPorSala() {
  return salas
    .map((sala) => ({ ...sala, obras: obras.filter((o) => o.sala === sala.id) }))
    .filter((sala) => sala.obras.length > 0)
}

function normalizar(texto) {
  // remove os diacríticos (U+0300 a U+036F) após decompor em NFD
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

// Corpus de busca por obra, computado uma única vez: além dos metadados,
// inclui a descrição inteira e os textos das lupas, para que buscas como
// "Cristo" ou "Deus" encontrem tudo o que as análises mencionam.
const corpusCache = new Map()
function corpus(obra) {
  let c = corpusCache.get(obra.slug)
  if (!c) {
    const sala = salas.find((s) => s.id === obra.sala)
    c = {
      forte: normalizar([obra.titulo, obra.artista].join(' ')),
      medio: normalizar([obra.estilo ?? '', ...(obra.temas ?? []), sala?.nome ?? ''].join(' ')),
      texto: normalizar(
        [
          obra.museu,
          obra.ano,
          ...obra.descricao,
          ...obra.lupas.flatMap((l) => [l.titulo, ...l.texto]),
        ].join(' ')
      ),
    }
    corpusCache.set(obra.slug, c)
  }
  return c
}

// Busca em texto completo, sem diferenciar acentos nem maiúsculas.
// Todos os termos precisam aparecer em algum lugar da obra; o resultado é
// ranqueado: título/artista pesam mais que temas/estilo, que pesam mais que
// menções no corpo do texto.
export function buscarObras(consulta) {
  const q = normalizar(consulta.trim())
  if (q.length < 2) return []
  const termos = q.split(/\s+/)
  const pontuadas = []
  for (const obra of obras) {
    const c = corpus(obra)
    let pontos = 0
    let valida = true
    for (const t of termos) {
      if (c.forte.includes(t)) {
        pontos += 3
      } else if (c.medio.includes(t)) {
        pontos += 2
      } else if (c.texto.includes(t)) {
        // quanto mais o texto da obra fala do termo, mais alto ela sobe
        const ocorrencias = c.texto.split(t).length - 1
        pontos += 1 + Math.min(ocorrencias - 1, 8) * 0.25
      } else {
        valida = false
        break
      }
    }
    if (valida) pontuadas.push({ obra, pontos })
  }
  return pontuadas.sort((a, b) => b.pontos - a.pontos).map((p) => p.obra)
}
