import React from "react";
import PropTypes from "prop-types";
import { graphql, navigate } from "gatsby";

import {
  authorImage,
  greeting,
  marginLeftBig,
  rotated,
} from "./templates.module.css";

import Breadcrumbs from "../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Carousel from "../components/user-interactive/carousel/Carousel";
import Chat from "../components/typography/chat/Chat";
import Div from "../components/layout/containers/Div";
import ExcerptList from "../components/postLists/excerptList/ExcerptList";
import Layout from "../components/layout/containers/Layout";
import Main from "../components/layout/containers/Main";
import MediumPostList from "../components/postLists/mediumPostList/MediumPostList";
import OptionBoxes from "../components/navigation/menus/OptionBoxes";
import Pagination from "../components/navigation/page-navigation/pagination/Pagination";
import SearchEngineOptimisation from "../components/seo/SearchEngineOptimisation";
import Signature from "../components/typography/signature/Signature";
import Spacer from "../components/layout/spacing/Spacer";
import StandardGrid from "../components/layout/grids/StandardGrid";

import {
  cutSteakImg,
  fruitInHeartShapeImg,
  maltaBoatsImg,
  quillInkPaperImg,
  bookInFloraImg,
  bookAndCoffeeImg,
  alexRightImg,
} from "../support/functions/staticImgFunctions";
import { today } from "../support/functions/utility";

import usePostSelection from "../support/hooks/usePostSelection.query";
import useRecipesOfToday from "../support/hooks/useRecipesOfToday.query";

////** COMPONENT **////
const HomeTemplate = ({ data: { allPosts }, pageContext }) => {
  ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** GRAPHQL DATA **////
  const _allPosts = allPosts.nodes;
  const {
    recipePost,
    reviewPost,
    healthPost,
    expatPost,
    writingPost,
    learningPost,
  } = usePostSelection();
  const _recipesOfToday = useRecipesOfToday();

  ////** VARIABLES **////
  //OptionBoxes - [] of {image, button text, link]
  const _options = [
    {
      link: "/recipes",
      name: "Recipes",
      image: cutSteakImg(),
    },
    {
      link: "/recipes",
      name: "Health",
      image: fruitInHeartShapeImg(),
    },
    {
      link: "/portfolio",
      name: "Expats In Malta",
      image: maltaBoatsImg(),
    },
    {
      link: "/portfolio",
      name: "Writing",
      image: quillInkPaperImg(),
    },
    {
      link: "/portfolio",
      name: "Poems",
      image: bookInFloraImg(),
    },
    {
      link: "/learning",
      name: "Learn",
      image: bookAndCoffeeImg(),
    },
  ];
  //ExcerptList - [] of {}, button text, max-length of description text
  const excerptListPosts = [
    recipePost,
    expatPost,
    healthPost,
    reviewPost,
    writingPost,
    learningPost,
  ];
  const excerptListInnerText = "Read More";
  const excerptLength = 75;
  //MediumPostList - [] of {}, button text, max-length of description text, boolean variables of extra data to show
  const mainData = [..._allPosts];
  const mainPostsInnerText = "Continue...";
  const mediumPostExcerptLength = 150;
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;
  //AsideContent - img to top the intro
  const image = alexRightImg();
  //Pagination - btn text, pageContext
  const pageLink = "";
  const { pageInfo } = allPosts;
  //Carousel - [] of {}, title, button text
  const carouselContent = [..._recipesOfToday];
  const carouselPostsInnerText = "See More";
  const carouselTitle = `Recipes for ${today()}`;

  ////** FUNCTIONS **////
  //Navigates from the options box to the user clicked page
  const handleBoxClick = (e) => {
    const clickedOption = _options.find(
      (item) => item.name === e.target.innerText,
    );
    if (clickedOption) {
      navigate(clickedOption.link);
    }
  };

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={3} />
      <Div size={1}>
        <OptionBoxes
          menu={_options}
          onClick={handleBoxClick}
        />
        <Spacer size={3} />
        <StandardGrid size={1}>
          <Main size={1}>
            <h3 className="shadowText">My Latest posts</h3>
            <Spacer size={3} />
            {pageContext.currentPage !== 1 && <Breadcrumbs crumbs={crumbs} />}
            <MediumPostList
              postData={mainData}
              excerptLength={mediumPostExcerptLength}
              showDate={showDate}
              showAuthor={showAuthor}
              hasPhotographer={hasPhotographer}
              showSubCategories={showSubcategories}
              innerText={mainPostsInnerText}
            />
            <Pagination
              pageLink={pageLink}
              pageInfo={pageInfo}
            />
          </Main>
          <aside>
            <div className="sideBorderDark sideBorderPad">
              <div className="flexCol">
                <div className={rotated}>
                  <h3 className={`textCenter pad1 ${greeting}`}>
                    Hello
                    <br />
                    And Welcome!
                  </h3>
                </div>
                <div className={`pad1 ${authorImage}`}>{image}</div>
                <Chat size={1}>
                  <p className="pad1">
                    I'm Alex, and Thunder Island is my creative corner.
                  </p>
                  <p className="pad1">
                    This space is a passionate mix of everything great and
                    nothing important that is expected to go unnoticed by the
                    rest of the world.
                  </p>
                  <p className="pad1">
                    But, just in case some random kindly stranger stops by -
                    that would be you! - and wishes to look around, let me give
                    you a quick idea of what you will find.
                  </p>
                  <p className="pad1">
                    I post my family recipes here and every dish has passed a
                    taste test by at least one family member, whether by adult
                    or child. More than a few of the recipes are from diets
                    delved into over the years while others are more budget,
                    easy-cook, decadently delicious or of no particular
                    category. This is our personalised family recipe book.
                    a.k.a. stuff we like.
                  </p>
                  <p className="pad1">
                    There is a section containing things to learn: primary maths
                    for both my kids, some Maltese for my son, and English
                    lessons for foreigners including a few practice pages for
                    those who wish.
                  </p>
                  <p className="pad1">
                    And lastly, a portfolio showcasing two of my hobbies: coding
                    and writing. This website is all mine: my design, code and
                    content. I often practice by tinkering with the design,
                    expanding the code and adding to the content.
                  </p>
                  <p className="pad1">
                    Although I have never produced anything print-worthy, I
                    enjoy writing - and so, stories, poems and short blog posts
                    on books I have read, authors I like or health matters I am
                    interested in have found their homes here, along with a few
                    real-life experiences.
                  </p>
                  <p className="pad1">
                    So, now that you, the kindly stranger, are aware that this
                    website is no great masterpiece, also know that you are very
                    welcome. Please feel free to poke about and enjoy!
                  </p>
                </Chat>
                <Signature
                  signedBy="Alex"
                  rotate
                />
              </div>
            </div>
          </aside>
        </StandardGrid>
        <Spacer size={2} />
        {pageContext.currentPage === 1 ? (
          <>
            <section className="flexCol">
              <h3 className={`shadowText ${marginLeftBig}`}>
                Popular Posts By Category
              </h3>
              <Spacer size={3} />
              <ExcerptList
                excerptData={excerptListPosts}
                innerText={excerptListInnerText}
                excerptLength={excerptLength}
              />
            </section>
            <Spacer size={1} />
          </>
        ) : null}
      </Div>
      <section className="flexCol">
        <Carousel
          title={carouselTitle}
          carouselData={carouselContent}
          innerText={carouselPostsInnerText}
        />
      </section>
    </Layout>
  );
};

export const Head = () => (
  <SearchEngineOptimisation title="Thunder Island | Recipes, Learning, Writing" />
);

////** PROP TYPES **////
HomeTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default HomeTemplate;

////** PAGE QUERY **////
export const data = graphql`
  query ($limit: Int!, $skip: Int!) {
    allPosts: allMdx(
      limit: $limit
      filter: {
        frontmatter: {
          type: { eq: "post", nin: "profile" }
          published: { eq: true }
        }
      }
      skip: $skip
      sort: { frontmatter: { dates: DESC } }
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
          comments
          associated
          description
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        pageCount
      }
    }
  }
`;
