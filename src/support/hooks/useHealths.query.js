import { useStaticQuery, graphql } from "gatsby";

const useHealths = () => {
  const { allMdx } = useStaticQuery( graphql`
    {
      allMdx(
        filter: {frontmatter: {tags: {in: "health"}, published: {eq: true}}}
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

export default useHealths;