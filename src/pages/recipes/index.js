import React, { useState } from "react";
import PropTypes from "prop-types";

import { wrapperLight } from "./index.module.css";

import Breadcrumbs from "../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Button from "../../components/buttons/Button";
import Carousel from "../../components/user-interactive/carousel/Carousel";
import Cloud from "../../components/user-interactive/cloud/Cloud";
import Layout from "../../components/layout/containers/Layout";
import Main from "../../components/layout/containers/Main";
import MediumPostList from "../../components/postLists/mediumPostList/MediumPostList";
import OptionBoxes from "../../components/navigation/menus/OptionBoxes";
import PageTitle from "../../components/typography/pageTitle/PageTitle";
import SearchEngineOptimisation from "../../components/seo/SearchEngineOptimisation";
import SmallPostList from "../../components/postLists/smallPostList/SmallPostList";
import Spacer from "../../components/layout/spacing/Spacer";
import StandardGrid from "../../components/layout/grids/StandardGrid";
import TileList from "../../components/postLists/tileList/TileList";
import UserChoiceFilter from "../../components/user-interactive/userChoiceFilter/UserChoiceFilter";

import {
  differentFoodCoursesImg,
  foodIngredientsImg,
  rawFoodsImg,
  foodOnPlatesImg,
  writtenRecipesOnPaperImg,
} from "../../support/functions/staticImgFunctions";

import { filterList, makeTitle } from "../../support/functions/utility";
import useRecipes from "../../support/hooks/useRecipes.query";
import useHealths from "../../support/hooks/useHealths.query";
import useRecipesOfToday from "../../support/hooks/useRecipesOfToday.query";
import {
  byDiets,
  byIngredients,
  byCourses,
  byOptions,
  recipeTags,
  favouriteRecipes,
} from "../../support/types/indices";

////** COMPONENT **////
const RecipesPage = ({ pageContext }) => {
  ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** GRAPHQL DATA **////
  const _recipesData = useRecipes();
  const _healthsData = useHealths();
  const _recipesOfToday = useRecipesOfToday();

  ////** STATE **////
  const [optionState, setOptionState] = useState([
    ...byDiets,
    ...byIngredients,
    ...byCourses,
    ...byOptions,
  ]);

  const [selectedCategory, setSelectedCategory] = useState(() => {
    const initialState = "All My ";
    return initialState;
  });

  const [shownRecipes, setShownRecipes] = useState(() => {
    const initialState = [..._recipesData];
    return initialState;
  });

  const [mainCount, setMainCount] = useState(0);

  const [selectedTag, setSelectedTag] = useState(() => {
    const initialState = "My Favourite ";
    return initialState;
  });

  const [shownTagRecipes, setShownTagRecipes] = useState(() => {
    const nodes = filterList(favouriteRecipes, _recipesData);
    const initialState = [...nodes];
    return initialState;
  });

  const [asideCount, setAsideCount] = useState(0);

  ////** VARIABLES **////
  //PageTitle - title text
  const pageTitle = "Recipes";
  //Number of recipes to show at one time (via onclick function -> MediumPostList & via onclick function -> TagCloud -> SmallPostList)
  const mediumPostListNumDisplayedRecipes = 10;
  const showRecipeDetails = "Expand more recipes";
  const smallPostListNumDisplayedRecipes = 8;
  //MediumPostList - button text, max-length of description text, boolean variables of extra data to show
  const mainPostsInnerText = "Continue...";
  const excerptLength = 150;
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;
  //SmallPostList - button text
  const asidePostsInnerText = "Read More";
  //TileLists
  const mainTileListBorder = true;
  const asideTileListBorder = false;
  const mainTileListSize = "medium";
  const asideTileListSize = "small";
  //1st Carousel - title, button text
  const carouselTodayRecipesTitle = "Today's Suggestions";
  const carouselTodayRecipesBtnText = "Read more";
  //2nd Carousel - title, button text
  const carouselHealthPostsTitle = "Read Articles About Your Health";
  const carouselHealthPostsBtnText = "Read more";
  //Menuboxes (bg image, categories and their groupings)
  const _categories = [
    {
      list: [...byCourses],
      name: "By Course",
      image: differentFoodCoursesImg(),
    },
    {
      list: [...byDiets],
      name: "By Diet",
      image: rawFoodsImg(),
    },
    {
      list: [...byIngredients],
      name: "By Ingredient",
      image: foodIngredientsImg(),
    },
    {
      list: [...byOptions],
      name: "By Option",
      image: foodOnPlatesImg(),
    },
    {
      list: [...byCourses, ...byDiets, ...byIngredients, ...byOptions],
      name: "All Categories",
      image: writtenRecipesOnPaperImg(),
    },
  ];

  //Cloud - title
  const cloudTitle = "Tag Cloud";

  ////** FUNCTIONS ** ////
  //Applies to menus in <Main /> and in <aside />  - accepts a click which selects a recipe category and shows all the subcategories within the selected category.
  const handleOptionBoxesClick = (e) => {
    const clickedTemp = _categories.filter(
      (item) => item.name === e.target.innerText,
    );
    const clicked = Object.values(clickedTemp[0].list);
    if (
      optionState.length === clicked.length &&
      clicked.filter((item) => optionState.includes(item)).length ===
        optionState.length
    ) {
      setOptionState([
        ...byDiets,
        ...byIngredients,
        ...byCourses,
        ...byOptions,
      ]);
    } else {
      setOptionState(clicked);
    }
  };
  //UserChoiceFilter + PageTitle - accepts a click which selects a recipe subcategory and changes all the recipes in <Main /> or in <aside /> to be only those of that category and alters the <pageTitle/> heading.
  const handleUserChoiceFilterClick = (e) => {
    setMainCount(0);
    if (selectedCategory !== makeTitle(e.target.value)) {
      const showTheseRecipes = _recipesData.filter(
        (node) =>
          node.frontmatter.by_ingredient?.includes(e.target.value) ||
          node.frontmatter.by_diet?.includes(e.target.value) ||
          node.frontmatter.by_course?.includes(e.target.value) ||
          node.frontmatter.by_option?.includes(e.target.value),
      );
      setSelectedCategory(() => makeTitle(e.target.value));
      setShownRecipes(() => showTheseRecipes);
    } else {
      setSelectedCategory(() => makeTitle("All My"));
      setShownRecipes(() => [..._recipesData]);
    }
  };
  //TagCloud + SmallPostMenu - accepts a click which selects a recipe tag and changes all the recipes in the smallPostMenu to be only those of that tag.
  const handleCloudClick = (e) => {
    setAsideCount(0);
    const showTheseRecipes = _recipesData.filter(
      (node) =>
        node.frontmatter.tags &&
        node.frontmatter.tags.length &&
        node.frontmatter.tags.includes(e.target.value),
    );
    setSelectedTag(() => makeTitle(e.target.value));
    setShownTagRecipes(() => showTheseRecipes);
  };

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={3} />
      <Breadcrumbs crumbs={crumbs} />
      <Spacer size={3} />
      <PageTitle title={pageTitle} />
      <Spacer size={3} />
      <OptionBoxes
        menu={_categories}
        onClick={handleOptionBoxesClick}
      />
      <Spacer size={3} />
      <UserChoiceFilter
        menuData={optionState}
        selected={selectedCategory}
        onClick={handleUserChoiceFilterClick}
      />
      <Spacer size={2} />
      <StandardGrid size={1}>
        <Main size={1}>
          <PageTitle title={`${selectedCategory} Recipes`} />
          <MediumPostList
            postData={shownRecipes.slice(
              0,
              mainCount + mediumPostListNumDisplayedRecipes,
            )}
            excerptLength={excerptLength}
            showDate={showDate}
            showAuthor={showAuthor}
            hasPhotographer={hasPhotographer}
            showSubCategories={showSubcategories}
            innerText={mainPostsInnerText}
          />
          {mainCount + mediumPostListNumDisplayedRecipes <
          shownRecipes.length ? (
            <>
              <Button
                innerText={showRecipeDetails}
                onClick={() =>
                  setMainCount(mainCount + mediumPostListNumDisplayedRecipes)
                }
              />
              <Spacer size={3} />
              <TileList
                tileListData={shownRecipes.slice(
                  mainCount + mediumPostListNumDisplayedRecipes,
                  shownRecipes.length,
                )}
                withBorder={mainTileListBorder}
                size={mainTileListSize}
              />
            </>
          ) : null}
          <Spacer size={2} />
        </Main>
        <aside className={`sideBorderDark ${wrapperLight}`}>
          <Cloud
            title={cloudTitle}
            menuData={recipeTags}
            selected={selectedTag}
            onClick={handleCloudClick}
          />
          <Spacer size={3} />
          <section className="sideBorderPad flexCol bgLight">
            <h3 className="textCenter pad1 shadowText">{`${selectedTag} Recipes `}</h3>
            <Spacer size={3} />
            <SmallPostList
              postData={shownTagRecipes.slice(
                0,
                asideCount + smallPostListNumDisplayedRecipes,
              )}
              onClick={handleCloudClick}
              innerText={asidePostsInnerText}
            />
            {asideCount + smallPostListNumDisplayedRecipes <
            shownTagRecipes.length ? (
              <>
                <Button
                  innerText={showRecipeDetails}
                  onClick={() =>
                    setAsideCount(asideCount + smallPostListNumDisplayedRecipes)
                  }
                />
                <Spacer size={3} />
                <TileList
                  tileListData={shownTagRecipes.slice(
                    asideCount + smallPostListNumDisplayedRecipes,
                    shownRecipes.length,
                  )}
                  withBorder={asideTileListBorder}
                  size={asideTileListSize}
                />
              </>
            ) : null}
          </section>
          <Spacer size={3} />
        </aside>
      </StandardGrid>
      <Spacer size={1} />
      <Carousel
        title={carouselTodayRecipesTitle}
        carouselData={_recipesOfToday}
        innerText={carouselTodayRecipesBtnText}
      />
      <Spacer size={1} />
      <Carousel
        title={carouselHealthPostsTitle}
        carouselData={_healthsData}
        innerText={carouselHealthPostsBtnText}
        id="health"
      />
    </Layout>
  );
};

export const Head = () => (
  <SearchEngineOptimisation title="Thunder Island | Recipes" />
);

////** PROP TYPES **////
RecipesPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default RecipesPage;
