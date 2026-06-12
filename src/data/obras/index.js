import casalArnolfini from './casal-arnolfini.js'
import jardimDasDelicias from './jardim-das-delicias.js'
import osEmbaixadores from './os-embaixadores.js'
import vocacaoDeSaoMateus from './vocacao-de-sao-mateus.js'
import rondaNoturna from './ronda-noturna.js'
import lasMeninas from './las-meninas.js'
import mocaComBrincoDePerola from './moca-com-brinco-de-perola.js'
import andarilhoSobreOMarDeNevoa from './andarilho-sobre-o-mar-de-nevoa.js'
import impressaoNascerDoSol from './impressao-nascer-do-sol.js'
import noiteEstrelada from './noite-estrelada.js'

// Ordem cronológica: a visita atravessa quase cinco séculos de pintura
export const obras = [
  casalArnolfini,
  jardimDasDelicias,
  osEmbaixadores,
  vocacaoDeSaoMateus,
  rondaNoturna,
  lasMeninas,
  mocaComBrincoDePerola,
  andarilhoSobreOMarDeNevoa,
  impressaoNascerDoSol,
  noiteEstrelada,
]

export function getObra(slug) {
  return obras.find((o) => o.slug === slug)
}
