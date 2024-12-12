import React, { useState, useEffect, useRef, useCallback } from "react";
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
  const inputRef = useRef(null);
  const [gameRunning, setGameRunning] = useState(false);
  const [difficulty, setDifficulty] = useState(1);
  const [questionsToComplete, setQuestionsToComplete] = useState(5);
  const [nums, setNums] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [totalQuestionsCompleted, setTotalQuestionsCompleted] = useState(0);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [answerIsIncorrect, setAnswerIsIncorrect] = useState(false);
  const [incorrectAnswersLog, setIncorrectAnswersLog] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);

  ////** FUNCTIONS **////
  //Breadcrumb logic
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
  //Alter difficulty - user controlled
  function handleDifficultyChange(e) {
    setDifficulty(Number(e.target.value));
    setInputValue("");
    inputRef.current = "";
  }
  //Alter the number of question to be asked - user controlled
  function handleQuestionsToCompleteChange(e) {
    setQuestionsToComplete(Number(e.target.value));
  }
  //genreates 2 random numbers dependent on the difficulty level
  function generateNums() {
    const max = Math.pow(10, difficulty) - 1;
    setNums([randomNumber(1, max), randomNumber(1, max)]);
  }
  //ensures the number inputted aligns beneath the numbers added, i.e. from right to left
  function handleInputChange(e) {
    const value = e.target.value;
    if (difficulty === 1) {
      setInputValue(value);
    } else {
      setInputValue((prevValue) => {
        const newValue = value.charAt(value.length - 1) + prevValue;
        return newValue;
      });
    }
  }
  //game logic once the addition number is entered - use controlled
  function handleAnswerSubmission(e) {
    e.preventDefault();
    setGameRunning(false);
    setTotalQuestionsCompleted((prev) => prev + 1);
    analyseAnswer(nums, Number(inputRef.current.value));
  }
  //checks if the answer is correct or incorrect
  function analyseAnswer(nums, inputValue) {
    if (nums[0] + nums[1] === inputValue) {
      setAnswerIsCorrect(true);
    } else {
      setAnswerIsIncorrect(true);
      setIncorrectAnswersLog((prevLog) => [
        {
          question: nums,
          answer: inputValue,
        },
        ...prevLog,
      ]);
    }
    checkGameEnd();
  }

  function checkGameEnd() {
    questionsToComplete === totalQuestionsCompleted
      ? gameFinishes()
      : gameContinues();
  }

  function gameFinishes() {
    setGameRunning(true);
    setGameFinished(true);
  }

  function gameContinues() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setAnswerIsCorrect(false);
    setAnswerIsIncorrect(false);
    setGameRunning(true);
    generateNums();
  }

  ////** USE EFFECT **////
  // useEffect(() => {
  //   const timer = setTimeout(() => {}, 800);
  //   return () => clearTimeout(timer);
  // }, [gameFinishes, gameContinues]);

  ////** VARIABLES **////
  const pageTitle = "Addition";

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
              selectedOption={difficulty}
              onChange={handleDifficultyChange}
            />
            <Dropdown
              text="questions"
              dropdownData={completionAmounts}
              selectedOption={questionsToComplete}
              onChange={handleQuestionsToCompleteChange}
            />
          </div>
          <Spacer size={3} />
          <div className={`${game} ${marginAuto} flexCol`}>
            {!gameFinished ? (
              <>
                <div className={`${gameQuestionBox} ${marginAuto} flexCol`}>
                  <span className={largeFont}>{nums && nums[0]}</span>
                  <span
                    className={`${largeFont} ${mathsSymbol}`}
                    style={{ marginRight: `${difficulty * 2}rem` }}>
                    +
                  </span>
                  <span className={largeFont}>{nums && nums[1]}</span>
                  <div className={`${gameForm} flexRow`}>
                    <form
                      className="flexRow"
                      onSubmit={handleAnswerSubmission}>
                      <label
                        htmlFor="inputforAddition1"
                        aria-label="Answer input field">
                        {""}
                      </label>
                      <input
                        type="text"
                        id="inputforAddition1"
                        className={largeFont}
                        style={{
                          width: `${difficulty * 2 + 2}rem`,
                        }}
                        onChange={handleInputChange}
                        ref={inputRef}
                        value={inputValue}
                        aria-autocomplete="none"
                        dir={difficulty > 1 ? "ltr" : "rtl"}
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
                {totalQuestionsCompleted > 0 && (
                  <div className="flexCol">
                    <Spacer size={3} />
                    <p className="textCenter">
                      You got{" "}
                      {incorrectAnswersLog.length - totalQuestionsCompleted} out
                      of {totalQuestionsCompleted}.
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
