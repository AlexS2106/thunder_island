import { useStaticQuery, graphql } from "gatsby";

const useUnpublished = () => {
  const { allMdx } = useStaticQuery( graphql`
    {
      allMdx(
        filter: {frontmatter: {published: {eq: false}}}
        sort: {frontmatter: {dates: DESC}}
      ) {
        nodes {
          id
          frontmatter {
            title
            type
            slug
            mainCategories
            subcategories
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

export default useUnpublished;