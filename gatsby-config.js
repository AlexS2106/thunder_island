module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    siteUrl: "http://localhost:8000",
    title: "Thunder Island",
    image: "./src/images/logo-favicon.png",
    description:
      "A personal coding and design project containing recipes, things to learn, writing examples and photographs.",
    author: "Alex",
    stack: "JAMstack",
    techs: ["MDX", "React", "Gatsby", "Netlify"],
  },
  plugins: [
    {
      resolve: "gatsby-plugin-breadcrumb",
      options: {
        useAutoGen: true,
      },
    },
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "recipes",
        path: `${__dirname}/content/recipes/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolio",
        path: `${__dirname}/content/portfolio/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "learning",
        path: `${__dirname}/content/learning/`,
      },
    },
  ],
};
