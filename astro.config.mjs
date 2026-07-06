import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

function getRepoInfo() {
  const raw = process.env.GITHUB_REPOSITORY?.trim();
  if (!raw) return null;

  const [owner, repo] = raw.split('/');
  if (!owner || !repo) return null;

  return { owner, repo };
}

function getSiteUrl() {
  const customSite = process.env.SITE_URL?.trim();
  if (customSite) return customSite;

  const repoInfo = getRepoInfo();
  if (!repoInfo) return 'http://localhost:4321';

  const { owner, repo } = repoInfo;
  const isUserPages = repo.endsWith('.github.io');

  return isUserPages ? `https://${owner}.github.io` : `https://${owner}.github.io/${repo}`;
}

function getBasePath() {
  const customBase = process.env.ASTRO_BASE?.trim();
  if (customBase) return customBase.startsWith('/') ? customBase : `/${customBase}`;

  const repoInfo = getRepoInfo();
  if (!repoInfo) return '/';

  const { repo } = repoInfo;
  return repo.endsWith('.github.io') ? '/' : `/${repo}`;
}

function getEditBaseUrl() {
  const repoInfo = getRepoInfo();
  if (!repoInfo) return null;

  const serverUrl = process.env.GITHUB_SERVER_URL?.trim() || 'https://github.com';
  const branch = process.env.GITHUB_REF_NAME?.trim() || 'main';

  return `${serverUrl}/${repoInfo.owner}/${repoInfo.repo}/edit/${branch}/src/content/docs/`;
}

function getRepoUrl() {
  const repoInfo = getRepoInfo();
  if (!repoInfo) return null;

  const serverUrl = process.env.GITHUB_SERVER_URL?.trim() || 'https://github.com';
  return `${serverUrl}/${repoInfo.owner}/${repoInfo.repo}`;
}

const site = getSiteUrl();
const base = getBasePath();
const repoUrl = getRepoUrl();
const editBaseUrl = getEditBaseUrl();

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap(),
    starlight({
      title: 'VCCSD Docs',
      description: 'Produkční dokumentace postavená na Astro + Starlight s automatickým deployem na GitHub Pages.',
      logo: {
        src: './src/assets/vccsd-mark.svg',
      },
      social: repoUrl
        ? [
            {
              icon: 'github',
              label: 'GitHub',
              href: repoUrl,
            },
          ]
        : [],
      editLink: editBaseUrl ? { baseUrl: editBaseUrl } : undefined,
      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'en',
      titleDelimiter: '·',
      lastUpdated: true,
      sidebar: [
        { label: 'Start here', link: '/' },
        {
          label: 'Guides',
          items: [
            'guides/getting-started',
            'guides/deploy',
            'guides/custom-theme',
            'guides/components',
          ],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
      ],
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#0b1020' } },
        { tag: 'link', attrs: { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' } },
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'dark' } },
      ],
      expressiveCode: {
        styleOverrides: {
          frames: 'window',
        },
      },
    }),
  ],
});
