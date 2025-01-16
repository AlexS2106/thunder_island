import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuid } from "uuid";

import {
  innerWrapper,
  btnWrapper,
  card,
  cardHeading,
  cardFooter,
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Button from "../components/buttons/Button";
import Date from "../components/typography/date/Date";
import Chat from "../components/typography/chat/Chat";
import Layout from "../components/layout/containers/Layout";
import Main from "../components/layout/containers/Main";
import StandardGrid from "../components/layout/grids/StandardGrid";
import PageTitle from "../components/typography/pageTitle/PageTitle";
import SearchEngineOptimisation from "../components/seo/SearchEngineOptimisation";
import Signature from "../components/typography/signature/Signature";
import SmallPostList from "../components/postLists/smallPostList/SmallPostList";
import Spacer from "../components/layout/spacing/Spacer";

import { listSubcategories, makeTitle } from "../support/functions/utility";

import MDX from "../support/providers/MDX";

////** COMPONENT **////
const RecipeTemplate = ({
  data: { post, associatedPosts },
  children,
  pageContext,
}) => {
  ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** GRAPHQL DATA **////
  const { frontmatter } = post;
  const {
    title,
    dates,
    author,
    landscapeImage,
    alt,
    photographer,
    description,
  } = frontmatter;

  const _associatedPosts = associatedPosts.nodes;

  ////** VARIABLES **////
  //PageTitle - title text
  const pageTitle = title;
  //Buttons - button inner text
  const endButtonInnerText = "Go Back";
  //SmallPostList - [] of {}, title text, button text
  const asidePostsData = [..._associatedPosts];
  const asidePostsHeaderText = "Add another recipe?";
  const asidePostsInnerText = "Read More";

  ////** FUNCTIONS **////
  //Checks for subcategories int he frontmatter and generates a list
  const subcats = listSubcategories(frontmatter);
  const generateSubcats = (
    <h6 className="textCenter">
      {subcats.map((tag, index) => {
        if (index === 0) {
          return <span key={uuid()}> | {makeTitle(tag)} | </span>;
        } else if (index === subcats.length - 1) {
          return <span key={uuid()}>{makeTitle(tag)} | </span>;
        } else {
          return <span key={uuid()}> {makeTitle(tag)} | </span>;
        }
      })}{" "}
    </h6>
  );
  //MDX - transforms children
  const MDXContent = MDX(children);

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={3} />
      <PageTitle title={pageTitle} />
      <Spacer size={3} />
      <Breadcrumbs crumbs={crumbs} />
      <Spacer size={2} />
      <StandardGrid size={1}>
        <Main size={1}>
          <article className="bgLight">
            <div className={`flexCol textCenter ${innerWrapper}`}>
              <Spacer size={3} />
              {dates &&
                dates.map((date) => (
                  <Date
                    key={date}
                    date={date}
                  />
                ))}
              <GatsbyImage
                image={getImage(landscapeImage)}
                alt={alt}
              />
              {photographer && <cite>photo by {photographer}</cite>}
              <Spacer size={3} />
              <Chat size={2}>
                <p className="sideBorderDark sideBorderPad">{description}</p>
              </Chat>
            </div>
            <Spacer size={1} />
            <div className={`flexCol pad1 ${card}`}>
              <header className={`flexCol ${cardHeading}`}>
                <GatsbyImage
                  image={getImage(landscapeImage)}
                  alt={alt}></GatsbyImage>
                <h2 className="textCenter shadowText">{title}</h2>
                {generateSubcats}
              </header>
              {MDXContent}
              <Signature
                rotate
                end
                signedBy={author}
              />
              <div className={cardFooter}>
                <p>Nutrition... I'm working on it! It's coming soon!</p>
              </div>
            </div>
          </article>
        </Main>
        <aside className="flexCol">
          <section className="sideBorderDark flexCol bgLight">
            <header>
              <h3 className="textCenter pad1 shadowText">
                {asidePostsHeaderText}
              </h3>
            </header>
            <SmallPostList
              postData={asidePostsData}
              innerText={asidePostsInnerText}
            />
          </section>
        </aside>
        <div className={`flexRow ${btnWrapper}`}>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            innerText={endButtonInnerText}></Button>
        </div>
      </StandardGrid>
    </Layout>
  );
};

export const Head = ({ data: { post } }) => (
  <SearchEngineOptimisation
    title={`Thunder Island | Recipe: ${post.frontmatter.title}`}
    description={post.description}
  />
);

////** PROP TYPES **////
RecipeTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default RecipeTemplate;

////** PAGE QUERY **////
export const data = graphql`
  query recipeQuery($id: String, $associated: [String]) {
    post: mdx(id: { eq: $id }) {
      frontmatter {
        title
        type
        by_course
        by_ingredient
        by_diet
        by_option
        dates
        author
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
      filter: { frontmatter: { slug: { in: $associated } } }
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
