const config = {
  backend: {
    name: "github",
    repo: "talves/gatsby-theme-demo",
    branch: "master"
  }
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
