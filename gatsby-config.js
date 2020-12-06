const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    authors: [
      { name: 'Tori', slug: 'tori' },
      { name: 'Neko', slug: 'neko' },
      { name: 'Inu', slug: 'inu' }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken,
      },
    },
    {
        resolve: `gatsby-transformer-remark`,
        options: {
          // CommonMark mode (default: true)
          commonmark: true,
          // Footnotes mode (default: true)
          footnotes: true,
          // Pedantic mode (default: true)
          pedantic: true,
          // GitHub Flavored Markdown mode (default: true)
          gfm: true,
          // Plugins configs
          plugins: [],
        },
      },
  ]
}
