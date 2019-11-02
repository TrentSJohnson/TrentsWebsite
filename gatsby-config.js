module.exports = {
  siteMetadata: {
    title: `Trent Johnson`,
  },
  plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/src/pages`,
          name: "pages",
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-emotion`,
      `gatsby-plugin-react-helmet`,
      `react-reveal`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 590,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 0rem`,
              },
            },
            "gatsby-remark-prismjs",
            "gatsby-remark-copy-linked-files",
            "gatsby-remark-smartypants",
          ],
        },
      },
      `gatsby-plugin-sharp`,
  ],
}