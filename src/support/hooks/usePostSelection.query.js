import { graphql, useStaticQuery } from "gatsby";

const usePostSelection = () => {
  const {
    recipePost,
    writingPost,
    expatPost,
    learningPost,
    healthPost,
    reviewPost,
  } = useStaticQuery(graphql`
    {
      recipePost: mdx(frontmatter: { slug: { eq: "peach-meringue-roulade" } }) {
        frontmatter {
          title
          type
          slug
          mainCategories
          by_course
          by_diet
          by_ingredient
          by_option
          tags
          dates
          author
          portraitImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
          photographer
          comments
          associated
          description
        }
      }
      writingPost: mdx(frontmatter: { slug: { eq: "my-pregnancy-story" } }) {
        frontmatter {
          title
          type
          slug
          mainCategories
          subcategories
          tags
          dates
          author
          portraitImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
          photographer
          associated
          description
        }
      }
      expatPost: mdx(
        frontmatter: { slug: { eq: "discovering-the-top-of-the-world" } }
      ) {
        frontmatter {
          title
          type
          slug
          mainCategories
          subcategories
          tags
          dates
          author
          portraitImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
          photographer
          associated
          description
        }
      }
      learningPost: mdx(
        frontmatter: { slug: { eq: "using-get/complete-lesson" } }
      ) {
        frontmatter {
          title
          type
          slug
          mainCategories
          subcategories
          tags
          dates
          author
          portraitImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
          photographer
          associated
          description
        }
      }
      healthPost: mdx(
        frontmatter: { slug: { eq: "what-is-the-keto-diet-anyway" } }
      ) {
        frontmatter {
          title
          type
          slug
          mainCategories
          subcategories
          tags
          dates
          author
          portraitImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
          photographer
          associated
          description
        }
      }
      reviewPost: mdx(
        frontmatter: { slug: { eq: "the-characters-of-david-gemmell" } }
      ) {
        frontmatter {
          title
          type
          slug
          mainCategories
          subcategories
          tags
          dates
          author
          portraitImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          alt
          photographer
          associated
          description
        }
      }
    }
  `);
  return {
    recipePost,
    writingPost,
    expatPost,
    learningPost,
    healthPost,
    reviewPost,
  };
};

export default usePostSelection;
