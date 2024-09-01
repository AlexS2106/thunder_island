import React from "react";
import PropTypes from "prop-types";

import AsideRight from "../../../components/layout/grids/AsideRight";
import Breadcrumbs from "../../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Layout from "../../../components/layout/containers/Layout";
import Main from "../../../components/layout/containers/Main";
import MixNMatch1 from "../../../components/user-interactive/mix-n-match/mix-n-match";
import PageTitle from "../../../components/typography/pageTitle/PageTitle";
import Seo from "../../../components/seo/seo";
import SimpleLink from "../../../components/navigation/links/SimpleLink";
import Spacer from "../../../components/layout/spacing/Spacer";
import TextEmphasisBoxMinor from "../../../components/typography/text-emphasis/TextEmphasisBoxMinor";

import { thirdConditional1 } from "../../../support/types/english";

////** COMPONENT **////
const ExerciseMixMatch1 = ({ pageContext }) => {
  ////** CONTEXT **////
  //Breadcrumb state
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const crumbPaths = crumbs.map((crumb) =>
    crumb.crumbLabel === "third-conditional"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  const exerciseAnswers = thirdConditional1;

  ////** VARIABLES **////
  //PageTitle
  const pageTitle = "An Exercise Using The Third Conditional.";

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={3} />
      <Breadcrumbs crumbs={crumbPaths} />
      <Spacer size={3} />
      <PageTitle title={pageTitle} />
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
          <MixNMatch1 exerciseData={exerciseAnswers} />
          <Spacer size={2} />
        </Main>
        <aside className="sideBorderLight sideBorderPad">
          <h3 className="shadowText">Lessons on Using Get</h3>
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/using-get/complete-lesson"
            activeClassName="isActive"
            innerText="A complete Lesson On Using Get"
          />
          <Spacer size={3} />
          <h3 className="shadowText">Exercises</h3>
          <Spacer size={4} />
          <SimpleLink
            linkTo="learning/third-conditional/exercie-mix-match-1"
            activeClassName="isActive"
            innerText="The Third Conditional - A Mix 'N' Match Exercise"
          />
          <Spacer size={2} />
        </aside>
      </AsideRight>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="Thunder Island | Learning: Third Conditional" />
);

//// *** PROP TYPES *** ////
ExerciseMixMatch1.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default ExerciseMixMatch1;
