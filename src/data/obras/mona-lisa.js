export default {
  slug: 'mona-lisa',
  titulo: 'Mona Lisa',
  artista: 'Leonardo da Vinci',
  vidaArtista: '1452-1519',
  ano: '1503-1506',
  tecnica: 'Óleo sobre madeira de álamo',
  dimensoes: '77 × 53 cm',
  museu: 'Museu do Louvre, Paris',
  corDominante: '#4a4226',
  sala: 'renascimento',
  estilo: 'Alto Renascimento',
  temas: ['retrato', 'sfumato', 'mistério', 'paisagem'],
  tilesBase: 'https://movits.github.io/museu-virtual-acervo-1/tiles/',
  descricao: [
    'É o quadro mais famoso do mundo, e justamente por isso quase ninguém consegue vê-lo. No Louvre, a multidão tem trinta segundos diante de um vidro blindado; aqui, podemos fazer o que Leonardo pediria: chegar perto e demorar. Porque a fama não é um mal-entendido: este pequeno retrato de 77 centímetros concentra mais invenções por centímetro quadrado do que qualquer pintura de seu século.',
    'A identificação mais aceita vem de Giorgio Vasari (1550): Lisa Gherardini, esposa do mercador de sedas florentino Francesco del Giocondo, daí o outro nome do quadro, La Gioconda. Leonardo o começou por volta de 1503 e nunca o entregou: levou-o consigo por anos de viagens, retocando, e o tinha ao lado quando morreu na França, em 1519, a serviço do rei Francisco I, que o adquiriu para a coleção real.',
    'A técnica que faz o rosto parecer vivo chama-se sfumato: dezenas de velaturas de óleo finíssimas, algumas com pigmento quase invisível, sobrepostas até que nenhum contorno exista de fato. Os cantos da boca e dos olhos, os pontos que definem uma expressão, estão deliberadamente esfumados, e por isso o sorriso parece mudar: nosso olho completa, a cada olhada, o que o pintor deixou em aberto.',
    'Atrás da figura se estende uma paisagem que não existe em mapa nenhum: rochas, vales nevoentos, um lago alto à direita e um caminho serpenteante à esquerda, unidos por uma ponte. Os dois lados do horizonte não se alinham, o direito é mais alto que o esquerdo, e essa assimetria sutil mantém o retrato em movimento perpétuo: conforme o olho cruza o rosto, o mundo atrás dele muda de nível.',
    'A celebridade absoluta veio por um crime: em 1911, o vidraceiro italiano Vincenzo Peruggia tirou o quadro da parede e o levou para a Itália, convencido de devolvê-lo à pátria. Por dois anos, a moldura vazia atraiu mais visitantes que o quadro; recuperado em Florença em 1913, ele voltou ao Louvre como a obra de arte mais fotografada do planeta. O retrato silencioso de uma senhora florentina tornou-se o rosto pelo qual a própria palavra arte é reconhecida.',
  ],
  lupas: [
    {
      id: 'sorriso',
      titulo: 'O sorriso esfumado',
      x: 0.375, y: 0.29, w: 0.15, h: 0.06,
      texto: [
        'Aproxime-se dos cantos da boca: não há linha nenhuma, apenas sombra que se dissolve em sombra. É o sfumato no seu ponto máximo, camadas de óleo quase transparentes que Leonardo aplicava às vezes com os dedos, e que deixam a expressão eternamente inacabada.',
        'A neurociência explicou parte do encanto: nossa visão periférica, sensível a sombras, vê o sorriso com mais força do que a visão central, que busca detalhes. Por isso ele parece aumentar quando olhamos os olhos e diminuir quando olhamos a boca. O quadro responde ao nosso olhar, literalmente.',
      ],
    },
    {
      id: 'olhos',
      titulo: 'Os olhos que acompanham',
      x: 0.345, y: 0.205, w: 0.22, h: 0.06,
      texto: [
        'Os olhos castanhos nos fixam de frente, e a sensação de que seguem o espectador pelo museu é geometria simples: em um retrato pintado de frente, o olhar acompanha qualquer ângulo de visão. Mas o brilho úmido das córneas e as meias-sombras das pálpebras são pura pintura.',
        'Repare na ausência de sobrancelhas e cílios: análises recentes sugerem que existiram e se perderam em limpezas antigas, ou que ficaram apenas esboçados. O rosto liso, involuntariamente moderno, só aumentou a estranheza atemporal da figura.',
      ],
    },
    {
      id: 'maos',
      titulo: 'As mãos pousadas',
      x: 0.26, y: 0.68, w: 0.46, h: 0.26,
      texto: [
        'A mão direita repousa sobre a esquerda, no braço da cadeira, em um gesto de calma absoluta. Foi uma revolução silenciosa do retrato: em vez do busto cortado da tradição, a figura a meio corpo, com as mãos compondo uma pirâmide estável que sobe até o rosto.',
        'Leonardo, anatomista obsessivo, constrói as mãos por dentro: sentem-se os ossos sob a pele macia. A fórmula da pirâmide com mãos à mostra foi copiada por Rafael imediatamente e nunca mais saiu da gramática do retrato ocidental.',
      ],
    },
    {
      id: 'paisagem-e-ponte',
      titulo: 'A paisagem impossível e a ponte',
      x: 0.70, y: 0.18, w: 0.29, h: 0.33,
      texto: [
        'Atrás do ombro esquerdo da modelo, montanhas azuladas se dissolvem na distância pela perspectiva aérea, outra invenção que Leonardo teorizou: o ar entre nós e as coisas as torna mais claras e azuis. Abaixo, uma ponte de arcos, talvez inspirada na Ponte Buriano, sobre o rio Arno, é o único sinal humano do panorama.',
        'Os dois lados da paisagem não se encontram: o horizonte direito é visivelmente mais alto que o esquerdo. O desencontro, imperceptível à primeira vista, faz o fundo oscilar conforme o olhar cruza o rosto, e o retrato inteiro respira.',
      ],
    },
    {
      id: 'veu',
      titulo: 'O véu quase invisível',
      x: 0.24, y: 0.16, w: 0.24, h: 0.30,
      texto: [
        'Sobre os cabelos castanhos desce um véu de gaze tão fino que séculos de espectadores nem o notaram. Procure a linha sutil que atravessa a testa: é a bainha. Pintar um tecido transparente sobre o céu e o cabelo, sem traí-lo em nenhum ponto, é um dos feitos técnicos mais discretos do quadro.',
        'O véu escuro já foi lido como luto, mas era acessório comum e elegante das damas da época. A roupa toda é sóbria, sem joias: Leonardo retirou do retrato tudo o que datasse a figura, e talvez por isso ela nunca tenha envelhecido.',
      ],
    },
  ],
}
