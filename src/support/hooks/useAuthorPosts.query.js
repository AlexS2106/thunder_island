import { graphql, useStaticQuery } from "gatsby";

  
const useAuthorPosts= () => {
  const { post1, post2, post3, post4, post5 } = useStaticQuery( graphql`
  {
    post1: mdx(
      frontmatter: {slug: {eq: "my-pregnancy-story"}}
          ) {
      frontmatter {
        title
        slug
        mainCategories
        landscapeImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
        photographer
      }
    }
    post2: mdx(
      frontmatter: {slug: {eq: "margherita-pizza"}}
      ) {
      frontmatter {
        title
        type
        slug
        mainCategories
        landscapeImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
        photographer
      }
    }
    post3: mdx(
      frontmatter: {slug: {eq: "banoffee-pie"}}
      ) {
      frontmatter {
        title
        slug
        mainCategories
        landscapeImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
        photographer
      }
    }
    post4: mdx(
    frontmatter: {slug: {eq: "the-characters-of-david-gemmell"}}
      ) {
      frontmatter {
        title
        slug
        mainCategories
        landscapeImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
        photographer
      }
    }
    post5: mdx(
      frontmatter: {slug: {eq: "that-last-harry-potter-book"}}
      ) {
      frontmatter {
        title
        slug
        mainCategories
        landscapeImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
        photographer
      }
    }
  }
`);
  return [
    post1,
    post2,
    post3,
    post4,
    post5
  ];
}

export default useAuthorPosts;
