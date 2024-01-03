import { graphql, useStaticQuery } from "gatsby";


export default function useMetadata () {

  const { site } = useStaticQuery( graphql`
  query siteMeta {
  site {
    siteMetadata {
      siteUrl
      title
      image
      description
      author
      stack
      techs
    }
  }
}
  `);

  return site.siteMetadata;

}


