export default {
  slug: 'lamentacao-de-giotto',
  titulo: 'A Lamentação',
  artista: 'Giotto di Bondone',
  vidaArtista: 'c. 1267-1337',
  ano: 'c. 1305',
  tecnica: 'Afresco',
  dimensoes: 'c. 200 × 185 cm',
  museu: 'Capela dos Scrovegni, Pádua',
  corDominante: '#3a5a7a',
  sala: 'primitivos',
  estilo: 'Proto-Renascimento',
  temas: ['arte sacra', 'paixão de Cristo', 'afresco', 'luto', 'anjos'],
  tilesBase: 'https://movits.github.io/museu-virtual-acervo-1/tiles/',
  descricao: [
    'O corpo de Cristo acaba de ser descido da cruz. Maria o abraça e aproxima o rosto do rosto morto do filho; ao redor, cada figura sofre de um jeito próprio, e até o céu participa: dez anjos se contorcem no azul como pássaros feridos. Estamos por volta de 1305, e nada parecido havia sido pintado antes. Com esta cena, a pintura ocidental aprendeu a chorar.',
    'A Lamentação é o painel mais célebre do ciclo de afrescos que Giotto pintou na capela construída por Enrico Scrovegni em Pádua. O dinheiro que ergueu a capela era malvisto: o pai de Enrico, Reginaldo, enriquecera como usurário, e Dante o colocou entre os condenados do Inferno (canto XVII). A capela inteira funciona como um ato de reparação da família, um pedido de perdão construído em pedra e pintura.',
    'Antes de Giotto, a pintura italiana seguia a chamada maneira grega, herdada dos ícones bizantinos: figuras planas, douradas, solenes e fora do tempo. Giotto devolveu peso aos corpos, profundidade ao espaço e emoção aos rostos. Suas figuras se vestem de tecidos que dobram, pisam um chão que existe, ocupam um céu azul em vez do ouro eterno. Giorgio Vasari (1550) escreveu que foi ele quem trouxe de volta à luz a boa pintura.',
    'A composição é uma aula de dramaturgia. A linha da rocha desce em diagonal e conduz o olhar diretamente ao encontro dos dois rostos, o de Maria e o de Cristo, que é o centro emocional da cena, deslocado para o canto. No alto da rocha, uma árvore seca lembra a árvore do paraíso, morta com a queda de Adão, que a tradição prometia reverdecer com a ressurreição.',
    'A capela sobreviveu a sete séculos, a guerras e à poluição, e hoje é visitada em grupos pequenos, com tempo cronometrado, em ambiente climatizado. Desde 2021 é patrimônio mundial da UNESCO, parte dos ciclos de afrescos do século XIV de Pádua. Diante da Lamentação, o visitante moderno repete o gesto dos personagens: para, inclina-se e olha.',
  ],
  lupas: [
    {
      id: 'rostos-maria-cristo',
      titulo: 'Maria e o rosto do Filho',
      x: 0.18, y: 0.62, w: 0.25, h: 0.22,
      texto: [
        'Maria segura o corpo do filho e encosta seu rosto no dele, procurando nos olhos fechados algum resto de presença. É o núcleo da cena, e Giotto o deslocou do centro geométrico para o canto inferior esquerdo, obrigando nosso olhar a descer até ele pela diagonal da rocha.',
        'A proximidade dos dois rostos não tem precedente na tradição bizantina, onde a Mãe e o Filho mantinham a solenidade dos ícones. Aqui é uma mãe humana com o filho morto no colo, e toda a teologia da cena passa por esse abraço.',
      ],
    },
    {
      id: 'anjos',
      titulo: 'Os anjos em luto',
      x: 0.25, y: 0.04, w: 0.50, h: 0.26,
      texto: [
        'Os dez anjos que cortam o céu não flutuam serenos como na pintura anterior: eles se contorcem, arrancam os cabelos, escondem o rosto, abrem os braços em desespero. Cada um encarna um gesto diferente da dor, como um coro de tragédia.',
        'Giotto os pinta encurtados, vistos de baixo, alguns quase dissolvidos em nuvem da cintura para baixo. O detalhe é revolucionário: até o céu, na Lamentação, é arrastado para dentro do tempo humano do luto.',
      ],
    },
    {
      id: 'joao-evangelista',
      titulo: 'João de braços abertos',
      x: 0.42, y: 0.40, w: 0.27, h: 0.32,
      texto: [
        'No centro da cena, João, o discípulo amado, inclina o corpo para a frente e lança os braços para trás, como um pássaro no instante do mergulho. É o gesto mais teatral do afresco, e um dos mais imitados de toda a história da pintura.',
        'O gesto tem genealogia antiga: aparece em sarcófagos romanos com a morte de Meleagro, que Giotto pode ter conhecido. A arte cristã do século XIV reaprendia com a escultura pagã a linguagem do corpo em dor.',
      ],
    },
    {
      id: 'figuras-de-costas',
      titulo: 'As figuras de costas',
      x: 0.0, y: 0.62, w: 0.24, h: 0.36,
      texto: [
        'Em primeiro plano, duas figuras sentadas nos dão as costas. Elas escondem justamente o que mais queremos ver, o corpo de Cristo, e com isso nos transformam em parte do círculo de luto: somos a fileira de trás do velório.',
        'Esconder o principal era impensável na pintura de ícones, onde tudo se mostra de frente para a veneração. Giotto inventa aqui o espectador moderno: alguém que não recebe a cena pronta, mas precisa entrar nela.',
      ],
    },
    {
      id: 'arvore-seca',
      titulo: 'A árvore seca',
      x: 0.70, y: 0.10, w: 0.28, h: 0.28,
      texto: [
        'No alto da rocha nua, uma árvore sem folhas se recorta contra o azul. Na leitura cristã medieval, é a árvore do conhecimento, que secou quando Adão caiu, e que a ressurreição faria florescer de novo: a esperança discretamente plantada na cena mais triste do ciclo.',
        'A diagonal da rocha que desce da árvore até os rostos de Maria e Cristo liga, em uma única linha, a queda e a redenção. Nada na composição de Giotto é paisagem neutra: o próprio terreno prega.',
      ],
    },
  ],
}
