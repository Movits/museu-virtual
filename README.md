# Museu Virtual

Uma galeria para ver de perto. Quarenta obras-primas em domínio público (rumo a cem), em altíssima resolução, com lupas que mergulham nos detalhes e contam a história, os símbolos e a técnica de cada pintura. Inclui busca por tema/artista/estilo, salas por período, e a Academia, com a primeira lição gratuita de leitura de quadros.

**No ar em: https://movits.github.io/museu-virtual/**

## Como funciona

- As imagens vêm dos melhores scans em domínio público do Wikimedia Commons (Google Art Project e digitalizações oficiais dos museus).
- Cada obra é servida como uma pirâmide Deep Zoom (DZI) e exibida com [OpenSeadragon](https://openseadragon.github.io/), o mesmo tipo de visualizador usado por museus reais.
- As lupas são regiões anotadas da imagem: ao clicar, o viewport anima até o detalhe e um painel apresenta a análise. Deep-link: `#/obra/<slug>?lupa=<id>`.
- Os tiles das 10 obras originais vivem neste repo (`public/tiles/`); as demais são servidas por repositórios de acervo satélites ([museu-virtual-acervo-1](https://github.com/Movits/museu-virtual-acervo-1)), cada um abaixo do limite de 1 GB do GitHub Pages, referenciados pelo campo `tilesBase` da obra.

## A coleção

Quarenta obras de Giotto (c. 1305) a Almeida Júnior (1893), organizadas em cinco salas: Primitivos e Primeiro Renascimento, Renascimento, Barroco e o Século de Ouro, Do Romantismo ao Impressionismo, e Brasil. A lista completa está em `src/data/obras/index.js`.

## Desenvolvimento

```bash
npm install
npm run dev        # servidor local
npm run build      # build de produção
```

### Adicionar uma obra nova

1. Localize o melhor scan no Wikimedia Commons (`scripts/busca-commons.ps1 "consulta"`) e registre em `scripts/obras-fontes.json`.
2. Baixe o original: `scripts/download.ps1 <slug>`.
3. Gere tiles e thumbnail: `npm run tiles <slug> -- --dest <pasta-do-acervo>/tiles --max 12000` (sem `--dest`, vão para `public/tiles` deste repo).
4. Crie `src/data/obras/<slug>.js` com metadados, `sala`, `estilo`, `temas`, `tilesBase` (URL do acervo), descrição e lupas (coordenadas normalizadas de 0 a 1).
5. Valide o enquadramento das lupas: `npm run crop <slug>` gera uma prancha em `check/<slug>.jpg`; ajuste as coordenadas e repita.
6. Registre a obra em `src/data/obras/index.js` (ordem cronológica) e faça push do repo de acervo e deste.

## Stack

React 18 + Vite, OpenSeadragon, sharp (geração de tiles), GitHub Pages (deploy via GitHub Actions).

## Licença das imagens

Todas as pinturas estão em domínio público. As reproduções fotográficas fiéis de obras bidimensionais em domínio público também estão em domínio público. Fontes individuais no Wikimedia Commons.
