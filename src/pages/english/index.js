import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { v4 as uuid } from 'uuid';

import {
  english,
  clusterGrid,
  clusterImageWrapper,
  clusterTitle,
  clusterExcerpt,
  clusterLevel,
  clusterList
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Layout from "../../components/layout/containers/Layout";
import Main from "../../components/layout/containers/Main";
import PageTitle from "../../components/typography/pageTitle/PageTitle";
import Seo from "../../components/seo/seo";
import Spacer from "../../components/layout/spacing/Spacer";

import { womanThinkingImg, secondImg, questionMarksImg, roadSignPastPresentImg, skyWatchOfDinosaurCometImg, lettersOutOfBookImg, iceBallImg } from "../../support/functions/staticImgFunctions";
import { makeTitle } from "../../support/functions/utility";


////** COMPONENT **////
const EnglishPage = ( { pageContext } ) => { 

  ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  //// *** VARIABLES *** ////
  //PageTitle - text
  const pageTitle = "My English Lessons And Exercises"; 
  //Menu - [] of {title, img, description, CEFR level, link, available lesson links, available exercise links, cluster, mustKnow, next}  
  const availableClusters = [
    {
      title: "Past Perfect",
      image: womanThinkingImg(),
      description: "All about the past perfect. Learn to talk about a past action before another past action.",
      level: "CEFR B1",
      link: "past-perfect/",
      lessons: [ "complete-lesson" ],
      exercises: [],
      cluster: [ "tenses" ],
      mustKnow: [],
      next: [],
    },
    {
      title: "Second Conditional",
      image: secondImg(),
      description: "Learn the conditional for an imagined condition in the present.",
      level: "CEFR B1",
      link: "second-conditional/",
      lessons: [ "complete-lesson" ],
      exercises: [ "exercise-mix-match-1" ],
      cluster: [ "zero-conditional", "third-conditional" ],
      mustKnow: [],
      next: [],
    },
    {
      title: "Tag Questions",
      image: questionMarksImg(),
      description: "Want to make tiny informal questions to add to the end of a sentence? Here's how!",
      level: "CEFR B1",
      link: "tag-questions/",
      lessons: [ "complete-lesson" ],
      exercises: [],
      mustKnow: [],
      next: [],
    },
    {
      title: "Tenses",
      image: roadSignPastPresentImg(),
      description: "Have a look at the different tenses used in the English language.",
      level: "CEFR B1",
      link: "tenses/",
      lessons: [ "overview" ],
      exercises: [],
      cluster: [ "past-perfect" ],
      mustKnow: [],
      next: [],
    },
    {
      title: "Third Conditional",
      image: skyWatchOfDinosaurCometImg(),
      description: "Learn the conditional for an imagined condition in the past.",
      level: "CEFR B2",
      link: "third-conditional/",
      lessons: [ "complete-lesson" ],
      exercises: [ "exercise-mix-match-1" ],
      cluster: [ "zero-conditional", "second-conditional" ],
      mustKnow: [ "past-perfect" ],
      next: [],
    },
    {
      title: "Get And Got",
      image: lettersOutOfBookImg(),
      description: "Make the use of get and got by native English speakers less confusing.",
      level: "CEFR B1",
      link: "using-get/",
      lessons: [ "complete-lesson" ],
      exercises: [ "exercise-get-for-obtain-1" ],
      cluster: [],
      mustKnow: [],
      next: [],
    },
    {
      title: "Zero Conditional",
      image: iceBallImg(),
      description: "Learn the conditional for present facts.",
      level: "CEFR A1",
      link: "zero-conditional/",
      lessons: [ "complete-lesson" ],
      exercises: [ "exercise-mix-match-1" ],
      cluster: [ "second-conditional", "third-conditional" ],
      mustKnow: [],
      next: [],
    },
  ];
  
  ////** FUNCTIONS ** ////
  const clusters = availableClusters.map( cluster => {
    return (
      <div key={ uuid() } className={ clusterGrid }>
        <div className={ clusterImageWrapper}>{ cluster.image }</div>
        <h4 className={ `shadowText ${clusterTitle}` }>{ cluster.title }</h4>
        <p className={ clusterExcerpt }>{ cluster.description }</p>
        <h5 className={ clusterLevel }>{ cluster.level }</h5>
        <ul className={ clusterList }>
          { cluster.lessons.map( lesson => <li key={ uuid() } ><Link to={ `${ cluster.link }${ lesson }` } className="accentText" activeClassName="isActive" >{ makeTitle( lesson ) }</Link></li> ) }
        </ul>
        <ul className={ clusterList }>
          { cluster.exercises.map( exercise => <li key={ uuid() } ><Link to={ `${ cluster.link }${ exercise }` } className=" accentText" activeClassName="isActive">{ makeTitle( exercise ) }</Link></li> ) }
        </ul>
      </div>
    );
  } );

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={ 3 } />
      <Breadcrumbs crumbs={ crumbs } />
      <Spacer size={ 3 } />
      <PageTitle title={ pageTitle } />
      <Spacer size={ 3 } />
      <Main size={ 1 }>
      <div className={ english }>
        { clusters }
      </div>
      </Main>
    </Layout>
  );
}

export const Head = () => <Seo title="Thunder Island | English Grammar" />;

////** PROP TYPES **////
EnglishPage.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default EnglishPage;