import lamentacaoDeGiotto from './lamentacao-de-giotto.js'
import anunciacaoDeFraAngelico from './anunciacao-de-fra-angelico.js'
import casalArnolfini from './casal-arnolfini.js'
import descidaDaCruzVanDerWeyden from './descida-da-cruz-van-der-weyden.js'
import cristoMortoMantegna from './cristo-morto-mantegna.js'
import primavera from './primavera.js'
import nascimentoDeVenus from './nascimento-de-venus.js'
import jardimDasDelicias from './jardim-das-delicias.js'
import autorretratoDeDurer from './autorretrato-de-durer.js'
import monaLisa from './mona-lisa.js'
import escolaDeAtenas from './escola-de-atenas.js'
import criacaoDeAdao from './criacao-de-adao.js'
import osEmbaixadores from './os-embaixadores.js'
import torreDeBabel from './torre-de-babel.js'
import enterroDoCondeDeOrgaz from './enterro-do-conde-de-orgaz.js'
import vocacaoDeSaoMateus from './vocacao-de-sao-mateus.js'
import daviComACabecaDeGolias from './davi-com-a-cabeca-de-golias.js'
import descidaDaCruzRubens from './descida-da-cruz-rubens.js'
import licaoDeAnatomia from './licao-de-anatomia.js'
import rendicaoDeBreda from './rendicao-de-breda.js'
import rondaNoturna from './ronda-noturna.js'
import lasMeninas from './las-meninas.js'
import aLeiteira from './a-leiteira.js'
import vistaDeDelft from './vista-de-delft.js'
import mocaComBrincoDePerola from './moca-com-brinco-de-perola.js'
import retornoDoFilhoProdigo from './retorno-do-filho-prodigo.js'
import morteDeMarat from './morte-de-marat.js'
import tresDeMaio from './tres-de-maio.js'
import andarilhoSobreOMarDeNevoa from './andarilho-sobre-o-mar-de-nevoa.js'
import balsaDaMedusa from './balsa-da-medusa.js'
import liberdadeGuiandoOPovo from './liberdade-guiando-o-povo.js'
import oAngelus from './o-angelus.js'
import primeiraMissaNoBrasil from './primeira-missa-no-brasil.js'
import impressaoNascerDoSol from './impressao-nascer-do-sol.js'
import baileNoMoulinDeLaGalette from './baile-no-moulin-de-la-galette.js'
import barNoFoliesBergere from './bar-no-folies-bergere.js'
import tardeNaGrandeJatte from './tarde-na-grande-jatte.js'
import independenciaOuMorte from './independencia-ou-morte.js'
import noiteEstrelada from './noite-estrelada.js'
import caipiraPicandoFumo from './caipira-picando-fumo.js'

// As salas do museu, em ordem de visita
export const salas = [
  { id: 'primitivos', nome: 'Primitivos e Primeiro Renascimento' },
  { id: 'renascimento', nome: 'Renascimento' },
  { id: 'barroco', nome: 'Barroco e o Século de Ouro' },
  { id: 'seculo-xix', nome: 'Do Romantismo ao Impressionismo' },
  { id: 'brasil', nome: 'Brasil' },
]

// Ordem cronológica dentro do acervo
export const obras = [
  lamentacaoDeGiotto,
  anunciacaoDeFraAngelico,
  casalArnolfini,
  descidaDaCruzVanDerWeyden,
  cristoMortoMantegna,
  primavera,
  nascimentoDeVenus,
  jardimDasDelicias,
  autorretratoDeDurer,
  monaLisa,
  escolaDeAtenas,
  criacaoDeAdao,
  osEmbaixadores,
  torreDeBabel,
  enterroDoCondeDeOrgaz,
  vocacaoDeSaoMateus,
  daviComACabecaDeGolias,
  descidaDaCruzRubens,
  licaoDeAnatomia,
  rendicaoDeBreda,
  rondaNoturna,
  lasMeninas,
  aLeiteira,
  vistaDeDelft,
  mocaComBrincoDePerola,
  retornoDoFilhoProdigo,
  morteDeMarat,
  tresDeMaio,
  andarilhoSobreOMarDeNevoa,
  balsaDaMedusa,
  liberdadeGuiandoOPovo,
  oAngelus,
  primeiraMissaNoBrasil,
  impressaoNascerDoSol,
  baileNoMoulinDeLaGalette,
  barNoFoliesBergere,
  tardeNaGrandeJatte,
  independenciaOuMorte,
  noiteEstrelada,
  caipiraPicandoFumo,
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

// Busca por título, artista, estilo, temas, museu, ano e sala, sem
// diferenciar acentos nem maiúsculas. Todos os termos precisam aparecer.
export function buscarObras(consulta) {
  const q = normalizar(consulta.trim())
  if (q.length < 2) return []
  const termos = q.split(/\s+/)
  return obras.filter((obra) => {
    const sala = salas.find((s) => s.id === obra.sala)
    const texto = normalizar(
      [obra.titulo, obra.artista, obra.estilo ?? '', obra.museu, obra.ano, sala?.nome ?? '', ...(obra.temas ?? [])].join(' ')
    )
    return termos.every((t) => texto.includes(t))
  })
}
