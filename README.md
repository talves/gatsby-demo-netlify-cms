## gatsby-demo-netlify-cms

This project is a Gatsby site using a theme ([`gatsby-theme-demo-netlify-cms`][theme]) that uses the source plugin [`gatsby-source-netlify-cms`][source-plugin]

[![](https://www.netlify.com/img/deploy/button.svg)][deploy-demo]

#### To install with gatsby-cli

```
gatsby new gatsby-demo-netlify-cms https://github.com/talves/gatsby-demo-netlify-cms
```

#### If you don't have the gatsby-cli installed globally

```
npx gatsby new gatsby-demo-netlify-cms https://github.com/talves/gatsby-demo-netlify-cms
```

### Ready to run locally

```
cd gatsby-demo-netlify-cms
yarn start
```

The source plugin checks for valid content directories, if they don't exist, which they do not, they are created and if the theme has demo data, that data is copied as the default content.

[theme]: https://github.com/talves/gatsby-theme-demo-netlify-cms
[source-plugin]: https://github.com/talves/gatsby-theme-netlify-cms
[deploy-demo]: https://app.netlify.com/start/deploy?repository=https://github.com/talves/gatsby-demo-netlify-cms&amp;stack=cms