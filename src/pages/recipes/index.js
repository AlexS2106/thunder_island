import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { v4 as uuid } from 'uuid';

import {
  wrapperLight
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Button from "../../components/buttons/Button";
import Carousel from "../../components/user-interactive/carousel/Carousel";
import Cloud from "../../components/user-interactive/cloud/Cloud";
import Layout from "../../components/layout/containers/Layout";
import Main from "../../components/layout/containers/Main";
import MediumPostList from "../../components/postLists/mediumPostList/MediumPostList";
import OptionBoxes from "../../components/navigation/menus/OptionBoxes";
import PageTitle from "../../components/typography/pageTitle/PageTitle";
import Seo from "../../components/seo/seo";
import SmallPostList from "../../components/postLists/smallPostList/SmallPostList";
import Spacer from "../../components/layout/spacing/Spacer";
import StandardGrid from "../../components/layout/grids/StandardGrid";
import UserChoiceFilter from "../../components/user-interactive/userChoiceFilter/UserChoiceFilter";

import { differentFoodCoursesImg, foodIngredientsImg, rawFoodsImg, platesOfFoodImg, foodOnPlatesImg, writtenRecipesOnPaperImg } from "../../support/functions/staticImgFunctions";
import { filterList, makeTitle } from "../../support/functions/utility";
import useRecipes from "../../support/hooks/useRecipes.query";
import useHealths from "../../support/hooks/useHealths.query";
import { byDiets, byIngredients, byCourses, byOptions, recipeTags, favouriteRecipes } from "../../support/types/indices";


////** COMPONENT **////
const RecipesPage = ( { pageContext } ) => {

    ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** GRAPHQL DATA **////
  const _recipesData = useRecipes();
  const _healthsData = useHealths();

    ////** STATE **////
  const [ optionState, setOptionState ] = useState( [ ...byDiets, ...byIngredients, ...byCourses, ...byOptions ] );

  const [ selectedCategory, setSelectedCategory] = useState( () => { 
    const initialState = "All My ";
    return initialState;
  } );

  const [ shownRecipes, setShownRecipes ] = useState( () => { 
    const initialState = [ ..._recipesData ];
    return initialState;
  } );

  const topOfShowingRecipesRef = useRef();

  const [ mainCount, setMainCount ] = useState( 0 );

  const [ selectedTag, setSelectedTag] = useState( () => { 
    const initialState = "My Favourite ";
    return initialState;
  } );

  const [ shownTagRecipes, setShownTagRecipes ] = useState( () => {
    const nodes = filterList( favouriteRecipes, _recipesData );
    const initialState = [ ...nodes ];
    return initialState;
  } );

  const topOfShowingTagRecipesRef = useRef();
  
  const [ asideCount, setAsideCount ] = useState( 0 );

  useEffect( () => {
    topOfShowingRecipesRef.current.scrollIntoView();
  }, [ mainCount ] );

  useEffect( () => {
    topOfShowingTagRecipesRef.current.scrollIntoView();
  }, [ asideCount ] );

  ////** VARIABLES **////
  //PageTitle - title text
  const pageTitle = "Recipes";
  //Number of recipes to show at one time (via onclick function -> MediumPostList & via onclick function -> TagCloud -> SmallPostList)
  const mediumPostListNumDisplayedRecipes = 7;
  const showRecipeDetails = "Show More."
  const moveOnButtonText = "Nothing yet, let's keep looking."; 
  const moveBackButtonText = "On second thought, let's go back.";
  const smallPostListNumDisplayedRecipes = 6;
  //MediumPostList - button text, max-length of description text, boolean variables of extra data to show
  const mainPostsInnerText = "Continue...";
  const excerptLength = 150;
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;
  //SmallPostList - button text
  const asidePostsInnerText = "Read More";
  //1st Carousel - title, button text
  const carouselTodayRecipesTitle = "Today's Suggestions";
  const carouselTodayRecipesBtnText = "See More";
  //2nd Carousel - title, button text
  const carouselHealthPostsTitle = "Read Articles About Your Health";
  const carouselHealthPostsBtnText = "Read more";
  //Menuboxes (bg image, categories and their groupings)
  const _categories = [
    {
      list: [ ...byCourses ],
      name: "By Course",
      image: differentFoodCoursesImg(),
    },
    {
      list: [ ...byDiets ],
      name: "By Diet",
      image: rawFoodsImg(),
    },
    {
      list: [ ...byIngredients ],
      name: "By Ingredient",
      image: foodIngredientsImg(),
    },
    {
      list: [ ...byOptions ],
      name: "By Option",
      image: foodOnPlatesImg(),
    }
  ];

  //Cloud - title
  const cloudTitle = "Tag Cloud";

   ////** FUNCTIONS ** ////
  //Applies to menus in <Main /> and in <aside />  - accepts a click which selects a recipe category and shows all the subcategories within the selected category.
  const handleOptionBoxesClick = ( e ) => {
    const clickedTemp = _categories.filter( item => item.name === e.target.innerText );
    const clicked = Object.values( clickedTemp[ 0 ].list );
    if ( optionState.length === clicked.length && clicked.filter( item => optionState.includes( item ) ).length === optionState.length ) {
      setOptionState( [ ...byDiets, ...byIngredients, ...byCourses, ...byOptions ] );
    } else {
      setOptionState( clicked );
    }
  };
  //UserChoiceFilter + PageTitle - accepts a click which selects a recipe subcategory and changes all the recipes in <Main /> or in <aside /> to be only those of that category and alters the <pageTitle/> heading.
  const handleUserChoiceFilterClick = ( e ) => {
    setMainCount( 0 );
    const showTheseRecipes = _recipesData.filter( node =>
      node.frontmatter.by_ingredient?.includes( e.target.value ) ||
      node.frontmatter.by_diet?.includes( e.target.value ) ||
      node.frontmatter.by_course?.includes( e.target.value ) ||
      node.frontmatter.by_option?.includes( e.target.value )
    );
    setSelectedCategory( () => makeTitle( e.target.value ) );
    setShownRecipes( () => showTheseRecipes );
  };
    //TagCloud + SmallPostMenu - accepts a click which selects a recipe tag and changes all the recipes in the smallPostMenu to be only those of that tag.
  const handleCloudClick = ( e ) => {
    setAsideCount( 0 );
    const showTheseRecipes = _recipesData.filter( node =>
      node.frontmatter.tags && node.frontmatter.tags.length && node.frontmatter.tags.includes( e.target.value ) );
    setSelectedTag( () => makeTitle( e.target.value ) );
    setShownTagRecipes( () => showTheseRecipes );
  };
  
  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={ 3 } />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size={ 3 } />
      <PageTitle title={ pageTitle } />
      <Spacer size={ 3 } />
      <OptionBoxes
        menu={ _categories }
        onClick={ handleOptionBoxesClick }
      />
      <Spacer size={ 3 } />
      <UserChoiceFilter
        menuData={ optionState }
        selected={ selectedCategory }
        onClick={ handleUserChoiceFilterClick }
      />
      <Spacer size={ 2 } />
      <StandardGrid size={ 1 }>
        <Main size={ 1 }>
          <PageTitle title={ `${ selectedCategory } Recipes` } />
          { mainCount > 0 ?
            <>
              <ul className="sideBorderPad" >
                { shownRecipes.slice( 0, mainCount ).map( item =>
                  <li key={ uuid() }>
                    <Link
                      to={ `recipes/${ item.frontmatter.slug }` }
                      className="accentText"
                      activeClassName="isActive" >
                      { item.frontmatter.title }
                    </Link>
                  </li>
                ) }
              </ul>
              <Button
                innerText={ moveBackButtonText }
                onClick={
                  () => { ( mainCount - mediumPostListNumDisplayedRecipes ) < 0 ? setMainCount( 0 ) : setMainCount( mainCount - mediumPostListNumDisplayedRecipes ) }
                }
              />
            </> : null
          }
          <span
            role="none"
            ref={ topOfShowingRecipesRef } />
          <MediumPostList
            postData={ shownRecipes.slice( mainCount, mainCount + mediumPostListNumDisplayedRecipes ) }
            excerptLength={ excerptLength }
            showDate={ showDate }
            showAuthor={ showAuthor }
            hasPhotographer={ hasPhotographer }
            showSubCategories={ showSubcategories }
            innerText={ mainPostsInnerText }
          />
          {
            mainCount + mediumPostListNumDisplayedRecipes < shownRecipes.length ?
              <>
                <Button
                  innerText={ showRecipeDetails }
                  onClick={ () => setMainCount( mainCount + mediumPostListNumDisplayedRecipes ) } />
                <Spacer size={ 3 } />
                <ul>
                  { shownRecipes.slice( mainCount + mediumPostListNumDisplayedRecipes, mainCount + mediumPostListNumDisplayedRecipes + 25 ).map( item =>
                    <li key={ uuid() }>
                      <Link
                        to={ `/recipes/${ item.frontmatter.slug }` }
                        className="accentText"
                        activeClassName="isActive" >
                        { item.frontmatter.title }
                      </Link>
                    </li>
                  ) }
                </ul>
                <Spacer size={ 3 } />
                <Button
                  innerText={ moveOnButtonText }
                  onClick={ () => setMainCount( mainCount + mediumPostListNumDisplayedRecipes ) } />
              </> : null
          }
        <Spacer size={ 2 } />
        </Main>
        <aside className={ `sideBorderDark ${ wrapperLight }` }>
          <Cloud
            title={ cloudTitle }
            menuData={ recipeTags }
            selected={ selectedTag }
            onClick={ handleCloudClick }
          />
          <Spacer size={ 3 } />
          <section className="sideBorderPad flexColumn bgLight">
            <h3 className="textCenter pad1 shadowText">{ `${ selectedTag } Recipes ` }</h3>
            <Spacer size={ 3 } />
            { asideCount > 0 ?
              <>
                <ul className="pad1">
                  { shownTagRecipes.slice( 0, asideCount ).map( item => <li key={ uuid() }><Link to={ `/recipes${ item.frontmatter.slug }` } className="accentText" activeClassName="isActive" >{ item.frontmatter.title }</Link></li> ) }
                </ul>
                <Spacer size={ 3 } />
                <Button
                  innerText={ moveBackButtonText }
                  onClick={
                    () => { ( asideCount - smallPostListNumDisplayedRecipes ) < 0 ? setAsideCount( 0 ) : setAsideCount( asideCount - smallPostListNumDisplayedRecipes ) }
                  }
                />
                <Spacer size={ 3 } />
              </> : null
            }
            <span role="none" ref={ topOfShowingTagRecipesRef } />
            <SmallPostList
              postData={ shownTagRecipes.slice( 0, smallPostListNumDisplayedRecipes ) }
              onClick={ handleCloudClick }
              innerText={ asidePostsInnerText }
            />
            {
              asideCount + smallPostListNumDisplayedRecipes < shownTagRecipes.length ?
                <>
                  <Button
                    innerText={ showRecipeDetails }
                    onClick={ () => setAsideCount( asideCount + smallPostListNumDisplayedRecipes ) } />
                  <Spacer size={ 3 } />
                  <ul>
                    { shownTagRecipes.slice( asideCount + smallPostListNumDisplayedRecipes, asideCount + smallPostListNumDisplayedRecipes + 10 ).map( item =>
                      <li key={ uuid() }>
                        <Link
                          to={ `/recipes/${ item.frontmatter.slug }` }
                          className="accentText" activeClassName="isActive" >
                          { item.frontmatter.title }
                        </Link>
                      </li>
                    ) }
                  </ul>
                  {
                    asideCount + smallPostListNumDisplayedRecipes + 10 < shownTagRecipes.length ?
                      <>
                        <Spacer size={ 3 } />
                        <Button innerText={ moveOnButtonText } onClick={ () => setAsideCount( asideCount + smallPostListNumDisplayedRecipes ) } />
                      </> : null
                  }
                </> : null
            }
          </section>
          <Spacer size={ 3 } />
        </aside>
      </StandardGrid>
      <Spacer size={ 1 } />
      <Carousel
        title={ carouselTodayRecipesTitle }
        carouselData={ _recipesData }
        innerText={ carouselTodayRecipesBtnText }
      />
      <Spacer size={ 1 } />
      <Carousel
        title={ carouselHealthPostsTitle }
        carouselData={ _healthsData }
        innerText={ carouselHealthPostsBtnText }
        id="health"
          />
    </Layout>
  );
}

export const Head = () => <Seo title="Thunder Island | Recipes" />;

////** PROP TYPES **////
RecipesPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
}



export default RecipesPage;
