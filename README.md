# VCCSD Docs Template

Produkční dokumentační šablona pro Astro + Starlight s automatickým nasazením na GitHub Pages.

## Co je uvnitř

- Astro 7
- Starlight 0.41
- Node.js 22.12+ a 24
- pnpm-ready setup
- GitHub Pages workflow
- automatická detekce `site` a `base` podle GitHub Actions prostředí
- vlastní dark theme
- Lucide ikony
- MDX podporu
- sitemap integraci

## Spuštění

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## GitHub Pages

Workflow v `.github/workflows/deploy.yml` používá oficiální Astro action pro build a upload a pak deploy přes GitHub Pages.

Repo URL a base path se počítají automaticky z:

- `GITHUB_REPOSITORY`
- `GITHUB_SERVER_URL`
- `GITHUB_REF_NAME`
- volitelně `SITE_URL`
- volitelně `ASTRO_BASE`

Tím je šablona připravená pro projektové stránky i user pages bez ručních placeholderů.

## Struktura

- `src/content/docs/index.mdx` - landing page
- `src/content/docs/guides/*` - návody
- `src/content/docs/reference/*` - reference sekce
- `src/components/*` - vlastní UI komponenty
- `src/styles/custom.css` - dark theme a přepis stylů

## Poznámka k lockfile

`pnpm-lock.yaml` je přiložen jako bootstrap scaffold. Po prvním online instalování závislostí ho pnpm doplní do plné podoby.
