# Convite da Manoella — 7 anos

Site-convite estático, responsivo e acessível para o aniversário de 7 anos da Manoella, com tema inspirado em Bluey e Bingo. O projeto usa Astro, TypeScript, HTML semântico e CSS nativo, sem banco de dados, rastreamento ou armazenamento de informações dos convidados.

## Instalação e uso local

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Onde editar

Todo o conteúdo editável — nome, idade, data, textos, link de confirmação e link de localização — está em `src/data/invitation.ts`.

As imagens usadas no hero e no modal ficam em `src/assets/images/`. Para substituí-las, mantenha os nomes:

- `bluey-bingo-festa.jpeg`
- `bluey-bingo-piscina.jpeg`

O cartão mostrado no compartilhamento por WhatsApp fica em `public/og-convite-manoella.jpg` e deve permanecer no formato 1200 × 630 px.

## Validação

Execute `npm run check` para conferir o código e `npm run build` para gerar a versão final em `dist`. Use `npm run preview` para revisar localmente a mesma versão que será publicada.

## Publicação

Crie um repositório no GitHub, envie a branch `main` e importe o projeto na Vercel. Selecione Astro, use `npm run build` como comando de build, `dist` como diretório de saída e Node.js 22.x. Não é necessário instalar adaptador da Vercel.

Antes da publicação, confirme se a festa será mesmo em 4 de outubro de 2026, às 12h, e revise os áudios enviados.
