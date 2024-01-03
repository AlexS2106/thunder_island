import { graphql, useStaticQuery } from "gatsby";


const useSlugs = () => {
  const { allMdx } = useStaticQuery( graphql`
  query allSlugs {
    allMdx (filter: {frontmatter: {published: {eq: true}}}) {
      nodes {
        frontmatter {
          slug
          mainCategories
        }
      }
    }
  }
  `);
  return allMdx.nodes;
}

export default useSlugs;