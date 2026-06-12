export default {
  slug: 'tres-de-maio',
  titulo: 'O Três de Maio de 1808',
  artista: 'Francisco de Goya',
  vidaArtista: '1746-1828',
  ano: '1814',
  tecnica: 'Óleo sobre tela',
  dimensoes: '268 × 347 cm',
  museu: 'Museu do Prado, Madri',
  corDominante: '#1c1812',
  sala: 'seculo-xix',
  estilo: 'Romantismo',
  temas: ['guerra', 'execução', 'mártir', 'noite'],
  tilesBase: 'https://movits.github.io/museu-virtual-acervo-1/tiles/',
  descricao: [
    'Na madrugada de 3 de maio de 1808, os pelotões de Napoleão fuzilaram em Madri centenas de espanhóis que haviam se levantado contra a ocupação no dia anterior. Goya pintou a cena seis anos depois, e com ela mudou para sempre a pintura de guerra: pela primeira vez, o quadro não pertence ao general vencedor, mas ao homem anônimo que está prestes a morrer.',
    'O protagonista é um desconhecido de camisa branca e calça amarela, ajoelhado de braços abertos diante dos fuzis. A pose é a de um crucificado, e Goya foi explícito: na palma de sua mão direita vê-se uma marca como um estigma. Ao seu redor, os companheiros morrem de medo cada um à sua maneira: um cobre os olhos, outro reza, outro morde os punhos. No chão, os já executados; à esquerda, a fila dos próximos.',
    'Diante deles, o pelotão: uma máquina de costas, sem um único rosto visível. Os soldados se fundem em uma só massa de mochilas, sabres e pernas afastadas, com os fuzis convergindo em feixe. Entre as vítimas e os algozes, uma lanterna de campanha no chão: a única fonte de luz da cena, transformando a execução em um teatro às avessas, onde a luz não revela heróis, mas escolhe quem morre.',
    'Goya pintou o quadro em 1814, depois da expulsão dos franceses, oferecendo-se à regência espanhola para perpetuar com o pincel, segundo suas palavras, as ações mais notáveis da insurreição contra o tirano da Europa. Mas não há nada de notável no sentido heroico: a Espanha que ele pinta não vence, morre. O par deste quadro, O Dois de Maio, mostra a revolta; este mostra a conta.',
    'A tela ficou décadas em depósito, cedo demais para o gosto oficial. Seu tempo chegou: Manet a estudou para a Execução de Maximiliano (1868-1869), e Picasso a tinha na memória ao pintar Guernica (1937) e o Massacre na Coreia (1951). Toda imagem moderna de fuzilamento descende desta noite: o homem de camisa branca continua de braços abertos, e o pelotão continua sem rosto.',
  ],
  lupas: [
    {
      id: 'homem-de-branco',
      titulo: 'O homem de camisa branca',
      x: 0.28, y: 0.28, w: 0.24, h: 0.36,
      texto: [
        'Ajoelhado, iluminado em cheio pela lanterna, o homem abre os braços diante dos fuzis. A camisa branca e a calça amarela fazem dele a única mancha clara entre os condenados: a luz o escolheu, e os fuzis também.',
        'A pose é deliberadamente a de uma crucifixão, e na palma da mão direita Goya pintou uma marca escura, como um estigma. O mártir anônimo da guerra moderna recebe os sinais de Cristo: sem nome, sem espada, sem culpa individual, apenas a morte por estar ali.',
      ],
    },
    {
      id: 'pelotao-sem-rosto',
      titulo: 'O pelotão sem rosto',
      x: 0.55, y: 0.38, w: 0.40, h: 0.42,
      texto: [
        'Os soldados são vistos de costas, em fila cerrada, com as pernas afastadas no mesmo ângulo e os fuzis convergindo. Nenhum rosto, nenhuma hesitação, nenhum indivíduo: a execução é executada por uma máquina.',
        'O achado mudou a iconografia da guerra: o mal sem rosto é mais aterrador que qualquer vilão. Quando Picasso pintou o Massacre na Coreia (1951), os fuzis viraram robôs: ele apenas levou a despersonalização de Goya à conclusão.',
      ],
    },
    {
      id: 'lanterna',
      titulo: 'A lanterna no chão',
      x: 0.50, y: 0.62, w: 0.14, h: 0.18,
      texto: [
        'Entre as vítimas e o pelotão, um lampião cúbico de campanha ilumina a cena inteira. É a única fonte de luz do quadro: a noite ao redor é total, e a cidade ao fundo é silhueta morta.',
        'Na pintura barroca, a luz vinha do céu e significava a graça. Goya a coloca no chão, a serviço dos fuzis: a luz que permite matar com pontaria. Poucas inversões simbólicas da história da arte são tão brutais.',
      ],
    },
    {
      id: 'mortos-no-chao',
      titulo: 'Os que já caíram',
      x: 0.02, y: 0.62, w: 0.30, h: 0.34,
      texto: [
        'Em primeiro plano, os fuzilados do turno anterior: um homem de bruços sobre o próprio sangue, os braços ainda estendidos como os do companheiro de camisa branca, o rosto deformado contra a terra.',
        'Goya não embeleza nem um centímetro: o sangue é marrom, abundante, e o corpo tem o peso desajeitado da morte real. A fila à esquerda mostra os próximos, que cobrem os olhos. Passado, presente e futuro do massacre cabem na mesma tela.',
      ],
    },
    {
      id: 'cidade-escura',
      titulo: 'Madri apagada',
      x: 0.30, y: 0.04, w: 0.46, h: 0.26,
      texto: [
        'Ao fundo, contra o céu de breu, a silhueta de Madri: um campanário, telhados, uma massa de arquitetura sem uma única janela acesa. A cidade dorme ou finge dormir enquanto os seus morrem no morro do Príncipe Pío.',
        'O céu noturno ocupa um terço da tela e não tem estrelas. Na pintura religiosa, o alto era a esperança; aqui é só escuridão. Se há redenção neste quadro, ela não desce do céu: está na camisa branca de um homem que não se ajoelha por dentro.',
      ],
    },
  ],
}
