export default {
  slug: 'morte-de-marat',
  titulo: 'A Morte de Marat',
  artista: 'Jacques-Louis David',
  vidaArtista: '1748-1825',
  ano: '1793',
  tecnica: 'Óleo sobre tela',
  dimensoes: '165 × 128 cm',
  museu: 'Museus Reais de Belas-Artes da Bélgica, Bruxelas',
  corDominante: '#3a4234',
  sala: 'seculo-xix',
  estilo: 'Neoclassicismo',
  temas: ['revolução', 'política', 'morte', 'martírio'],
  tilesBase: 'https://movits.github.io/museu-virtual-acervo-1/tiles/',
  descricao: [
    'Um homem morto em uma banheira, uma carta na mão, uma caixa de madeira como lápide. Com esses elementos pobres, David construiu a imagem política mais poderosa do seu século: o assassinato transformado em martírio, o jornalista radical transformado em santo laico de uma religião nova, a Revolução.',
    'Jean-Paul Marat, médico, jornalista e deputado jacobino, era uma das vozes mais violentas da Revolução Francesa: seu jornal, O Amigo do Povo, pedia cabeças, e conseguia. Uma doença de pele o obrigava a trabalhar de banheira, com a prancha de escrever atravessada. Foi ali que Charlotte Corday, simpatizante girondina de 24 anos, o apunhalou em 13 de julho de 1793, depois de entrar com o pretexto de denunciar conspiradores.',
    'David, amigo de Marat, deputado jacobino e o maior pintor da França, recebeu da Convenção a encomenda no dia seguinte ao funeral. Entregou em três meses esta pietà secular: o braço pendente do morto cita diretamente as Deposições de Cristo da tradição, o rosto recebe uma serenidade que o Marat real, desfigurado pela doença, não tinha, e toda a metade superior da tela é deixada vazia, um nada escuro que pesa como o céu de um Calvário.',
    'A propaganda é minuciosa: na mão esquerda, Marat segura a carta da própria assassina, com seu apelo hipócrita à benevolência; sobre o caixote de madeira, ao lado da pena, um assignat, nota da Revolução, que ele estaria doando a uma viúva de guerra. O punhal jaz no chão, ao lado do sangue. Na caixa, a dedicatória lapidar: À MARAT, DAVID. O luxo da virtude e a pobreza dos móveis: a Revolução julgando o Antigo Regime até na mobília.',
    'Quando a maré virou e os jacobinos caíram, o quadro foi devolvido a David, que o levou consigo para o exílio em Bruxelas, onde está até hoje. Baudelaire (1846) escreveu sobre ele as palavras definitivas: cruel como a natureza, com o perfume do ideal. A pintura de história tinha aprendido a operar com o presente, e o cartaz político nasceu aqui, com qualidade de obra-prima.',
  ],
  lupas: [
    {
      id: 'carta-na-mao',
      titulo: 'A carta da assassina',
      x: 0.62, y: 0.51, w: 0.22, h: 0.12,
      texto: [
        'Na mão esquerda, já sem força, Marat segura a carta que Charlotte Corday usou para chegar até ele. Lê-se a data, 13 de julho de 1793, e o apelo: basta que eu seja bem infeliz para ter direito à vossa benevolência.',
        'A carta real ficou com a polícia; David a recria como prova moral: o homem que morreu por atender uma súplica. A frase, legível até hoje, transforma o espectador em jurado, e o veredicto já vem pintado.',
      ],
    },
    {
      id: 'rosto-de-marat',
      titulo: 'O rosto serenado',
      x: 0.05, y: 0.41, w: 0.21, h: 0.14,
      texto: [
        'A cabeça envolta no turbante de vinagre pende sobre o ombro com a serenidade de um santo em êxtase, não de um assassinado. O Marat real tinha a pele devastada pela doença; David a alisou, deixando apenas a palidez nobre da morte.',
        'O braço caído ao lado da banheira cita as Deposições de Cristo, de Rafael a Caravaggio. Era exatamente a intenção: a Convenção exibiu o corpo de Marat como relíquia, e o quadro consagrou a liturgia. O vocabulário cristão a serviço da religião revolucionária.',
      ],
    },
    {
      id: 'caixote-assinatura',
      titulo: 'O caixote-lápide',
      x: 0.55, y: 0.62, w: 0.34, h: 0.34,
      texto: [
        'A mesa de cabeceira de Marat é um caixote de madeira crua, e sua face frontal vira lápide: À MARAT, DAVID. L\'AN DEUX, o ano dois do novo calendário revolucionário. A dedicatória do pintor inscrita como epitáfio.',
        'Sobre o caixote, o tinteiro, a pena e um assignat com bilhete: a nota que Marat doaria a uma mãe viúva. A pobreza dos objetos é o argumento: o amigo do povo morreu sem nada, escrevendo. Virtude romana em madeira de pinho.',
      ],
    },
    {
      id: 'punhal-e-sangue',
      titulo: 'O punhal no chão',
      x: 0.09, y: 0.92, w: 0.22, h: 0.075,
      texto: [
        'No chão, perto da banheira, o punhal de cabo branco que Corday comprou naquela manhã no Palais-Royal. David o pinta caído, pequeno, já inofensivo, com o brilho frio de uma prova de tribunal.',
        'O sangue tinge a água e o lençol com discrição calculada: o horror suficiente para comover, nunca o bastante para repugnar. A violência editada é parte da retórica: o mártir precisa estar ferido, mas não desfigurado.',
      ],
    },
    {
      id: 'vazio-superior',
      titulo: 'A metade vazia',
      x: 0.20, y: 0.02, w: 0.60, h: 0.28,
      texto: [
        'Quase metade da tela é um vazio escuro, atravessado por uma luz lateral suave. Nenhum pintor de história deixava tanto espaço sem nada: ali deveriam estar cortinas, alegorias, arquitetura.',
        'O vazio é o céu deste martírio sem Deus: um silêncio pintado sobre o morto. Os historiadores veem nele um dos gestos mais modernos do quadro, antecipando em mais de um século os campos de cor abstratos. A ausência, aqui, é a oração.',
      ],
    },
  ],
}
