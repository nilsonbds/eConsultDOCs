// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bem-vindo à Central de Ajuda eConsult',
  tagline: 'Aqui você encontra tutoriais, guias e respostas rápidas para usar o eConsult com facilidade',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://documents.econsult.app.br',
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          path: './blog',
          routeBasePath: '/blog',
          postsPerPage: 5,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      },
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: null,
      logo: {
        alt: 'eConsultDOC',
        src: 'img/LogotipoDOC.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          to: '/blog', // ou type: 'blog'
          position: 'left',
          label: 'Blog',
        },
        {
          href: 'https://econsult.app.br/userregister',
          position: 'left',
          label: 'Criar uma conta',
        },
        {
          href: 'https://econsult.app.br',
          label: 'Ir para o sistema',
          position: 'right',
        },
        {
          href: 'https://econsult.app.br/plans',
          label: 'Planos e preços',
          position: 'right',
        },
        { type: 'search', position: 'right' },
      ],
    },
    stylesheets: [
      {
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
        type: 'text/css',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} eConsult – última atualização: 13/06/2025. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
