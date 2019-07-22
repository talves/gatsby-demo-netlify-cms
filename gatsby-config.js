const config = {
  backend: {
    name: "github",
    repo: "talves/gatsby-theme-demo-netlify-cms",
    branch: "master"
  },
  display_url: "https://gatsby-demo-netlify-cms.netlify.com/"
}

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-demo-netlify-cms",
      options: {
        config,
        debug: true
      }
    }
  ]
}
