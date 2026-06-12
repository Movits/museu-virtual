# Museu Virtual

Uma galeria para ver de perto. Dez obras-primas em domínio público, em altíssima resolução, com lupas que mergulham nos detalhes e contam a história, os símbolos e a técnica de cada pintura.

**No ar em: https://movits.github.io/museu-virtual/**

## Como funciona

- As imagens vêm dos melhores scans em domínio público do Wikimedia Commons (Google Art Project e digitalizações oficiais dos museus).
- Cada obra é servida como uma pirâmide Deep Zoom (DZI) e exibida com [OpenSeadragon](https://openseadragon.github.io/), o mesmo tipo de visualizador usado por museus reais.
- As lupas são regiões anotadas da imagem: ao clicar, o viewport anima até o detalhe e um painel apresenta a análise.

## A coleção

| Obra | Artista | Ano |
|------|---------|-----|
| O Casal Arnolfini | Jan van Eyck | 1434 |
| O Jardim das Delícias Terrenas | Hieronymus Bosch | c. 1490-1510 |
| Os Embaixadores | Hans Holbein, o Jovem | 1533 |
| A Vocação de São Mateus | Caravaggio | 1599-1600 |
| A Ronda Noturna | Rembrandt van Rijn | 1642 |
| Las Meninas | Diego Velázquez | 1656 |
| Moça com o Brinco de Pérola | Johannes Vermeer | c. 1665 |
| O Andarilho sobre o Mar de Névoa | Caspar David Friedrich | c. 1818 |
| Impressão, Nascer do Sol | Claude Monet | 1872 |
| A Noite Estrelada | Vincent van Gogh | 1889 |

## Desenvolvimento

```bash
npm install
npm run dev        # servidor local
npm run build      # build de produção
```

### Adicionar uma obra nova

1. Baixe o scan em alta resolução para `sources/<slug>.jpg` (o script `scripts/download.ps1` mostra como buscar pelo Wikimedia Commons).
2. Gere os tiles e a thumbnail: `npm run tiles <slug>`.
3. Crie `src/data/obras/<slug>.js` com os metadados, a descrição e as lupas (coordenadas normalizadas de 0 a 1 sobre a imagem).
4. Valide o enquadramento das lupas: `npm run crop <slug>` gera uma prancha em `check/<slug>.jpg` com o recorte de cada lupa.
5. Registre a obra em `src/data/obras/index.js`.

## Stack

React 18 + Vite, OpenSeadragon, sharp (geração de tiles), GitHub Pages (deploy via GitHub Actions).

## Licença das imagens

Todas as pinturas estão em domínio público. As reproduções fotográficas fiéis de obras bidimensionais em domínio público também estão em domínio público. Fontes individuais no Wikimedia Commons.
