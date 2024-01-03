import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from 'uuid';

import {
  wrapper,
  innerWrapper,
  btnWrapper
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Button from "../components/buttons/Button"; 
import Date from "../components/typography/date/Date";
import Carousel from "../components/user-interactive/carousel/Carousel";
import Intro from "../components/typography/intro/Intro";
import Layout from "../components/layout/containers/Layout";
import Main from "../components/layout/containers/Main";
import PageTitle from "../components/typography/pageTitle/PageTitle";
import Seo from "../components/seo/seo";
import Signature from "../components/typography/signature/Signature";
import Spacer from "../components/layout/spacing/Spacer";

import MDX from "../support/providers/MDX";


////**  COMPONENT **////
const ArticleTemplate = ( { data: { post, associatedPosts }, children, pageContext } ) => {

  ////** STATE **////
  const {
    breadcrumb: { crumbs }
  } = pageContext;

  ////** GRAPHQL DATA **////
  const { frontmatter } = post;
  const { title, tags, dates, author, landscapeImage, alt, photographer, description } = frontmatter;
  const _associatedPosts = associatedPosts.nodes

  ////** VARIABLES **////
  //Article - btn text
  const innerText = "Go Back";
  //PageTitle - title text
  const pageTitle = title;
  //Carousel - [] of {}
  const carouselData = [ ..._associatedPosts ];
  //Carousel - button text, title text
  const carouselPostsInnerText = "Read Article";
  const carouselTitle = "Similar Articles";

  ////** FUNCTIONS **////
  //Cloud - makes tags into h6s
  const generateTags = tags > 0 ? tags.map( ( tag ) => {
    return (
      <h6 key={ uuidv4() } >
        { tag.name }
      </h6>
    );
  } ) : null;
  //MDX - transforms children
  const MDXContent = MDX( children );

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={ 3 } />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size={ 3 } />
      <PageTitle title={ pageTitle } />
      <Spacer size={ 3 } />
      <Main size={ 1 }>
        <div className={ `flexColumn ${ wrapper }` }>
          <article className="pad1">
            <div className={ `flexColumn textCenter ${ innerWrapper }` }>
              <Spacer size={ 3 } />
              { dates && dates.map( date =>
                <Date key={ date }
                  date={ date } />
              ) }
              <Spacer size={ 3 } />
              <GatsbyImage
                image={ getImage( landscapeImage ) }
                alt={ alt } />
              { photographer &&
                <cite>
                  photo by { photographer }
                </cite> }
              <Spacer size={ 3 } />
              { generateTags }
              <Spacer size={ 3 } />
              <Intro>
                { description }
              </Intro>
            </div>
            <Spacer size={ 1 } />
            { MDXContent }
            <div
              style={ { padding: "1rem 6rem 3rem 3rem" } }>
              <Signature
                rotate
                signedBy={ author } />
            </div>
          </article>
          <div className={ `flexRow ${ btnWrapper }` }>
            <Button
              onClick={ () => { navigate( -1 ) } }
              innerText={ innerText }
            />
          </div>
          <Spacer size={ 3 } />
        </div>
        <Spacer size={ 3 } />
        <Carousel
          title={ carouselTitle }
          carouselData={ carouselData }
          innerText={ carouselPostsInnerText }
        />
      </Main>
    </Layout>
  );
}

export const Head = ( { data: { post } } ) => (
  <Seo
    title={ `Thunder Island | Writing: ${post.title}` }
    description={ post.description } />
);

////** PROP TYPES **////
ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default ArticleTemplate;

////** PAGE QUERY **////
export const data = graphql`
query articleQuery($id: String, $associated: [String]) 
{
  post: mdx(id: {eq: $id} ) {
    frontmatter {
      title
      type
      slug
      mainCategories
      subcategories
      tags
      published
      dates
      author
      portraitImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      landscapeImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      alt
      photographer
      description
    }
  }
    associatedPosts: allMdx(
    filter: {frontmatter: {slug: {in: $associated}}}
  ) {
    nodes {
      id
      frontmatter {
        title
        type
        slug
        mainCategories
        subcategories
        tags
        dates
        author
        landscapeImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        alt
        photographer
        associated
        description
      }
    }
  }
}
`;