const path = require(`path`)
const config = require(`./config`)

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
    twitter: config.twitter,
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: `WPGraphQL`,
        // This is field under which it's accessible
        fieldName: `wpgraphql`,
        // Url to query from
        url: config.wordPressUrl + `/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `urbanfetish.com`,
        short_name: `UrbanFetish`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FAE042`,
        display: `standalone`,
        icon: `src/images/urban-fetish-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.gaTrackingId,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery1`,
        path: `${__dirname}/src/images/gallery1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery2`,
        path: `${__dirname}/src/images/gallery2`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery3`,
        path: `${__dirname}/src/images/gallery3`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
	`gatsby-plugin-dark-mode`,


  ],
}
