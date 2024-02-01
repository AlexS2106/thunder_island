const path = require("path");

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  ///////Single Recipe Post
  const recipes = await graphql(`
    query {
      allMdx(filter: { frontmatter: { mainCategories: { eq: "recipes" } } }) {
        nodes {
          id
          frontmatter {
            slug
            associated
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);
  // Handle errors
  if (recipes.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query for recipes.`);
    return;
  }

  recipes.data.allMdx.nodes.forEach((node) => {
    const template = path.resolve("./src/templates/recipeTemplate.js");
    createPage({
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      path: `recipes/${node.frontmatter.slug}`,
      context: {
        id: node.id,
        associated: node.frontmatter.associated,
      },
    });
  });

  ///////Single Writing Post
  const writing = await graphql(`
    query {
      allMdx(filter: { frontmatter: { subcategories: { eq: "writing" } } }) {
        nodes {
          id
          frontmatter {
            slug
            associated
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);
  // Handle errors
  if (writing.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query for writing docs.`,
    );
    return;
  }

  writing.data.allMdx.nodes.forEach((node) => {
    const template = path.resolve("./src/templates/articleTemplate.js");
    createPage({
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      path: `portfolio/${node.frontmatter.slug}`,
      context: {
        id: node.id,
        associated: node.frontmatter.associated,
      },
    });
  });
  ///////Front page with multiple posts and pagination
  const postList = await graphql(`
    query {
      allMdx(
        filter: {
          frontmatter: { type: { eq: "post" }, published: { eq: true } }
        }
        sort: { frontmatter: { dates: DESC } }
        limit: 1000
      ) {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);
  // Handle errors
  if (postList.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query for all the posts for the blog component template.`,
    );
    return;
  }

  const posts = postList.data.allMdx.nodes;
  const postsPerPage = 5;
  const postsNumPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: postsNumPages }).forEach((_, index) => {
    createPage({
      component: path.resolve("./src/templates/homeTemplate.js"),
      path: index === 0 ? `/` : `/${index + 1}`,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        postsNumPages,
        currentPage: index + 1,
      },
    });
  });
};
///silence the webpack warning - this might not be the best idea however
module.exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ["node_modules", path.resolve(__dirname, "src")],
      alias: {
        "basic-info": path.resolve(__dirname, "src/app/routes/basic-info"),
        "situation-analysis": path.resolve(
          __dirname,
          "src/app/routes/situation-analysis",
        ),
        "select-drivers": path.resolve(
          __dirname,
          "src/app/routes/select-drivers",
        ),
        "define-vision": path.resolve(
          __dirname,
          "src/app/routes/define-vision",
        ),
        "rate-drivers": path.resolve(__dirname, "src/app/routes/rate-drivers"),
        "affinity-groups": path.resolve(
          __dirname,
          "src/app/routes/affinity-groups",
        ),
        "define-objectives": path.resolve(
          __dirname,
          "src/app/routes/define-objectives",
        ),
        "create-roadmap": path.resolve(
          __dirname,
          "src/app/routes/create-roadmap",
        ),
      },
    },

    devtool: "eval-source-map",
  });

  if (stage === "build-javascript" || stage === "develop") {
    const config = getConfig();

    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === "MiniCssExtractPlugin",
    );

    if (miniCssExtractPlugin) miniCssExtractPlugin.options.ignoreOrder = true;

    actions.replaceWebpackConfig(config);
  }
};
