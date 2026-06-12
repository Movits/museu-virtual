export default {
  slug: 'o-pintassilgo',
  titulo: 'O Pintassilgo',
  artista: 'Carel Fabritius',
  vidaArtista: '1622-1654',
  ano: '1654',
  tecnica: 'Óleo sobre madeira',
  dimensoes: '33,5 × 22,8 cm',
  museu: 'Mauritshuis, Haia',
  corDominante: '#c8b896',
  sala: 'barroco',
  estilo: 'Barroco holandês',
  temas: ['pássaro', 'trompe-l\'oeil', 'Delft', 'cativeiro'],
  tilesBase: 'https://movits.github.io/museu-virtual-acervo-3/tiles/',
  descricao: [
    'Um pássaro pequeno, pousado no poleiro da sua caixa de comedouro, preso por uma corrente fina ao próprio pouso, contra uma parede caiada banhada de sol. O quadro inteiro cabe em duas mãos abertas, e carrega uma das histórias mais tristes e luminosas da pintura holandesa.',
    'Carel Fabritius foi o aluno mais dotado de Rembrandt e, instalado em Delft, fez o caminho que o mestre não fez: trocou o escuro pelo claro, o fundo de sombra pela parede iluminada. A tradição vê nele a ponte entre Rembrandt e Vermeer, seu vizinho de cidade, que colecionava ecos da sua luz. Este painel é de 1654, o ano em que tudo acabou.',
    'Na manhã de 12 de outubro de 1654, o paiol de pólvora de Delft explodiu, arrasou um quarto da cidade e matou o pintor aos trinta e dois anos, com o ateliê e quase toda a obra. Sobrevivem hoje pouco mais de uma dúzia de quadros de Fabritius. O pintassilgo, pintado nesse mesmo ano, virou o emblema do que se perdeu: um talento imenso reduzido a um punhado de painéis.',
    'O holandês chama a ave de puttertje, a tiradora de água: pintassilgos eram bichos de estimação populares, treinados a puxar a própria água do poço com um baldinho em miniatura preso a uma corrente. O painel talvez tenha servido de tampa de caixa ou de pequeno engano de parede, um trompe-l\'oeil para fazer a visita olhar duas vezes: a ave pintada em tamanho natural, com sombra própria, sobre a parede real.',
    'De perto, o engano se desmonta com elegância: a asa amarela é uma pincelada larga e gorda, o peito é um borrão quente, a cabeça resolve-se em três tons. De longe, tudo vira pena. Esse jogo entre a mancha e a ilusão encantaria os impressionistas dois séculos depois, e o romance O Pintassilgo, de Donna Tartt (2013), devolveu ao pequeno painel uma fama mundial que nenhum quadro do seu tamanho conhece.',
  ],
  lupas: [
    {
      id: 'cabeca-e-olho',
      titulo: 'A cabeça em três tons',
      x: 0.60, y: 0.17, w: 0.26, h: 0.20,
      texto: [
        'A máscara vermelha, o crânio preto, a face branca: a cabeça do pintassilgo se resolve em três campos de cor quase sem desenho, e o olho é um único ponto escuro com um toque de luz. De longe, vida; de perto, economia absoluta.',
        'O pássaro nos olha de lado, com a atenção desconfiada dos bichos presos. Fabritius aprendeu com Rembrandt a pôr alma num olho de poucos milímetros; aqui aplica a lição ao menor retratado da pintura holandesa.',
      ],
    },
    {
      id: 'asa-amarela',
      titulo: 'A pincelada que vira pena',
      x: 0.42, y: 0.32, w: 0.26, h: 0.16,
      texto: [
        'A barra amarela da asa é uma única pincelada carregada, atravessada por riscos escuros feitos talvez com o cabo do pincel. É o trecho do painel onde a pintura mais se mostra como pintura, e justamente por isso o que mais convence como pena.',
        'Essa franqueza da mancha, rara no século XVII holandês de acabamentos lambidos, fez os críticos modernos verem em Fabritius um antepassado dos impressionistas: a ilusão obtida pela síntese, não pelo polimento.',
      ],
    },
    {
      id: 'corrente',
      titulo: 'A corrente fina',
      x: 0.26, y: 0.44, w: 0.26, h: 0.40,
      texto: [
        'Do tornozelo da ave, uma corrente dourada de elos minúsculos desce e se prende à caixa do comedouro. É o detalhe que transforma o estudo de pássaro em imagem do cativeiro: o voo inteiro contido por gramas de metal.',
        'Pintassilgos domésticos, os puttertjes, eram treinados a puxar água com baldinho preso a correntes assim. O encanto de salão escondia a pequena servidão, e Fabritius a pinta sem comentário: só o elo, o poleiro e a paciência do bicho.',
      ],
    },
    {
      id: 'sombra-na-parede',
      titulo: 'A sombra no reboco',
      x: 0.74, y: 0.30, w: 0.24, h: 0.34,
      texto: [
        'A ave projeta na parede caiada uma sombra dupla e suave, e o reboco tem manchas, respingos e imperfeições pintadas uma a uma. É a metade esquecida do truque: para o pássaro parecer real, a parede precisa parecer mais real ainda.',
        'Essa parede clara e viva é a grande heresia do aluno de Rembrandt: a luz como fundo, não o breu. Vermeer, em Delft, levaria a mesma parede iluminada para dentro das suas cozinhas e salas, como na Leiteira desta galeria.',
      ],
    },
    {
      id: 'assinatura',
      titulo: 'C. Fabritius, 1654',
      x: 0.30, y: 0.89, w: 0.52, h: 0.10,
      texto: [
        'Na base do painel, a assinatura e a data: C. Fabritius 1654. É o último ano da vida do pintor, encerrado pela explosão do paiol de Delft em 12 de outubro, que destruiu o ateliê, a obra e o homem aos trinta e dois anos.',
        'Restam pouco mais de doze pinturas suas no mundo. A assinatura miúda sob o pássaro acorrentado lê-se hoje como epitáfio involuntário: o nome, o ano, e logo acima a pequena vida presa que sobreviveu ao desastre por estar pendurada em outra parede.',
      ],
    },
  ],
}
