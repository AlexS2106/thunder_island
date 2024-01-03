import { useStaticQuery, graphql } from "gatsby";

const useRecipes = () => {
  const { allMdx } = useStaticQuery( graphql`
    {
      allMdx(
        filter: {frontmatter: {mainCategories: {eq: "recipes"}, published: {eq: true}}}
        sort: {frontmatter: {dates: DESC}} 
        ) {
        nodes {
          id
          frontmatter {
            title
            type
            slug
            mainCategories
            by_course
            by_ingredient
            by_diet
            by_option
            tags
            dates
            author
            portraitImage {
              childImageSharp {
                gatsbyImageData
              }
            }
            landscapeImage {
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
      }
    }
  `);
  return allMdx.nodes;
}

export default useRecipes;