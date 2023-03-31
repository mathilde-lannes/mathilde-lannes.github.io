import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Maty's portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/matys-portfolio",
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "featured",
        "path": "./src/content/featured/"
      },
      __key: "featured"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": "./src/content/posts/"
      },
      __key: "posts"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "jobs",
        "path": `./src/content/jobs/`
      },
      __key: "jobs"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "projects",
        "path": "./src/content/projects/"
      },
      __key: "projects"
    },
  ]
};

export default config;
