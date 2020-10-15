module.exports = {
  siteMetadata: {
    title: 'Mini 990 CHORUS Valentin Foucher',
    author: 'Valentin Foucher',
    description:
      'Voici le site de mon projet mini 6.50, en vue la la mini transat 2021',
    titleTemplate: 'Mini 990 CHORUS Valentin Foucher',
    siteUrl: 'https://www.mini990valentinfoucher.netlify.com',
    url: 'https://www.mini990valentinfoucher.netlify.com',
    image: 'src/images/logo.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mini990chorus.netlify.app/',
        sitemap: 'https://mini990chorus.netlify.app/sitemap.xml',
        env: {
          development: {
            policy: [
              {
                userAgent: '*',
                disallow: ['/'],
              },
            ],
          },
          production: {
            policy: [
              {
                userAgent: '*',
                allow: '/',
              },
            ],
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-159035307-3',
        head: true,
      },
    },
  ],
}
