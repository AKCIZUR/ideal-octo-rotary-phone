# Docus Ready for GitHub Pages

Statická verze dokumentačního webu připravená pro automatický deploy na GitHub Pages.

## Co to dělá

- stránka běží bez Nuxt buildu a bez křehkých runtime závislostí
- po pushi do větve `main` se obsah z `site/` publikuje na `gh-pages`
- součástí je dark mode, responzivní menu a čistý dokumentační layout

## Struktura

- `site/index.html` — domovská stránka
- `site/guide/index.html` — průvodce
- `site/assets/style.css` — styly
- `site/assets/app.js` — theme switch a mobilní menu
- `.github/workflows/deploy.yml` — automatický deploy

## Nasazení

1. Nahraj repozitář na GitHub.
2. V nastavení repozitáře zapni GitHub Pages z větve `gh-pages`.
3. Pushni změny do `main`.

Workflow publikuje obsah automaticky po každé změně.
