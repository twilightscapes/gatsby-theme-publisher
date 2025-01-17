/**
 * Add your site configuration details
 * wordPressUrl is the WP site where you want to fetch data from
 * siteUrl is the live site where people visit your front end
 * mailChimpEndpoint see https://github.com/benjaminhoffman/gatsby-plugin-mailchimp#mailchimp-endpoint
 */
const config = {
  title: `Urban Fetish - Abandoned Urbex Urban Exploration Photos and Locations`,
  description: `Urban Fetish`,
  author: `Urban Fetish`,
  twitter: `toddlambert`,
  wordPressUrl: `https://launchlamp.com/urbanfetish`,
  siteUrl: `https://urbanfetish.com`,
  dynamicComments: true,
  gaTrackingId: 'UA-140479230-1',
  mailChimpEndpoint: '',
  image: `src/images/urban-fetish-button.jpg`,
}

module.exports = config
