export default {
  slug: 'ultima-ceia',
  titulo: 'A Última Ceia',
  artista: 'Leonardo da Vinci',
  vidaArtista: '1452-1519',
  ano: '1495-1498',
  tecnica: 'Têmpera e óleo sobre reboco seco',
  dimensoes: '460 × 880 cm',
  museu: 'Refeitório de Santa Maria delle Grazie, Milão',
  corDominante: '#4a4030',
  sala: 'renascimento',
  estilo: 'Alto Renascimento',
  temas: ['arte sacra', 'evangelho', 'perspectiva', 'eucaristia', 'traição'],
  tilesBase: 'https://movits.github.io/museu-virtual-acervo-2/tiles/',
  descricao: [
    'Um de vós me trairá. Leonardo escolheu pintar o segundo exato em que a frase acaba de ser dita (João 13,21), e a mesa explode: os doze apóstolos reagem em ondas de espanto, negação, fúria e pergunta, em grupos de três, enquanto no centro Cristo permanece imóvel, de braços abertos, um triângulo de calma no meio da tempestade que ele mesmo causou.',
    'O mural foi pintado entre 1495 e 1498 para o refeitório do convento dominicano de Santa Maria delle Grazie, em Milão, a pedido de Ludovico Sforza. A ideia era antiga, monges jantando diante da ceia sagrada, mas Leonardo a refez por inteiro: a perspectiva do salão pintado continua a arquitetura do refeitório real, e o ponto de fuga converge na têmpora de Cristo, de modo que toda a geometria do mundo termina no rosto de quem vai morrer.',
    'A obra começou a morrer quase junto. Leonardo, lento e experimental, recusou a técnica do afresco, que exige rapidez sobre o reboco úmido, e pintou a seco com têmpera e óleo, para poder retocar como num quadro. O resultado: já em 1517 a tinta descascava, e o mural atravessou os séculos entre restauros, repinturas, uma porta aberta na parede (cortando os pés de Cristo) e a bomba de 1943, que destruiu o teto do refeitório e poupou a parede por milagre e sacos de areia.',
    'A grande restauração de 1978 a 1999, conduzida por Pinin Brambilla Barcilon, removeu as repinturas e recuperou o que restava da mão de Leonardo: talvez vinte por cento da superfície original, mas o suficiente para devolver os rostos, a luz e a mesa posta com pães, vinho e pratos que os frades reconheciam do próprio jantar. É essa versão restaurada que está nesta galeria.',
    'Entre todos os detalhes, os contemporâneos celebraram um: as mãos. Cada apóstolo fala com elas, aponta, jura, se defende, e Judas, no escuro, aperta a bolsa de dinheiro enquanto estende a outra mão para o mesmo prato que Cristo, cumprindo a profecia ao pé da letra. Vasari (1550) contou que o prior reclamava da lentidão do pintor, e Leonardo respondeu que ainda procurava um rosto suficientemente vil para Judas, e que, se não o achasse, podia usar o do prior.',
  ],
  lupas: [
    {
      id: 'cristo-no-centro',
      titulo: 'O triângulo imóvel',
      x: 0.40, y: 0.28, w: 0.20, h: 0.42,
      texto: [
        'Cristo abre os braços e baixa os olhos, formando um triângulo perfeito, a forma mais estável da geometria, no centro exato da tempestade. Atrás dele, a janela emoldura sua cabeça com o céu: a auréola de Leonardo é feita de luz natural, não de ouro.',
        'O ponto de fuga de toda a perspectiva converge na sua têmpora direita: cada linha do teto e da mesa termina nele. A composição é a teologia: quando tudo se agita, há um centro que permanece, e é para ele que o espaço inteiro aponta.',
      ],
    },
    {
      id: 'judas-na-sombra',
      titulo: 'Judas, a bolsa e o sal',
      x: 0.25, y: 0.40, w: 0.12, h: 0.28,
      texto: [
        'Judas é o terceiro à esquerda de Cristo, de perfil escuro, recuado: o único rosto que a luz não alcança em cheio. Na mão direita, aperta a bolsa com as trinta moedas; com a esquerda, estende-se para o prato, cumprindo a palavra: o que mete comigo a mão no prato, esse me trairá (Mateus 26,23).',
        'Junto ao seu braço, um saleiro derrubado espalha sal na toalha: o velho presságio de ruptura e má sorte, visível nas cópias antigas e recuperado pela restauração. Leonardo aboliu a tradição de isolar Judas do outro lado da mesa: o traidor janta entre os fiéis, como na vida.',
      ],
    },
    {
      id: 'grupo-de-pedro-e-joao',
      titulo: 'Pedro, João e a faca',
      x: 0.31, y: 0.35, w: 0.15, h: 0.32,
      texto: [
        'À esquerda de Judas, Pedro avança por trás dele e sussurra no ouvido de João: pergunta-lhe quem é o traidor, como narra o Evangelho (João 13,24). João, o discípulo amado, fecha os olhos e une as mãos, jovem e suave como a tradição o pintava.',
        'Repare na mão direita de Pedro: ela já segura uma faca, virada para fora da cena. É o prenúncio da orelha de Malco, que ele cortará horas depois no Getsêmani. Leonardo conta a noite inteira dentro de um único gesto escondido.',
      ],
    },
    {
      id: 'grupo-de-tome',
      titulo: 'O dedo de Tomé',
      x: 0.54, y: 0.30, w: 0.18, h: 0.36,
      texto: [
        'À direita de Cristo, Tomé ergue o indicador para o alto, perguntando. É o mesmo dedo que, depois da ressurreição, exigirá tocar as chagas (João 20,25): Leonardo o pinta já levantado, como uma assinatura antecipada da dúvida.',
        'No mesmo grupo, Tiago Maior abre os braços em espanto e Filipe leva as mãos ao peito: sou eu, Senhor? Cada um dos doze reage com o próprio temperamento: o mural é um catálogo de como os homens recebem uma má notícia.',
      ],
    },
    {
      id: 'mesa-posta',
      titulo: 'A mesa dos frades',
      x: 0.16, y: 0.575, w: 0.68, h: 0.115,
      texto: [
        'A toalha de linho com vincos de dobra, os pães espalhados, as taças de vinho, os pratos com enguias e frutas: a mesa da Ceia é a mesa de um refeitório lombardo do século XV, posta diante de frades que jantavam olhando para ela.',
        'A restauração de 1978-1999 recuperou esses detalhes sob séculos de repintura: até rodelas de limão sobre o peixe. A eucaristia acontece numa mesa real, com comida real: era exatamente o sermão que o refeitório precisava.',
      ],
    },
    {
      id: 'porta-cortada',
      titulo: 'A cicatriz da porta',
      x: 0.40, y: 0.60, w: 0.20, h: 0.18,
      texto: [
        'A forma escura que invade o centro inferior do mural é a cicatriz de uma porta: em 1652, os frades ampliaram a passagem entre o refeitório e a cozinha e cortaram fora os pés de Cristo, que a tradição descrevia cruzados, prenunciando a crucificação.',
        'A obra-prima mais frágil do Renascimento sobreviveu a essa mutilação, ao uso do refeitório como estábulo por tropas napoleônicas e à bomba aliada de 1943. O que se vê hoje é um sobrevivente: vinte por cento de Leonardo, e cem por cento da composição.',
      ],
    },
  ],
}
