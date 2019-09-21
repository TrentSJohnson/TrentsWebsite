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
<<<<<<< HEAD
=======
    
>>>>>>> be9fc3f85c1ba1b44d9d2188d44d6b7e2121b95a
  ],
}