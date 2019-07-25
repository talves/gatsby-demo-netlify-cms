## gatsby-demo-netlify-cms

[![Netlify Status](https://api.netlify.com/api/v1/badges/8ac46750-9841-4633-98d1-95d342e76820/deploy-status)](https://app.netlify.com/sites/gatsby-demo-netlify-cms/deploys)

This project is a Gatsby site using a theme ([`gatsby-theme-demo-netlify-cms`][theme]) that uses the source plugin [`gatsby-source-netlify-cms`][source-plugin]

### [Demo][demo]

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
[source-plugin]: https://github.com/talves/gatsby-source-netlify-cms
[deploy-demo]: https://app.netlify.com/start/deploy?repository=https://github.com/talves/gatsby-demo-netlify-cms&amp;stack=cms
[demo]: https://gatsby-demo-netlify-cms.netlify.com/
