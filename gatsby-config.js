module.exports = {
  siteMetadata: {
    title: `austin blade`,
    description: `software and design blog by Austin Blade`,
    keywords: [`austin`, `blade`, `software`, `developer`, `design`],
    author: `Austin Blade`,
    siteUrl: `https://austinblade.com`,
    menuLinks: [
      {
        name: `blog`,
        link: `/blog`,
        type: `internal`, //internal or anchor
      },
      {
        name: `about`,
        link: `/about`,
        type: `internal`, //internal or anchor
      },
    ],
    socialLinks: [
      {
        name: `Email`,
        link: `hello@austinblade.com`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Twitter`,
        link: `https://twitter.com/_austinblade`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Instagram`,
        link: `https://instagram.com/austinblade_`,
        location: `header`, //Options are "all", "header", "footer"
      },
      {
        name: `Github`,
        link: `https://www.github.com/THATBLADEBOY`,
        location: `header`, //Options are "all", "header", "footer"
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-catalyst-core`,
      options: {
        //Default options are:
        // contentPath: `content/pages`,
        // assetPath: `content/assets`,
        displaySiteLogo: true,
        // displaySiteTitle: true,
        displaySiteLogoMobile: true,
        // displaySiteTitleMobile: true,
        // invertLogo: false,
        useStickyHeader: true,
        // useSocialLinks: true,
        // useColorMode: true,
        // useKatex: false,
        // footerContentLocation: "left", // "left", "right", "center"
        // remarkImagesWidth: 1440,
      },
    },
    `gatsby-theme-catalyst-header-top`,
    `gatsby-theme-catalyst-footer`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-catalyst`,
        short_name: `catalyst`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#cccccc`,
        display: `minimal-ui`,
        icon: `content/assets/catalyst-site-logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
