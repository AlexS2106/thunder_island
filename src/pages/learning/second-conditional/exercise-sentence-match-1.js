import React from "react";
import PropTypes from "prop-types";

import AsideRight from "../../../components/layout/grids/AsideRight";
import Breadcrumbs from "../../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Layout from "../../../components/layout/containers/Layout";
import Main from "../../../components/layout/containers/Main";
import WordMatch1 from "../../../components/user-interactive/word-match/Word-Match";
import PageTitle from "../../../components/typography/pageTitle/PageTitle";
import SearchEngineOptimisation from "../../../components/seo/SearchEngineOptimisation";
import SimpleLink from "../../../components/navigation/links/SimpleLink";
import Spacer from "../../../components/layout/spacing/Spacer";
import TextEmphasisBoxMinor from "../../../components/typography/text-emphasis/TextEmphasisBoxMinor";

import { secondConditional1 } from "../../../support/types/english";

////** COMPONENT **////
const ExerciseSentenceMatch1 = ({ pageContext }) => {
  ////** CONTEXT **////
  //Breadcrumb state
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const crumbPaths = crumbs.map((crumb) =>
    crumb.crumbLabel === "second-conditional"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  ////** VARIABLES **////
  const pageTitle1 = "An Exercise Using The Second Conditional.";

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={3} />
      <Breadcrumbs crumbs={crumbPaths} />
      <Spacer size={3} />
      <PageTitle title={pageTitle1} />
      <Spacer size={3} />
      <AsideRight>
        <Main size={1}>
          <Spacer size={3} />
          <TextEmphasisBoxMinor>
            <p className="textCenter">
              Match the if clause on the left to the result clause on the right.
            </p>
          </TextEmphasisBoxMinor>
          <Spacer size={2} />
          <WordMatch1 exerciseData={secondConditional1} />
          <Spacer size={2} />
        </Main>
        <aside className="sideBorderLight sideBorderPad">
          <h3 className="shadowText">Lessons on The Second Conditional</h3>
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/second-conditional/complete-lesson"
            activeClassName="isActive"
            innerText="The Second Conditional - A Complete Lesson"
          />
          <Spacer size={2} />
        </aside>
      </AsideRight>
    </Layout>
  );
};

export const Head = () => (
  <SearchEngineOptimisation title="Thunder Island | Learning: Second Conditional" />
);

//// *** PROP TYPES *** ////
ExerciseSentenceMatch1.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default ExerciseSentenceMatch1;
