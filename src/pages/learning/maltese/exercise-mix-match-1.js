import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { game } from "./index.module.css";

import AsideRight from "../../../components/layout/grids/AsideRight";
import Breadcrumbs from "../../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Button from "../../../components/buttons/Button";
import Layout from "../../../components/layout/containers/Layout";
import Main from "../../../components/layout/containers/Main";
import MixNMatch1 from "../../../components/user-interactive/mix-n-match/mix-n-match";
import PageTitle from "../../../components/typography/pageTitle/PageTitle";
import Seo from "../../../components/seo/seo";
import Spacer from "../../../components/layout/spacing/Spacer";
import TextEmphasisBoxMinor from "../../../components/typography/text-emphasis/TextEmphasisBoxMinor";

import { taran_word_groups, numbers } from "../../../support/types/maltese";

import {
  makeTitle,
  redefineEnglishMaltiValuesAsValue1AndValue2ForMixMatchExerciseData,
} from "../../../support/functions/utility";

////** COMPONENT **////
const ExerciseMixMatch1 = ({ pageContext }) => {
  ////** CONTEXT **////
  //Breadcrumb state
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const crumbPaths = crumbs.map((crumb) =>
    crumb.crumbLabel === "maltese"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  //// *** STATE *** ////
  const [userSelectedWordGroups, setUserSelectedWordGroups] = useState([]);
  const [userSelectedSubGroups, setUserSelectedSubGroups] = useState([]);

  //// *** VARIABLES *** ////
  const pageTitle1 = "Maltese Mix N Match";
  //array containing imported wordgroup objects
  const _allWordGroups = [taran_word_groups, numbers];

  ////** FUNCTIONS **////
  function handleUserSelection(selected, type) {
    if (type === "wordgroup") {
      const check = userSelectedWordGroups.some((group) => group === selected);
      if (check) {
        return;
      } else {
        setUserSelectedWordGroups([selected]);
        setUserSelectedSubGroups([]);
      }
    } else if (type === "subgroup") {
      const check = userSelectedSubGroups.some((group) => group === selected);
      if (check) {
        return;
      } else {
        setUserSelectedSubGroups([selected]);
      }
    }
  }

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
          <div className={game}>
            <div>
              {_allWordGroups.map((wordGroup) => (
                <Button
                  key={uuid()}
                  innerText={makeTitle(wordGroup.name)}
                  onClick={() => handleUserSelection(wordGroup, "wordgroup")}
                />
              ))}
            </div>
            {userSelectedWordGroups?.map((wordGroup) => (
              <div key={uuid()}>
                {wordGroup.subWordGroups?.map((subGroup) => (
                  <Button
                    key={uuid()}
                    innerText={makeTitle(subGroup.name)}
                    onClick={() => handleUserSelection(subGroup, "subgroup")}
                  />
                ))}
              </div>
            ))}
            {userSelectedSubGroups ? (
              <>
                <Spacer size={3} />
                <TextEmphasisBoxMinor>
                  <p className="textCenter">
                    Match the Maltese to the English.
                  </p>
                </TextEmphasisBoxMinor>
              </>
            ) : null}
            {userSelectedSubGroups?.map((subGroup) => (
              <div key={uuid()}>
                <Spacer size={3} />
                <h6>{makeTitle(subGroup.name)}</h6>
                <Spacer size={3} />
                <MixNMatch1
                  exerciseData={redefineEnglishMaltiValuesAsValue1AndValue2ForMixMatchExerciseData(
                    subGroup.list,
                  )}
                />
              </div>
            ))}
          </div>
          <Spacer size={2} />
        </Main>
        <aside className="sideBorderLight sideBorderPad">
          <Spacer size={2} />
        </aside>
      </AsideRight>
    </Layout>
  );
};

export const Head = () => <Seo title="Thunder Island | Learning: Maltese" />;

//// ** PROP TYPES ** ////
ExerciseMixMatch1.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default ExerciseMixMatch1;
