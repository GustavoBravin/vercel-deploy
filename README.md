# vercel-deploy — Relógio do Semestre

Relógio digital em **Next.js** com contagem regressiva (dias, horas, minutos e segundos) para o fim do semestre, mais uma **timeline** com os trabalhos desenvolvidos em cada semestre do curso de TADS.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Personalizando

- **Data de fim do semestre:** `FIM_DO_SEMESTRE` em `app/data.ts`.
- **Trabalhos da timeline:** lista `SEMESTRES` em `app/data.ts`.
- **Fotos:** substitua as imagens em `public/timeline/` (ou aponte `foto` para um novo arquivo).

## Deploy

Publicado na [Vercel](https://vercel.com) — cada `git push` na branch `main` gera um novo deploy.
