import React, { useState, useEffect, useMemo, useRef } from "react";
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

import { taran_word_groups, numbers } from "../../../support/types/maltese";

import { makeTitle } from "../../../support/functions/utility";

////** COMPONENT **////
const ExerciseLetterArranging1 = ({ pageContext }) => {
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
  const [wordSetCount, setWordSetCount] = useState(0);
  const [currentWordSet, setCurrentWordSet] = useState();
  const [wordSetComplete, setWordSetComplete] = useState(false);
  const shuffledWordsRef = useRef([]);

  const memoizedUserSelectedSubGroups = useMemo(
    () => userSelectedSubGroups,
    [userSelectedSubGroups],
  );

  useEffect(() => {
    if (
      memoizedUserSelectedSubGroups &&
      memoizedUserSelectedSubGroups.length > 0 &&
      memoizedUserSelectedSubGroups[0]?.list
    ) {
      const words = memoizedUserSelectedSubGroups[0].list;
      shuffledWordsRef.current = shuffleArray(words);
      setCurrentWordSet(shuffledWordsRef.current[0] || null);
    }
  }, [memoizedUserSelectedSubGroups]);

  useEffect(() => {
    if (wordSetCount === 0) {
      setWordSetComplete(false);
    } else if (
      shuffledWordsRef.current &&
      wordSetCount < shuffledWordsRef.current.length
    ) {
      setCurrentWordSet(shuffledWordsRef.current[wordSetCount] || null);
    } else {
      setWordSetComplete(true);
    }
  }, [wordSetCount]);

  //// *** VARIABLES *** ////
  const pageTitle1 = "Maltese Letter Arranging";
  //array containing imported wordgroup objects
  const _allWordGroups = [taran_word_groups, numbers];

  ////** FUNCTIONS **////
  function handleUserSelection(selected, type) {
    resetGameState();

    if (type === "wordgroup") {
      setUserSelectedWordGroups((prev) =>
        prev.includes(selected) ? prev : [selected],
      );
      setUserSelectedSubGroups([]);
    } else if (type === "subgroup") {
      setUserSelectedSubGroups((prev) =>
        prev.includes(selected) ? prev : [selected],
      );
    }
  }

  function resetGameState() {
    setWordSetCount(0);
    setWordSetComplete(false);
    setCurrentWordSet(null);
    shuffledWordsRef.current = [];
  }

  function resetLetterArranging() {
    setWordSetCount((prevCount) => prevCount + 1);
  }
  function shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
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
            {wordSetComplete ? (
              <div>
                <p>You finished!</p>
                <p>Awesome you!</p>
              </div>
            ) : (
              currentWordSet && (
                <div key={uuid()}>
                  <Spacer size={3} />
                  <h6>
                    {userSelectedSubGroups[0]?.name &&
                      makeTitle(userSelectedSubGroups[0].name)}
                  </h6>
                  <Spacer size={3} />
                  <LetterArranging
                    data={currentWordSet}
                    lang1="english"
                    lang2="malti"
                    onReset={resetLetterArranging}
                  />
                </div>
              )
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
  <SearchEngineOptimisation title="Thunder Island | Learning: Maltese" />
);

//// ** PROP TYPES ** ////
ExerciseLetterArranging1.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default ExerciseLetterArranging1;
