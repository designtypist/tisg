module.exports = {
  siteMetadata: {
    title: `Gatsby Boilerplate`,
    author: `@designtypist`,
    siteUrl: `https://github.com/designtypist/gatsby-boilerplate`,
    description: `A Gatsby boilerplate to develop static sites quickly.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Toronto Ice Skate Group`,
        short_name: `TISG`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        icon: `src/images/icons/tisg-logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-lodash`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false
        }
      }
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwindcss-config.js"), // Optional: Load custom Tailwind CSS configuration
          require("autoprefixer")
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-modal-routing`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
      },
    },
  ],
};
