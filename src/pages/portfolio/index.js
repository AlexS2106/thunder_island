import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuid } from "uuid";
import scrollTo from "gatsby-plugin-smoothscroll";

import {
  portfolio,
  group,
  groupMenu,
  groupItem,
  groupItemContainer,
  groupItemContainerReverse,
  bg1,
  bg2,
  bg3,
  bg4,
  groupItemBody,
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Chat from "../../components/typography/chat/Chat";
import Layout from "../../components/layout/containers/Layout";
import Main from "../../components/layout/containers/Main";
import OptionBoxes from "../../components/navigation/menus/OptionBoxes";
import PageTitle from "../../components/typography/pageTitle/PageTitle";
import Seo from "../../components/seo/seo";
import Spacer from "../../components/layout/spacing/Spacer";
import LinkAsButton from "../../components/navigation/links/LinkAsButton";

import {
  bookInFloraImg,
  countryPathImg,
  bookWithHeartPageImg,
  maltaBoatsImg,
  sunlitLandscapeImg,
  thunderLightningImg,
} from "../../support/functions/staticImgFunctions";
import { makeSlug } from "../../support/functions/utility";

import useMediaQuery from "../../support/hooks/useMediaQuery";

////** COMPONENT **////
const PortfolioPage = ({ data: { allPosts }, pageContext }) => {
  ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const isWide = useMediaQuery(`(min-width: 900px)`);

  ////** GRAPHQL DATA **////
  const _allPosts = allPosts.nodes;

  ////** VARIABLES **////
  //PageTitle - title
  const pageTitle = "My Portfolio";
  //Intro - paragraph text
  const intro = `Books read, movies watched, information informed, opinions opined, poems mused, stories woven, projects coded, walks walked, experiences exposed, photographs kept, life lived.`;
  //Portfolio OptionBoxes - [] of {image, button text, link, postArray}
  const _options = [
    {
      link: "",
      name: "Books I Love",
      image: bookWithHeartPageImg(),
      posts: _allPosts.filter((post) =>
        post.frontmatter.tags.includes("reviews"),
      ),
    },
    {
      link: "",
      name: "Family Life",
      image: maltaBoatsImg(),
      posts: _allPosts.filter((post) =>
        post.frontmatter.tags.includes("family-life"),
      ),
    },
    {
      link: "",
      name: "Fictional Stories",
      image: sunlitLandscapeImg(),
      posts: _allPosts.filter(
        (post) =>
          post.frontmatter.tags.includes("fiction") &&
          post.frontmatter.tags.includes("stories") &&
          !post.frontmatter.tags.includes("poems"),
      ),
    },
    {
      link: "",
      name: "Informational Articles",
      image: countryPathImg(),
      posts: _allPosts.filter((post) =>
        post.frontmatter.tags.includes("information"),
      ),
    },
    {
      link: "",
      name: "Poetry",
      image: bookInFloraImg(),
      posts: _allPosts.filter((post) =>
        post.frontmatter.tags.includes("poems"),
      ),
    },
    {
      name: "Thunder Island's Code",
      image: thunderLightningImg(),
    },
  ];

  ////** FUNCTIONS **////
  const generateWritingContent = _options.map((item) => {
    if (item.tagged) {
      const { name, posts } = item;
      return (
        <div key={uuid()}>
          <div
            id={makeSlug(name)}
            className={`bgGradient flexCol ${group}`}>
            <h3 className="shadowText textCenter">{name}</h3>
            <Spacer size={4} />
            <ul className={groupMenu}>
              {posts.map((post) => {
                const { title, slug } = post.frontmatter;
                return (
                  <li key={uuid()}>
                    <button onClick={() => scrollTo(`#${slug} `)}>
                      <h4>{title}</h4>
                    </button>
                  </li>
                );
              })}
            </ul>
            <Spacer size={4} />
            {posts.map((post, index) => {
              const {
                title,
                slug,
                portraitImage,
                landscapeImage,
                alt,
                description,
              } = post.frontmatter;
              let displayAlternating =
                index % 2 === 0
                  ? groupItemContainer
                  : groupItemContainerReverse;
              let bg;
              switch (index) {
                case 1:
                  bg = bg1;
                  break;
                case 2:
                  bg = bg3;
                  break;
                case 3:
                  bg = bg4;
                  break;
                default:
                  bg = bg2;
                  break;
              }
              let groupItemImg = isWide ? landscapeImage : portraitImage;
              return (
                <div
                  key={uuid()}
                  id={`${slug}`}
                  className={`${displayAlternating} ${groupItem} ${bg}`}>
                  <div>
                    <GatsbyImage
                      image={getImage(groupItemImg)}
                      alt={alt}
                    />
                  </div>
                  <div className={`flexCol pad1 ${groupItemBody}`}>
                    <div>
                      <h4>{title}</h4>
                    </div>
                    <div className={`pad1`}>
                      <p>{description}</p>
                    </div>
                    <LinkAsButton
                      linkTo={`/portfolio/${slug}/`}
                      innerText={`Read More Of ${title}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <Spacer size={1} />
        </div>
      );
    } else {
      return null;
    }
  });

  const handleMenuClick = (e) => {
    const id = `${makeSlug(e.target.innerText)}`;
    if (id === "thunder-island-code") {
      window.location.href = "https://github.com/AlexS2106/thunder_island.git";
    } else {
      scrollTo(`#${id}`);
    }
  };

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={3} />
      <Breadcrumbs crumbs={crumbs} />
      <Spacer size={3} />
      <PageTitle title={pageTitle} />
      <Spacer size={3} />
      <Chat size={3}>
        <p className="sideBorderDark sideBorderPad">{intro}</p>
      </Chat>
      <Spacer size={3} />
      <OptionBoxes
        menu={_options}
        onClick={(e) => handleMenuClick(e)}
      />
      <Spacer size={3} />
      <div className={portfolio}>
        <Main size={1}>
          <h2
            id="writing"
            className="textCenter shadowText">
            Writing
          </h2>
          <Spacer size={3} />
          {generateWritingContent}
          <Spacer size={2} />
        </Main>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Thunder Island | Portfolio" />;

////** PROP TYPES **////
PortfolioPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PortfolioPage;

//// *** PAGE QUERY *** ////
export const data = graphql`
  query portfolioQuery {
    allPosts: allMdx(
      filter: {
        frontmatter: {
          mainCategories: { in: "portfolio" }
          published: { eq: true }
        }
      }
      sort: { frontmatter: { dates: DESC } }
    ) {
      nodes {
        id
        frontmatter {
          title
          type
          slug
          subcategories
          tags
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
          description
        }
      }
    }
  }
`;
