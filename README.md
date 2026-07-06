# Docus Pages Starter

Připravený dokumentační web pro GitHub Pages s automatickým nasazením po každé změně v `main`.

## Co je uvnitř

- Nuxt 3 + Docus
- statický build pro GitHub Pages
- automatický deploy přes GitHub Actions
- správné nastavení `baseURL` pro projektové GitHub Pages i uživatelské stránky
- `.nojekyll`, aby GitHub Pages nerozbil Nuxt assety

## Spuštění lokálně

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm generate
```

Výstup je ve složce `.output/public`.

## GitHub Pages

Workflow je připravený pro automatické nasazení po pushi do větve `main`.

Pro správné fungování:

1. V repozitáři zapni GitHub Pages.
2. Jako zdroj vyber `Deploy from a branch` a větve `gh-pages`, nebo ponech Pages podle svého nastavení.
3. Po každé změně v `main` se web znovu vygeneruje a publikuje.

## Úprava obsahu

- domovská stránka: `content/0.index.md`
- sekce Guide: `content/1.guide/0.index.md`
- nastavení webu: `app.config.ts`
- base path a build: `nuxt.config.ts`

## Deploy workflow

Workflow najdeš v:

`.github/workflows/deploy.yml`
