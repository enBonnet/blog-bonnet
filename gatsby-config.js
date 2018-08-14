module.exports = {
  siteMetadata: {
    title: 'enBonnet',
    name: 'Ender Bonnet',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.',
    rrss: {
      twitter: 'https://twitter.com/enBonnet',
      linkedin: 'https://www.linkedin.com/in/ender-bonnet-b47b25144/',
      instagram: 'https://www.instagram.com/enbonnet/'
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'pages',      }
    },
    'gatsby-transformer-remark',
  ],
}
