// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';
import math from 'remark-math';
import katex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '尘世微光',
  tagline: '上世纪草根百姓自传辑录',
  url: 'https://glimmer.qizhen.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ruanqizhen',
  projectName: 'glimmer',
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/ruanqizhen/glimmer/edit/main/',
          routeBasePath: '/',
          path: './docs',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-9EFRGQK2N0',
        },
      }),
    ],
  ],

  themeConfig: (
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        title: '尘世微光',
        logo: {
          alt: '尘世微光',
          src: 'img/logo.png',
          href: '/'
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoomSelector: '.markdown img',
      metadata: [
        { name: 'keywords', content: '尘世微光, 民间历史, 草根自传, 互联网记忆, 论坛时代, 家长里短, 纪实文学' },
        { name: 'description', content: '收录了早年偶然保存的一些网友自传文章。这些文字真实记录了上个世纪中国普通百姓的家长里短与生活轨迹。' },
        { name: 'author', content: 'Qizhen Ruan 阮奇桢' },
      ],
    }
  ),
  plugins: [
    './src/plugin/plugin-analytics',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
      },
    ],
    "./src/plugin/plugin-image-zoom",
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.33/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-fgYS3VC1089n2J3rVcEbXDHlnDLQ9B2Y1hvpQ720q1NvxCduQqT4JoGc4u2QCnzE',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
