import { useStaticQuery, graphql } from "gatsby";

const useWritings = () => {
  const { allMdx } = useStaticQuery( graphql`
    {
      allMdx(
        filter: {frontmatter: {subcategories: {eq: "writing"}, published: {eq: true}}}
        sort: {frontmatter: {dates: DESC}}
        ) {
        nodes {
          frontmatter {
            title
            type
            slug
            mainCategories
            subcategories
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

export default useWritings;