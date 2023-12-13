/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteTitle: "La Croix Gratiot",
    // siteUrl: "https://www.croix-gratiot.com",
    siteUrl: "https://croix-gratiot-staging.netlify.app",
    siteDescription:
      "Entre bassin de Thau et collines de pins découvrez des vins bio issu d’un travail en famille, de père en fille, dans le respect de la nature.",
    author: "Adrien and Clément Lapasset",
    lang: "fr",
    siteImage: "/siteImage.jpg",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "tzu0yb4o",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`fr`, `en`],
        defaultLanguage: `fr`,
        siteUrl: `https://croix-gratiot.com`,
        trailingSlash: "always",
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/icons/favicon.svg`,
      },
    },
  ],
};
