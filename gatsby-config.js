module.exports = {
  pathPrefix: "/biochef",
  siteMetadata: {
    title: `biochef`,
    description: `Bioinformatics manipulation tool.`,
    author: `@mattfeng`,
    siteUrl: `https://mattfeng.tech/biochef`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
