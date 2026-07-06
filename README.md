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

Workflow už dopočítá URL a base path automaticky podle repozitáře na GitHubu.

Pro uživatelské Pages (`USERNAME.github.io`) zůstane `BASE_PATH` prázdné.

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

Balíček používá `latest` verze Astro a Starlight, aby šel použít jako univerzální základ. Pro dlouhodobě stabilní projekt doporučuji po instalaci připnout konkrétní verze přes lockfile.
