import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.SITE_URL;
const base = process.env.BASE_PATH;

export default defineConfig({
  site,
  base,
  integrations: [
    starlight({
      title: 'VCCSD Docs',
      description: 'Tmavá a stabilní dokumentační šablona pro projekty postavené na Astro Starlight.',
      logo: {
        src: './src/assets/logo.svg',
        alt: 'VCCSD Docs',
      },
      favicon: './public/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      editLink: {
        baseUrl: 'https://github.com/USERNAME/REPO/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/USERNAME/REPO',
        },
      ],
      sidebar: [
        { label: 'Domů', link: '/' },
        {
          label: 'Začínáme',
          items: [
            'getting-started',
            'configuration',
            'deployment',
          ],
        },
        {
          label: 'Průvodce',
          items: [
            { autogenerate: { directory: 'guides' } },
          ],
        },
        {
          label: 'Reference',
          items: [
            'faq',
            'changelog',
          ],
        },
      ],
    }),
  ],
});
