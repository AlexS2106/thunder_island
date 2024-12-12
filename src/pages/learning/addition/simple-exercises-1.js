import React, { useState, useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import {
  gameOptions,
  game,
  gameQuestionBox,
  mathsSymbol,
  gameForm,
  evaluationWrapper,
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

  //Breadcrumb logic
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const crumbPaths = crumbs.map((crumb) =>
    crumb.crumbLabel === "addition"
      ? { ...crumb, pathname: "/learning" }
      : crumb,
  );
  ////** USE CALLBACK **////
  const resetGame = useCallback(() => {
    setInputValue("");
    inputRef.current.value = "";
    setAnswerIsCorrect(false);
    setAnswerIsIncorrect(false);
  }, []);

  const generateNums = useCallback(() => {
    const max = Math.pow(10, difficulty) - 1;
    setNums([randomNumber(1, max), randomNumber(1, max)]);
    resetGame();
  }, [difficulty, resetGame]);

  ////**USE EFFECT**////
  //whenever the gamerunning state is set to true new numbers are generated for the addition question
  useEffect(() => {
    if (gameRunning) {
      generateNums();
    }
  }, [difficulty, gameRunning, generateNums]);

  ////** FUNCTIONS **////
  const handleDifficultyChange = (e) => {
    setDifficulty(Number(e.target.value));
    resetGame();
  };

  const handleQuestionsToCompleteChange = (e) => {
    setQuestionsToComplete(Number(e.target.value));
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (difficulty === 1) {
      setInputValue(value);
    } else {
      const newValue = value.slice(-1) + inputValue;
      setInputValue(newValue);
    }
  };

  const handleAnswerSubmission = (e) => {
    e.preventDefault();
    setGameRunning(false);
    const inputValueNumber = Number(inputValue);
    const isAnswerCorrect = nums[0] + nums[1] === inputValueNumber;
    setAnswerIsCorrect(isAnswerCorrect);
    setAnswerIsIncorrect(!isAnswerCorrect);
    setTotalQuestionsCompleted((prev) => prev + 1);

    if (!isAnswerCorrect) {
      setIncorrectAnswersLog((prevLog) => [
        ...prevLog,
        { question: nums, answer: inputValueNumber },
      ]);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (questionsToComplete === totalQuestionsCompleted) {
        setGameFinished(true);
      } else {
        setGameRunning(true);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [totalQuestionsCompleted, questionsToComplete]);

  return (
    <Layout>
      <Spacer size={3} />
      <Breadcrumbs crumbs={crumbPaths} />
      <Spacer size={3} />
      <PageTitle title="Addition" />
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
          <div className={`${gameWrapper} ${marginAuto}`}>
            {!gameFinished ? (
              <>
                <div className={`${gameQuestionBox} ${marginAuto} flexCol`}>
                  <span className={largeFont}>{nums[0]}</span>
                  <span
                    className={`${largeFont} ${mathsSymbol}`}
                    style={{ marginRight: `${difficulty * 2}rem` }}>
                    +
                  </span>
                  <span className={largeFont}>{nums[1]}</span>
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
                    <div className={evaluationWrapper}>
                      {answerIsCorrect && (
                        <span className={isCorrect}>{tick()}</span>
                      )}
                      {answerIsIncorrect && (
                        <span className={isIncorrect}>{cross()}</span>
                      )}
                    </div>
                  </div>
                </div>
                {totalQuestionsCompleted > 0 && (
                  <div className="flexCol">
                    <Spacer size={3} />
                    <p className="textCenter">
                      You got{" "}
                      {totalQuestionsCompleted - incorrectAnswersLog.length} out
                      of {totalQuestionsCompleted}.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="flexCol">
                <p>You finished!</p>
                {incorrectAnswersLog.map((log, index) => (
                  <div key={index}>
                    <p>Question: {log.question.join(" + ")}</p>
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

export const Head = () => <Seo title="Thunder Island | Maths: Addition" />;

SimpleExercises1.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default SimpleExercises1;
