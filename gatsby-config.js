module.exports = {
  siteMetadata: {
    title: 'enBonnet',
    name: 'Ender Bonnet',
    bio: 'Programador, pero primero fui hijo de un gastrónomo y una costurera que me enseñaron que nunca hay que darse por vencido ni dejar de aprender, en mis tiempos libres fotógrafo, ciclista, cocinero, pero siempre nerd. ',
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123910567-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
  ],
}