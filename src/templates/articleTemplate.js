import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuid } from "uuid";

import { wrapper, innerWrapper, btnWrapper } from "./templates.module.css";

import Breadcrumbs from "../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Button from "../components/buttons/Button";
import Date from "../components/typography/date/Date";
import Carousel from "../components/user-interactive/carousel/Carousel";
import Intro from "../components/typography/intro/Intro";
import Layout from "../components/layout/containers/Layout";
import Main from "../components/layout/containers/Main";
import PageTitle from "../components/typography/pageTitle/PageTitle";
import SearchEngineOptimisation from "../components/seo/SearchEngineOptimisation";
import Signature from "../components/typography/signature/Signature";
import Spacer from "../components/layout/spacing/Spacer";

import MDX from "../support/providers/MDX";

////**  COMPONENT **////
const ArticleTemplate = ({
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
    tags,
    dates,
    author,
    landscapeImage,
    alt,
    photographer,
    description,
  } = frontmatter;
  const _associatedPosts = associatedPosts.nodes;

  ////** FUNCTIONS **////
  //MDX - transforms children
  const MDXContent = MDX(children);

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={3} />
      <Breadcrumbs crumbs={crumbs} />
      <Spacer size={3} />
      <PageTitle title={title} />
      <Spacer size={3} />
      <Main size={1}>
        <div className={`flexCol ${wrapper}`}>
          <article className="pad1">
            <div className={`flexCol textCenter ${innerWrapper}`}>
              <Spacer size={3} />
              {dates.map((date) => (
                <Date
                  key={date}
                  date={date}
                />
              ))}
              <Spacer size={3} />
              <GatsbyImage
                image={getImage(landscapeImage)}
                alt={alt}
              />
              {photographer && <cite>photo by {photographer}</cite>}
              <Spacer size={3} />
              {tags.map((tag) => (
                <h6 key={uuid()}>{tag.name}</h6>
              ))}
              <Spacer size={3} />
              <Intro>{description}</Intro>
            </div>
            <Spacer size={1} />
            {MDXContent}
            <div style={{ padding: "1rem 6rem 3rem 3rem" }}>
              <Signature
                rotate
                signedBy={author}
              />
            </div>
          </article>
          <div className={`flexRow ${btnWrapper}`}>
            <Button
              onClick={() => {
                navigate(-1);
              }}
              innerText="Go Back"
            />
          </div>
          <Spacer size={3} />
        </div>
        <Spacer size={3} />
        <Carousel
          title="Simiilar Articles"
          carouselData={_associatedPosts}
          innerText="Read Article"
        />
      </Main>
    </Layout>
  );
};

export const Head = ({ data: { post } }) => (
  <SearchEngineOptimisation
    title={`Thunder Island | Writing: ${post.frontmatter.title}`}
    description={post.description}
  />
);

////** PROP TYPES **////
ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default ArticleTemplate;

////** PAGE QUERY **////
export const data = graphql`
  query articleQuery($id: String, $associated: [String]) {
    post: mdx(id: { eq: $id }) {
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
