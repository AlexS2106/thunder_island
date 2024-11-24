import React, { useState, useEffect, createRef } from "react";
import PropTypes from "prop-types";

import {
  gameOptions,
  game,
  gameQuestionBox,
  mathsSymbol,
  gameForm,
  isCorrect,
  isIncorrect,
  marginAuto,
  largeFont,
} from "./index.module.css";

import AsideRight from "../../../components/layout/grids/AsideRight";
import Breadcrumbs from "../../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Dropdown from "../../../components/user-interactive/dropdown/dropdown";
import Layout from "../../../components/layout/containers/Layout";
import Main from "../../../components/layout/containers/Main";
import PageTitle from "../../../components/typography/pageTitle/PageTitle";
import Seo from "../../../components/seo/seo";
import SimpleLink from "../../../components/navigation/links/SimpleLink";
import Spacer from "../../../components/layout/spacing/Spacer";

import { tick, cross } from "../../../support/functions/iconFunctions";
import { randomNumber } from "../../../support/functions/utility";

import {
  completionAmounts,
  additionDifficultyLevels,
} from "../../../support/types/maths";

////** COMPONENT **////
const SimpleExercises1 = ({ pageContext }) => {
  ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const crumbPaths = crumbs.map((crumb) =>
    crumb.crumbLabel === "addition"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  const [settings, setSettings] = useState({
    difficulty: 1,
    toComplete: 5,
    currentlyDone: 0,
    correctAnswers: 0,
  });
  const [nums, setNums] = useState();
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [answerIsIncorrect, setAnswerIsIncorrect] = useState(false);
  const [incorrectAnswersLog, setIncorrectAnswersLog] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    generateNums(settings.difficulty);
  }, [settings.difficulty]);

  useEffect(() => {
    const { difficulty, toComplete, currentlyDone } = settings;
    if (currentlyDone === 0) return;
    const numberValue = Number(inputRef.current.value);

    setTimeout(() => {
      if (answerIsCorrect) {
        setSettings((prevSettings) => ({
          ...prevSettings,
          correctAnswers: prevSettings.correctAnswers + 1,
        }));
      } else if (answerIsIncorrect) {
        setIncorrectAnswersLog((prevLog) => [
          {
            question: [nums],
            answer: numberValue,
          },
          ...prevLog,
        ]);
      } else {
        console.log("Error in the 2nd useEffect of the addition component.");
      }

      toComplete <= currentlyDone ? gameFinished() : generateNums(difficulty);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setAnswerIsCorrect(false);
      setAnswerIsIncorrect(false);
    }, 800);
  }, [settings.currentlyDone]);

  ////** VARIABLES **////
  const inputRef = createRef();
  const pageTitle = "Addition";

  ////** FUNCTIONS **////
  function handleDifficultyChange(e) {
    setSettings({
      ...settings,
      difficulty: Number(e.target.value),
    });
  }
  function handleToCompleteChange(e) {
    setSettings({
      ...settings,
      toComplete: Number(e.target.value),
    });
  }
  function generateNums(difficultySetting) {
    let max;
    switch (difficultySetting) {
      case 1:
        max = 9;
        break;
      case 2:
        max = 99;
        break;
      case 3:
        max = 999;
        break;
      case 4:
        max = 9999;
        break;
      case 5:
        max = 99999;
        break;
    }
    setNums([randomNumber(1, max), randomNumber(1, max)]);
  }
  function handleAnswerSubmission(e) {
    e.preventDefault();
    Number(inputRef.current.value) === nums[0] + nums[1]
      ? setAnswerIsCorrect(true)
      : setAnswerIsIncorrect(true);
    setSettings((prevSettings) => ({
      ...prevSettings,
      currentlyDone: prevSettings.currentlyDone + 1,
    }));
  }

  function gameFinished() {
    setFinished(true);
  }

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
          <div className={`${gameOptions} flexRow`}>
            <Dropdown
              text="difficulty"
              dropdownData={additionDifficultyLevels}
              selectedOption={settings.difficulty}
              onChange={handleDifficultyChange}
            />
            <Dropdown
              text="questions"
              dropdownData={completionAmounts}
              selectedOption={settings.toComplete}
              onChange={handleToCompleteChange}
            />
          </div>
          <Spacer size={3} />
          <div className={`${game} ${marginAuto} flexCol`}>
            {!finished ? (
              <>
                <div className={`${gameQuestionBox}${marginAuto} flexCol`}>
                  <span className={largeFont}>{nums && nums[0]}</span>
                  <span className={`${largeFont} ${mathsSymbol}`}>+</span>
                  <span className={largeFont}>{nums && nums[1]}</span>
                  <div className={`${gameForm} flexRow`}>
                    <form
                      className="flexRow"
                      onSubmit={handleAnswerSubmission}>
                      <label htmlFor="inputforAddition1" />
                      <input
                        type="text"
                        id="inputforAddition1"
                        className={largeFont}
                        ref={inputRef}
                        aria-autocomplete="none"
                      />
                    </form>
                    {answerIsCorrect && (
                      <span className={isCorrect}>{tick()}</span>
                    )}
                    {answerIsIncorrect && (
                      <span className={isIncorrect}>{cross()}</span>
                    )}
                  </div>
                </div>
                {settings.currentlyDone > 0 && (
                  <div className="flexCol">
                    <Spacer size={3} />
                    <p className="textCenter">
                      You got {settings.correctAnswers} out of{" "}
                      {settings.currentlyDone}.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="flexCol">
                <p>You finished!</p>
                {incorrectAnswersLog.map((log) => (
                  <div>
                    <p>{log.question[1] + log.question[2]}</p>
                    <p>You answered: {log.answer}</p>
                    <p>
                      The correct answer is {log.question[0] + log.question[1]}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Spacer size={2} />
        </Main>
        <aside className="sideBorderLight sideBorderPad">
          <h3 className="shadowText">Other Maths Exercises</h3>
          <Spacer size={3} />
          <SimpleLink
            linkTo="/learning/times-tables/simple-exercises-1"
            activeClassName="isActive"
            innerText="Times Tables - Quick Practice."
          />
          <Spacer size={2} />
        </aside>
      </AsideRight>
    </Layout>
  );
};

export const Head = () => <Seo title="Thunder Island | Maths: Times Tables" />;

//// ** PROP TYPES ** ////
SimpleExercises1.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default SimpleExercises1;
