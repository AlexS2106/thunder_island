import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { v4 as uuid } from "uuid";

import {
  pageGrid,
  groupGrid,
  groupImageWrapper,
  groupTitle,
  groupExcerpt,
  groupLevel,
  groupList,
} from "./index.module.css";

import Breadcrumbs from "../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Layout from "../../components/layout/containers/Layout";
import Main from "../../components/layout/containers/Main";
import PageTitle from "../../components/typography/pageTitle/PageTitle";
import SearchEngineOptimisation from "../../components/seo/SearchEngineOptimisation";
import Spacer from "../../components/layout/spacing/Spacer";

import { makeTitle } from "../../support/functions/utility";

import { learningGroups } from "../../support/types/learning";

////** COMPONENT **////
const LearningPage = ({ pageContext }) => {
  ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ///** VARIABLES **////
  const pageTitle1 = "Lessons And Exercises";

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={3} />
      <Breadcrumbs crumbs={crumbs} />
      <Spacer size={3} />
      <PageTitle title={pageTitle1} />
      <Spacer size={3} />
      <Main size={1}>
        <div className={pageGrid}>
          {learningGroups.map((group) => (
            <div
              key={uuid()}
              className={groupGrid}>
              <div className={groupImageWrapper}>{group.image}</div>
              <h4 className={`shadowText ${groupTitle}`}>{group.title}</h4>
              <p className={groupExcerpt}>{group.description}</p>
              <h5 className={groupLevel}>{group.level}</h5>
              <ul className={groupList}>
                {group.lessons.map((lesson) => (
                  <li key={uuid()}>
                    <Link
                      to={`${group.link}${lesson}`}
                      className="accentText"
                      activeClassName="isActive">
                      {makeTitle(lesson)}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className={groupList}>
                {group.exercises.map((exercise) => (
                  <li key={uuid()}>
                    <Link
                      to={`${group.link}${exercise}`}
                      className="accentText"
                      activeClassName="isActive">
                      {makeTitle(exercise)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Main>
    </Layout>
  );
};

export const Head = () => (
  <SearchEngineOptimisation title="Thunder Island | Learning" />
);

////** PROP TYPES **////
LearningPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default LearningPage;
