# Portfolio

A dark, terminal-flavoured developer portfolio built with **Next.js (App Router)**, **React** and **TypeScript**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Making it yours

Everything you need to edit is in **`src/data/site.ts`**:

- `site` — your name, role, intro, availability, email, social links, tech stack, about text and work history.
- `projects` — each project's card and its case-study page (`/projects/<slug>`). Set `featured: true` on the one you want highlighted at the top.

Replace every `[bracketed]` placeholder. Then:

- **Screenshots:** put images in `public/projects/` and set `image: "/projects/your-image.png"` on a project.
- **Résumé:** drop your PDF at `public/resume.pdf`.
- **Accent colour:** change `--accent` in `src/app/globals.css` (e.g. `#7cc4ff` blue, `#ffb86b` orange, `#c7a6ff` purple).

## Project structure

```
src/
  app/
    layout.tsx               fonts (Geist + Geist Mono) and metadata
    page.tsx                 home page
    globals.css              colour tokens and shared styles
    projects/[slug]/         case-study page, statically generated per project
  components/                Nav, Hero (terminal card), About, Projects (filterable),
                             Experience, Contact, Footer
  data/site.ts               all content
```

## Scripts

| Command             | What it does                     |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the dev server             |
| `npm run build`     | Production build                 |
| `npm start`         | Serve the production build       |
| `npm run typecheck` | Type-check with TypeScript       |

## Deploying

The site is built as a fully static site (`output: "export"` in `next.config.ts`): `npm run build` writes plain HTML, CSS and JS to `out/`. It can be hosted anywhere that serves static files.

### Render (set up in `render.yaml`)

1. Push this repo to GitHub.
2. In Render, choose **New → Blueprint** and pick the repo. Render reads `render.yaml` and creates a free **Static Site** — no server, so no cold starts.
3. Every push to `main` rebuilds and redeploys automatically.

### Custom domain

1. Buy a domain from any registrar (Cloudflare, Namecheap, Porkbun…).
2. In Render: your site → **Settings → Custom Domains → Add Custom Domain**. Adding `example.com` also adds `www.example.com` and redirects it.
3. At your registrar, add the DNS records Render shows you, and remove any `AAAA` records.
4. Back in Render, click **Verify**. HTTPS certificates are issued and renewed automatically.

To preview the static build locally: `npm run build && npx serve out`.
