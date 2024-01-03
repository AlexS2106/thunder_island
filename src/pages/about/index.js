import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  innerWrapper
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Layout from "../../components/layout/containers/Layout";
import Main from "../../components/layout/containers/Main";
import PageTitle from "../../components/typography/pageTitle/PageTitle";
import Seo from "../../components/seo/seo";
import Signature from "../../components/typography/signature/Signature";
import SmallPostList from "../../components/postLists/smallPostList/SmallPostList";
import Spacer from "../../components/layout/spacing/Spacer";
import StandardGrid from "../../components/layout/grids/StandardGrid";

import useAuthorPosts from "../../support/hooks/useAuthorPosts.query";


  ////** COMPONENT **////
const AboutPage = ( { data: { post }, pageContext } ) => {

  ////** STATE **////
  const {
    breadcrumb: { crumbs }
  } = pageContext;
  
  ////** GRAPHQL DATA **////
  const { frontmatter } = post;
  const { title, portraitImage, alt } = frontmatter;
  const _authorPosts = useAuthorPosts();

  ////** VARIABLES **////
  //PageTitle - title
  const pageTitle = "About";
  //SmallPostList - button text
  const associatedPostsInnerText = "Read More";

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={ 2 } />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size={ 3 } />
      <PageTitle title={ pageTitle } />
      <Spacer size={ 2 } />
      <StandardGrid size={ 1 }>
        <div>
          <Main size={ 1 }>
            <article className="pad1 bgLight">
              <h2 className="textCenter shadowText">{ title }</h2>
              <div className={ `flexColumn pad1 ${innerWrapper }` }>
                <GatsbyImage image={ getImage( portraitImage ) } alt={ alt } />
                <h3>Hi!</h3>
                <p className="pad1">My name is Alex. It's short for Alexandra, which is far too long a name for day-to-day life. </p>
                <p className="pad1">I was lucky enough to be born and bred in the striking Yorkshire countryside. But, after a few years of roaming around England, I, along with my husband, packed everything up and moved to Malta. As the years have passed, we have gained two great kids and two energetic dogs. 15 years later, we are still here.</p>
                <p className="pad1">A few years ago, I began a website to share my paleo recipes with the world. Since then, I have learned and grown, and the website has undergone many amorphous changes. Each alteration in design, coding, intent, and content acknowledges a new skill learned, usually from scratch, and a great way to practice it! </p>
                <p className="pad1">Now named Thunder Island, this website keeps my hobbies and interests in one place.</p>
                <p className="pad1">I dabble in UI/UX design and practice new coding skills. I indulge in different writing styles with anecdotes, poems, and stories, or tell the world about my life in Malta with a few scenic photos. I don't claim photography among my skills, but the world around me is beautiful enough to compensate. I still share my recipes from the various diets my husband and I have been on and the non-diet recipes from when we weren't. They were too delicious not to share!</p>
                <p className="pad1">Most recently, I've been learning some backend development and crocheting. However, neither skill is yet ready to be inflicted upon anyone except me - but watch this space!</p>
                <p className="pad1"><em>All the best!</em></p>
              </div>
              <Signature signedBy="alex" rotate />
            </article>
          </Main>
        </div>
        <aside className="flexColumn">
          <section className="sideBorderDark flexColumn bgLight">
            <header>
              <h3 className="textCenter pad1 shadowText">Recommended Posts</h3>
            </header>
            <address rel="author" className="shadowText textCenter" >by Alex</address>
            <SmallPostList
              postData={ _authorPosts }
              innerText={ associatedPostsInnerText }
            />
          </section>
        </aside>
      </StandardGrid>
    </Layout>
  );
}

export const Head = () => <Seo title="Thunder Island | About" />;

////** PROP TYPES **////
AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default AboutPage;

export const data = graphql`
  query {
    post: mdx(frontmatter: {type: {eq: "profile"}}) {
      id
      frontmatter {
        title
        portraitImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        alt
      }
    }
  }
`