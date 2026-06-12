export default {
  slug: 'a-lebre',
  titulo: 'A Jovem Lebre',
  artista: 'Albrecht Dürer',
  vidaArtista: '1471-1528',
  ano: '1502',
  tecnica: 'Aquarela e guache sobre papel',
  dimensoes: '25,1 × 22,6 cm',
  museu: 'Albertina, Viena',
  corDominante: '#8a724e',
  sala: 'renascimento',
  estilo: 'Renascimento nórdico',
  temas: ['natureza', 'animal', 'aquarela', 'observação'],
  tilesBase: 'https://movits.github.io/museu-virtual-acervo-3/tiles/',
  descricao: [
    'Uma lebre parada, pronta para fugir, num papel sem cenário nenhum: nenhuma grama, nenhuma sombra de árvore, só o animal e a atenção de quem o pintou. Em 1502, ninguém pintava um bicho assim, como assunto completo, em tamanho quase natural, com cada pelo no lugar. Dürer o fez de aquarela, assinou com o monograma e a data como se fosse um retábulo, e criou o estudo de natureza mais famoso do mundo.',
    'A pergunta de quinhentos anos: como ele conseguiu? Lebres não posam. As hipóteses se acumulam: um animal capturado e mantido no ateliê, um exemplar morto complementado por desenhos do vivo, ou a soma de muitos estudos. A resposta provável é o método Dürer: observação acumulada até a memória ficar tão precisa quanto o olho.',
    'A técnica é uma aula em camadas: aguadas largas de aquarela constroem o volume pardo do corpo; por cima, a ponta fina do pincel levanta o pelo fio a fio, em guache mais claro e mais escuro, mudando de direção conforme o pelo real muda, do focinho à anca. As orelhas, atentas a sons diferentes, e os bigodes contra o fundo nu completam o organismo: a impressão célebre é a de que, ao menor ruído, o papel ficará vazio.',
    'No olho da lebre, Dürer pintou um reflexo: o vão claro de uma janela com travessas, a janela do ateliê. É a assinatura escondida do método: o animal selvagem registrado dentro de casa, com a luz doméstica gravada na córnea. O mesmo reflexo de janela aparece nos olhos do seu Autorretrato de 1500, que está nesta galeria: o pintor e a lebre se olharam na mesma sala.',
    'A folha pertence à Albertina de Viena, que a exibe raramente: a luz desbota aquarelas, e cada exposição é racionada como relíquia. No resto do tempo, circulam cópias e a fome do público, que fez da lebre um ícone pop austríaco. Aqui, o scan em alta resolução permite a visita que nem Viena permite: pelo a pelo, até o reflexo da janela.',
  ],
  lupas: [
    {
      id: 'olho-com-janela',
      titulo: 'A janela dentro do olho',
      x: 0.55, y: 0.45, w: 0.13, h: 0.13,
      texto: [
        'No olho escuro da lebre, um ponto de luz com travessas: o reflexo da janela do ateliê de Dürer. O animal do campo carrega, na córnea, a prova de que posou dentro de casa.',
        'É o mesmo reflexo de janela que Dürer pintou nos próprios olhos no Autorretrato de 1500, presente nesta galeria. A janela no olho era sua marca de verdade: a luz real do lugar real, gravada em quem olha.',
      ],
    },
    {
      id: 'monograma',
      titulo: 'O monograma e a data',
      x: 0.47, y: 0.84, w: 0.20, h: 0.14,
      texto: [
        'Sob as patas, o famoso monograma AD e a data 1502, do tamanho e na posição em que se assina uma obra-prima, não um estudo. Era exatamente a tese: um bicho observado vale uma assinatura solene.',
        'Dürer elevou o estudo de natureza a gênero autônomo com este gesto. A Grande Touceira de Relva, do ano seguinte, completaria o manifesto: a natureza inteira, do capim à lebre, promovida a assunto.',
      ],
    },
    {
      id: 'pelo-a-pelo',
      titulo: 'O pelo, fio a fio',
      x: 0.16, y: 0.36, w: 0.30, h: 0.30,
      texto: [
        'Aproxime-se do dorso: sob os fios individuais há aguadas largas de aquarela que fazem o volume; por cima, pinceladas de um fio só, claras e escuras, mudam de direção como o pelo verdadeiro muda, redemoinhando no ombro e alisando na anca.',
        'É o método em duas camadas que os falsificadores nunca acertaram: primeiro o corpo, depois a pelagem, nunca o contrário. As cópias antigas da lebre, e há dezenas, morrem sempre nesse detalhe.',
      ],
    },
    {
      id: 'orelhas',
      titulo: 'As orelhas em alerta',
      x: 0.33, y: 0.08, w: 0.30, h: 0.27,
      texto: [
        'As duas orelhas apontam para direções diferentes, cada uma monitorando seu setor de ruído: o desenho exato do animal de presa em repouso vigiado. Dentro delas, a aquarela rosada deixa ver a translucidez da cartilagem contra a luz.',
        'É a fisiologia do medo pintada com ternura: a lebre está parada, mas nenhuma parte dela está desligada. O vazio do papel ao redor vira, por causa das orelhas, um campo cheio de sons que não ouvimos.',
      ],
    },
  ],
}
