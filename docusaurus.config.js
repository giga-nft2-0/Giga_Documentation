// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const ArchivedVersions = require("./archivedVersions.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  title: "Giga NFT-2.0",
  tagline: " Decentralized School Database",
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid', 'docusaurus-theme-openapi-docs'],
  url: "https://docs.giga.rumsan.net",
  baseUrl: "/",
  projectName: "giga-documentation", // Usually your repo name.
  organizationName: "Giga", // Usually your GitHub org/user name.
  onBrokenLinks: "warn", // Changed from "throw" to "warn" to help during development
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  plugins: [
      [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "default",
        config: {
          giga: {
            specPath: "openapi/giga-api.yaml",
            outputDir: "docs/giga-api",
            downloadUrl:
              "https://raw.githubusercontent.com/giga-nft2-0/Giga_Documentation/main/openapi/giga-api.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          }
        }
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve("./sidebars.js"),
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          showLastUpdateTime: true,
          lastVersion: '2.0',
          versions: {
            current: {
              label: '2.1 (Next)',
              path: 'next',
            },
            '2.0': {
              label: '2.0',
            },
          },
          editUrl: "https://github.com/giga-nft2-0/Giga_Documentation/edit/main/",
        },
        blog: {
          path: "blog",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Giga Logo",
          src: "img/giga-blocks.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
            {
            label: "API",
            position: "right",
            to: "/docs/category/giga",
          },
          { to: "blog", label: "Releases", position: "right" },
          {
            to: "/help",
            position: "right",
            label: "Help",
          },

          {
            type: "docsVersionDropdown",
            position: "left",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              ...Object.entries(ArchivedVersions).map(
                ([versionName, versionUrl]) => ({
                  to: versionUrl,
                  label: versionName,
                })
              ),
              {
                to: "/versions",
                label: "All versions",
              },
            ],
          },
          { type: "localeDropdown", position: "right" },
          {
            href: "https://github.com/giga-nft2-0",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/Gigaglobal",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/giga-nft2-0",
              },
              {
                label: "Website",
                href: "https://giga.global/",
              },
            ],
          },
        ],
        copyright: `| <a href="/privacy-policy">Privacy Policy</a> | <br/> © ${new Date().getFullYear()} Giga. All rights reserved. Developed by Rumsan.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
      // algolia: {
      //   indexName: "jest-v2",
      //   apiKey: "833906d7486e4059359fa58823c4ef56",
      //   contextualSearch: true,
      // },
    }),
};

module.exports = config;
