import React, { useState, useEffect, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { game } from "./index.module.css";

import AsideRight from "../../../components/layout/grids/AsideRight";
import Breadcrumbs from "../../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Button from "../../../components/buttons/Button";
import Layout from "../../../components/layout/containers/Layout";
import LinkAsButton from "../../../components/navigation/links/LinkAsButton";
import Main from "../../../components/layout/containers/Main";
import LetterArranging from "../../../components/user-interactive/letter-arranging/Letter-Arranging";
import PageTitle from "../../../components/typography/pageTitle/PageTitle";
import SearchEngineOptimisation from "../../../components/seo/SearchEngineOptimisation";
import Spacer from "../../../components/layout/spacing/Spacer";
import TextEmphasisBoxMinor from "../../../components/typography/text-emphasis/TextEmphasisBoxMinor";

import {
  pocoyo_el_cuento_de_colores,
  pocoyo_arriba_y_abajo,
  pocoyo_dinosaurios,
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
  const [addLink, setAddLink] = useState("");
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
  const pageTitle1 = "Spanish Letter Arranging";
  //array containing imported wordgroup objects
  const _allWordGroups = [
    pocoyo_el_cuento_de_colores,
    pocoyo_arriba_y_abajo,
    pocoyo_dinosaurios,
  ];

  ////** FUNCTIONS **////
  function handleUserSelection(selected, type) {
    resetGameState();

    if (type === "wordgroup") {
      setUserSelectedWordGroups((prev) => {
        // Check if the selected word group is different from the current one
        if (prev.length === 0 || prev[0] !== selected) {
          setAddLink(selected.link); // Update `addLink` only if word group changes
        }
        return prev.includes(selected) ? prev : [selected];
      });
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
  console.log(addLink);
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
              <div key={uuid()}>
                <Spacer size={3} />
                <TextEmphasisBoxMinor>
                  <p className="textCenter">
                    Match the Spanish to the English.
                  </p>
                </TextEmphasisBoxMinor>
                <Spacer size={3} />
                {addLink && (
                  <LinkAsButton
                    innerText="Watch the episode!"
                    linkTo={addLink}
                    linkOut={true}
                  />
                )}
                <Spacer size={3} />
              </div>
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
                    lang2="spanish"
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
  <SearchEngineOptimisation title="Thunder Island | Learning: Spanish" />
);

//// ** PROP TYPES ** ////
ExerciseLetterArranging1.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default ExerciseLetterArranging1;
