export default {
  slug: 'vista-de-delft',
  titulo: 'Vista de Delft',
  artista: 'Johannes Vermeer',
  vidaArtista: '1632-1675',
  ano: 'c. 1660-1661',
  tecnica: 'Óleo sobre tela',
  dimensoes: '96,5 × 115,7 cm',
  museu: 'Mauritshuis, Haia',
  corDominante: '#5a6a72',
  sala: 'barroco',
  estilo: 'Barroco holandês',
  temas: ['paisagem', 'cidade', 'luz', 'céu'],
  tilesBase: 'https://movits.github.io/museu-virtual-acervo-1/tiles/',
  descricao: [
    'Uma cidade vista da margem oposta do canal, numa manhã depois da chuva. Nuvens escuras ainda pesam sobre os telhados próximos, mas ao fundo o sol já acende uma torre e uma fileira de fachadas. É só isso, e Marcel Proust, depois de vê-la, escreveu que era o quadro mais belo do mundo. Vermeer pintou sua cidade natal uma única vez por inteiro, e bastou.',
    'Delft era uma cidade pequena e próspera, de cervejarias e faiança, e Vermeer quase não saiu dela. O ponto de vista é do sul, do outro lado do porto triangular: à esquerda a Porta de Schiedam com seu relógio, à direita a Porta de Roterdã com suas torrezinhas gêmeas, e atrás, banhada de sol, a torre da Igreja Nova, onde estava (e está) o túmulo de Guilherme de Orange, fundador da nação.',
    'A pintura é uma orquestração de luz precisa como um relógio: o primeiro plano na sombra de uma nuvem, a cidade do meio em penumbra, o fundo em sol pleno. O relógio da porta marca pouco depois das sete da manhã. Vermeer misturou areia à tinta em alguns telhados para fazer a luz granular; nos barcos e na água, pontos de tinta clara cintilam como os pointillés de A Leiteira.',
    'Na margem de cá, pequenas figuras conversam à espera da barcaça: mulheres de touca, um bebê ao colo, homens de preto. Elas dão escala e silêncio à cena: a cidade não posa, apenas começa seu dia. A água do canal, lisa, devolve a cidade dobrada, e o céu enorme, dois terços da tela, faz o resto: poucas pinturas dão tanto espaço ao ar.',
    'Em À sombra das raparigas em flor e A prisioneira, Proust fez seu escritor Bergotte morrer diante desta tela, olhando um pequeno pano de muro amarelo e compreendendo, tarde, que era assim que se deveria ter escrito: camada sobre camada, como uma laca preciosa. Desde então, visitantes do Mauritshuis procuram o tal petit pan de mur jaune, e discutem qual mancha exata ele é. A busca, talvez, seja o monumento: um quadro que ensina a olhar de novo, sempre.',
  ],
  lupas: [
    {
      id: 'muro-amarelo',
      titulo: 'O pedacinho de muro amarelo',
      x: 0.66, y: 0.54, w: 0.16, h: 0.09,
      texto: [
        'Em algum ponto desta zona ensolarada está o petit pan de mur jaune de Proust: o pequeno pano de muro amarelo diante do qual seu personagem Bergotte morre, em A prisioneira (1923), murmurando que era assim que se deveria ter escrito. Os estudiosos divergem sobre qual telhado ou parede exata é o trecho.',
        'A dúvida é parte da lição: Proust não apontou, descreveu um modo de pintar, matéria densa e preciosa como laca. Procure a mancha que parece mais cara que o ouro: a sua escolha vale tanto quanto a dos especialistas.',
      ],
    },
    {
      id: 'torre-da-igreja-nova',
      titulo: 'A torre ao sol',
      x: 0.595, y: 0.495, w: 0.12, h: 0.11,
      texto: [
        'Enquanto o primeiro plano dorme na sombra das nuvens, a torre da Nieuwe Kerk, a Igreja Nova, recebe sol pleno e queima em dourado pálido. É o ponto focal do quadro, e a escolha não é só ótica: ali está o túmulo de Guilherme de Orange, o pai da independência holandesa.',
        'A torre iluminada ao fundo de uma cidade em penumbra era, para qualquer holandês, uma frase legível: a nação, suas provas e sua esperança. Vermeer faz política e teologia apenas decidindo onde a nuvem acaba.',
      ],
    },
    {
      id: 'relogio-da-porta',
      titulo: 'O relógio que marca a hora',
      x: 0.375, y: 0.515, w: 0.10, h: 0.10,
      texto: [
        'Na torrezinha da Porta de Schiedam, à esquerda, um relógio minúsculo marca pouco mais de sete horas. É a manhã, portanto: a luz vem do leste, a cidade acorda, a barcaça da margem ainda espera os passageiros.',
        'O detalhe, do tamanho de uma unha, calibra o quadro inteiro: sabemos a hora, a estação aproximada e a direção do sol. Vermeer constrói sua poesia sobre dados exatos, como um agrimensor da luz.',
      ],
    },
    {
      id: 'figuras-na-margem',
      titulo: 'As figuras à espera',
      x: 0.04, y: 0.68, w: 0.28, h: 0.24,
      texto: [
        'Na margem de cá, pequenos grupos esperam: duas mulheres de touca branca conversam, uma carrega um bebê, homens de preto aguardam junto à barcaça. Ninguém faz nada de memorável, e é exatamente essa a grandeza.',
        'As figuras dão escala à cidade e temperatura humana ao silêncio. Vermeer, que dentro de casa pintava uma mulher por vez, aqui pinta sua cidade como quem pinta um interior: cada pessoa no seu lugar, à espera do dia.',
      ],
    },
    {
      id: 'ceu-enorme',
      titulo: 'O céu que ocupa metade do mundo',
      x: 0.15, y: 0.02, w: 0.70, h: 0.34,
      texto: [
        'Quase dois terços da tela são céu: nuvens escuras carregadas de chuva recente em cima, massas brancas iluminadas atrás, e um azul lavado abrindo no alto. A Holanda é plana, e seus pintores entenderam que a paisagem deles acontecia para cima.',
        'É o céu que conta o tempo do quadro: a chuva que passou, o sol que chega. Vermeer pinta a meteorologia como estado de espírito, e talvez seja isso que Proust reconheceu: a felicidade tem quase sempre essa forma, a de uma manhã que melhora.',
      ],
    },
  ],
}
