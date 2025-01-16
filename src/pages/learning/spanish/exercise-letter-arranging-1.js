import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { game } from "./index.module.css";

import AsideRight from "../../../components/layout/grids/AsideRight";
import Breadcrumbs from "../../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Button from "../../../components/buttons/Button";
import Layout from "../../../components/layout/containers/Layout";
import Main from "../../../components/layout/containers/Main";
import LetterArranging from "../../../components/user-interactive/letter-arranging/Letter-Arranging";
import PageTitle from "../../../components/typography/pageTitle/PageTitle";
import SearchEngineOptimisation from "../../../components/seo/SearchEngineOptimisation";
import Spacer from "../../../components/layout/spacing/Spacer";
import TextEmphasisBoxMinor from "../../../components/typography/text-emphasis/TextEmphasisBoxMinor";

import {
  pocoyo_le_cuento,
  pocoyo_arriba_y_abajo,
} from "../../../support/types/spanish";

import { makeTitle } from "../../../support/functions/utility";

////** COMPONENT **////
const ExerciseLetterArranging1 = ({ pageContext }) => {
  ////** CONTEXT **////
  //Breadcrumb state
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const crumbPaths = crumbs.map((crumb) =>
    crumb.crumbLabel === "spanish"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  //// *** STATE *** ////
  const [userSelectedWordGroups, setUserSelectedWordGroups] = useState([]);
  const [userSelectedSubGroups, setUserSelectedSubGroups] = useState([]);
  const [wordSetCount, setWordSetCount] = useState(0);
  const [currentWordSet, setCurrentWordSet] = useState();
  const [wordSetComplete, setWordSetComplete] = useState(false);

  const memoizedUserSelectedSubGroups = useMemo(
    () => userSelectedSubGroups,
    [userSelectedSubGroups],
  );

  useEffect(() => {
    setCurrentWordSet(memoizedUserSelectedSubGroups[0]?.list[wordSetCount]);
  }, [memoizedUserSelectedSubGroups, wordSetCount]);

  useEffect(() => {
    if (!userSelectedSubGroups || wordSetCount < 1) {
      return;
    } else if (wordSetCount === userSelectedSubGroups[0]?.list.length) {
      setWordSetComplete(true);
    }
  }, [wordSetCount, userSelectedSubGroups, wordSetComplete]);

  //// *** VARIABLES *** ////
  const pageTitle1 = "Spanish Letter Arranging";
  //array containing imported wordgroup objects
  const _allWordGroups = [pocoyo_le_cuento, pocoyo_arriba_y_abajo];

  ////** FUNCTIONS **////
  function handleUserSelection(selected, type) {
    setWordSetCount(0);
    setWordSetComplete(false);
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
  function resetLetterArranging() {
    setWordSetCount((prevCount) => {
      const newCount = prevCount + 1;
      setCurrentWordSet(memoizedUserSelectedSubGroups[0]?.list[newCount]);
      return newCount;
    });
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
                    Match the Spanish to the English.
                  </p>
                </TextEmphasisBoxMinor>
              </>
            ) : null}
            {wordSetComplete && (
              <div>
                <p>You finished!</p>
                <p>Awesome you!</p>
              </div>
            )}
            {currentWordSet && (
              <div key={uuid()}>
                <Spacer size={3} />
                <h6>{makeTitle(userSelectedSubGroups[0].name)}</h6>
                <Spacer size={3} />
                <LetterArranging
                  data={currentWordSet}
                  lang1="english"
                  lang2="spanish"
                  onReset={resetLetterArranging}
                />
              </div>
            )}
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

export const Head = () => (
  <SearchEngineOptimisation title="Thunder Island | Learning: Spanish" />
);

//// ** PROP TYPES ** ////
ExerciseLetterArranging1.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default ExerciseLetterArranging1;
