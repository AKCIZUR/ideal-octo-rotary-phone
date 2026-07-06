# VCCSD Docs — Astro Starlight GitHub Pages starter

Hotová šablona dokumentačního webu s tmavým vzhledem, Markdown obsahem a automatickým nasazením na GitHub Pages.

## Co je uvnitř

- Astro + Starlight
- český výchozí obsah
- dark theme
- sidebar
- vlastní logo a favicon
- GitHub Pages workflow
- připravená struktura dokumentace

## Rychlé spuštění

```bash
npm install
npm run dev
```

## Nastavení pro GitHub Pages

V souboru `.github/workflows/deploy.yml` uprav:

- `SITE_URL` na `https://USERNAME.github.io`
- `BASE_PATH` na `/<NAZEV_REPOZITARE>`

Pro uživatelské Pages (`USERNAME.github.io`) může být `BASE_PATH` prázdné.

V `astro.config.mjs` jsou použité stejné proměnné prostředí, takže build na GitHub Actions použije správnou URL i base path.

## Obsah

- `src/content/docs/index.mdx` — domovská stránka
- `src/content/docs/getting-started.mdx` — start
- `src/content/docs/configuration.mdx` — konfigurace
- `src/content/docs/deployment.mdx` — nasazení
- `src/content/docs/guides/*` — průvodce
- `src/content/docs/faq.mdx` — FAQ
- `src/content/docs/changelog.mdx` — změny

## Poznámka

Balíček používá `latest` verze Astro a Starlight, aby šel použít jako univerzální základ. Pro dlouhodobě zamrznutý projekt doporučuji po instalaci verze připnout přes lockfile.
