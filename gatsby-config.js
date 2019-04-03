module.exports = {
  siteMetadata: {
    title: `Gatsby Test Website`,
    description: `Simple page to test gatsby.`,
   menuLinks: [
     {
       name: 'Home',
       link: '/'
      },
     {
       name: 'Comment',
       link: '/comment'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    }
  ],
}
