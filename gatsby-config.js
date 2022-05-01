module.exports = {
  siteMetadata: {
    description: "Personal Site for William Lin",
    locale: "en",
    title: "William Lin",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "dark-green",
        contentPath: "content/",
        showThemeLogo: true,
      },
    },
  ],
}