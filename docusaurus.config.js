// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
const fs = require('fs');
const path = require('path');

function getLastModifiedDate(dir) {
  const files = fs.readdirSync(dir).map(f => path.join(dir, f));
  const times = files
    .map(f => fs.statSync(f).mtime)
    .filter(Boolean);
  return new Date(Math.max.apply(null, times));
}

const lastModified = getLastModifiedDate('./docs');
const formattedDate = lastModified.toLocaleDateString('pt-BR');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Conteúdo clínico, prático e estruturado para sua rotina profissional',
  tagline: 'Explore guias de uso do sistema, conteúdos de prática clínica e artigos para aprofundar seu raciocínio clínico.',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://documents.econsult.app.br',
  baseUrl: '/',
  organizationName: 'facebook',
  projectName: 'docusaurus',
  onBrokenLinks: 'throw',

  // 🔽 novo bloco substituindo `onBrokenMarkdownLinks`
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          postsPerPage: 8,
          blogSidebarCount: 7,
          archiveBasePath: null,

          feedOptions: {
            type: 'all',
            title: 'Central de Ajuda eConsult',
            description: 'Últimos artigos e novidades sobre o eConsult',
            language: 'pt-BR',
          },
        },

        theme: {
          customCss: './src/css/custom.css',
        },

        sitemap: {
          filename: 'sitemap.xml',
          lastmod: 'date',
          ignorePatterns: [
            '/blog/tags/**',
            '/blog/authors/**',
            '/blog/archive',
            '/blog/page/**',
            '/search',
            '/markdown-page',
          ],

          async createSitemapItems(params) {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);

            return items
              .filter((item) => {
                const url = item.url;

                return (
                  url !== 'https://documents.econsult.app.br/blog' &&
                  (
                    url.includes('/blog/') ||
                    url === 'https://documents.econsult.app.br/' ||
                    url.includes('/docs/marcadores-clinicos') ||
                    url.includes('/docs/modelo-anamnese') ||
                    url.includes('/docs/principais-diferenciais') ||
                    url.includes('/docs/diferenciais/') ||
                    url.includes('/pratica-clinica/') ||
                    url.includes('/gestao-consultorio/')
                  )
                );
              })
              .map((item) => {
                const url = item.url;

                if (
                  url.includes('melhor-sistema-para-psicologos') ||
                  url.includes('/blog/prontuario') ||
                  url.includes('cuidado-longitudinal')
                ) {
                  return { ...item, priority: 0.8 };
                }

                if (url.includes('/blog/')) {
                  return { ...item, priority: 0.7 };
                }

                if (url.includes('/docs/')) {
                  return { ...item, priority: 0.6 };
                }

                if (url.includes('/pratica-clinica/')) {
                  return { ...item, priority: 0.75 };
                }

                return item;
              });
          },
        },

        gtag: {
          trackingID: 'G-ME10V7NCD2',
          anonymizeIP: true,
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pratica-clinica',
        path: 'pratica-clinica',
        routeBasePath: 'pratica-clinica',
        sidebarPath: require.resolve('./sidebarsPraticaClinica.js'),
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'gestao-consultorio',
        path: 'gestao-consultorio',
        routeBasePath: 'gestao-consultorio',
        sidebarPath: require.resolve('./sidebarsGestaoConsultorio.js'),
      },
    ],
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
        src: 'img/LogotipoDOCs.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guia de Uso',
        },
        {
          type: 'docSidebar',
          sidebarId: 'praticaClinicaSidebar',
          docsPluginId: 'pratica-clinica',
          position: 'left',
          label: 'Prática Clínica',
        },
        {
          type: 'docSidebar',
          sidebarId: 'gestaoConsultorioSidebar',
          docsPluginId: 'gestao-consultorio',
          position: 'left',
          label: 'Gestão de Consultório',
        },
        {
          to: '/blog', // ou type: 'blog'
          position: 'left',
          label: 'Blog',
        },
        {
          href: 'https://econsult.app.br/psicologia',
          position: 'left',
          label: 'Criar uma conta',
        },
        {
          href: 'https://econsult.app.br/home',
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
      copyright: `Copyright © ${new Date().getFullYear()} eConsult – Última atualização: ${formattedDate}. Todos os direitos reservados.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  scripts: [
    {
      src: "https://accounts.google.com/gsi/client",
      async: true,
      defer: true,
    },
    {
      src: 'https://embed.tawk.to/68f795af7532b119528011cd/1j83i1dv2',
      async: true,
      charset: 'UTF-8',
      crossorigin: '*',
    },
    {
      src: "/js/tawk-control.js",
      async: true,
    },
  ],

  customFields: {
    GOOGLE_CLIENT_ID: "371082572823-p7f1r97si3o26i5plreplkrice4bbp0n.apps.googleusercontent.com",
  }
};

export default config;