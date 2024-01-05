module.exports = {
   flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    siteUrl: "http://localhost:8000",
    title: "Thunder Island",
    image: "./src/images/logo-favicon.png",
    description: "A personal coding and design project containing recipes, english points of grammar, writing examples and photographs.",
    author: "Alex",
    stack: "JAMstack",
    techs: [ "MDX", "React", "Gatsby" ]
  },
  plugins: [
    {
      resolve: "gatsby-plugin-breadcrumb",
      options: {
        useAutoGen: true
      },
    },
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [ `.md`, `.mdx` ],
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
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
        name: "about",
        path: `${__dirname}/content/about/`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "recipes",
        path: `${__dirname}/content/recipes/`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolio",
        path: `${__dirname}/content/portfolio/`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "english",
        path: `${__dirname}/content/english/`,
      }
    },
  ],
};

