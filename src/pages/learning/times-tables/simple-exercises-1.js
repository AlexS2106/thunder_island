import React, { useState, useEffect, createRef } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import {
  gameSelectGrid,
  gameAnswer,
  gameAnswerForm,
  isCorrect,
  isIncorrect,
} from "./index.module.css";

import AsideRight from "../../../components/layout/grids/AsideRight";
import Breadcrumbs from "../../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Button from "../../../components/buttons/Button";
import Layout from "../../../components/layout/containers/Layout";
import Main from "../../../components/layout/containers/Main";
import PageTitle from "../../../components/typography/pageTitle/PageTitle";
import SearchEngineOptimisation from "../../../components/seo/SearchEngineOptimisation";
import SimpleLink from "../../../components/navigation/links/SimpleLink";
import Spacer from "../../../components/layout/spacing/Spacer";
import TextEmphasisBoxMinor from "../../../components/typography/text-emphasis/TextEmphasisBoxMinor";
import TextEmphasisBox from "../../../components/typography/text-emphasis/TextEmphasisBox";

import { randomNumber } from "../../../support/functions/utility";

import { tablesToLearn, completionAmounts } from "../../../support/types/maths";

////** COMPONENT **////
const SimpleExercises1 = ({ pageContext }) => {
  ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const crumbPaths = crumbs.map((crumb) =>
    crumb.crumbLabel === "times-tables"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  const [startingSettings, setStartingSettings] = useState({
    timesTables: [],
    questionsToComplete: 5,
  });

  const [gameState, setGameState] = useState({
    gameIsRunning: false,
    currentQuestion: [],
    answersCompleted: 0,
    gameIsFinished: false,
  });

  const [userState, setUserState] = useState({
    currentAnswerIsRight: false,
    currentAnswerIsWrong: false,
    totalCorrectAnswersGiven: 0,
  });

  useEffect(() => {
    if (gameState.answersCompleted === startingSettings.questionsToComplete) {
      setGameState((prevState) => ({
        ...prevState,
        gameIsFinished: true,
      }));
    } else {
      const num1 = randomNumber(0, 12);
      const num2 = randomNumber(
        Math.min(...startingSettings.timesTables),
        Math.max(...startingSettings.timesTables),
      );
      setGameState((prevState) => ({
        ...prevState,
        currentQuestion: [num1, num2],
      }));
    }
  }, [
    gameState.gameIsRunning,
    gameState.answersCompleted,
    startingSettings.questionsToComplete,
    startingSettings.timesTables,
  ]);

  ////** VARIABLES **////
  const inputRef = createRef();
  const pageTitle1 = "Times Tables Exercises";

  ////** FUNCTIONS ** ////
  //adds user chosen times tables to state
  function handleUserTimesTablesSelectedClick(e) {
    const num = Number(e.target.innerText);
    const updatedTimesTables = [...startingSettings.timesTables, num];
    const uniqueTimesTables = Array.from(new Set(updatedTimesTables));
    setStartingSettings((prevState) => ({
      ...prevState,
      timesTables: uniqueTimesTables,
    }));
  }
  //adds user chosen totalquestions to be answered to state
  function handleUserTotalAnswersToCompleteSelectClick(e) {
    const num = Number(e.target.innerText);
    setStartingSettings((prevState) => ({
      ...prevState,
      questionsToComplete: num,
    }));
  }
  //onclick func begins the game after the timesTables and questionsToComplete are chosen
  function handleBeginGame() {
    setGameState({
      gameIsRunning: true,
      currentQuestion: [],
      answersCompleted: 0,
      gameIsFinished: false,
    });
    setUserState({
      currentAnswerIsRight: false,
      currentAnswerIsWrong: false,
      totalCorrectAnswersGiven: 0,
    });
  }
  //onlick function when user chooses to restart game after a previous completion
  function handleBeginAgain() {
    setStartingSettings({
      timesTables: [],
      questionsToComplete: 5,
    });
    setGameState({
      gameIsRunning: false,
      currentQuestion: [],
      answersCompleted: 0,
      gameIsFinished: false,
    });
    setUserState({
      currentAnswerIsRight: false,
      currentAnswerIsWrong: false,
      totalCorrectAnswersGiven: 0,
    });
  }

  //Manages the user submitted answer
  function onAnswerSubmit(e) {
    e.preventDefault();
    const { currentQuestion, answersCompleted } = gameState;
    let result =
      currentQuestion[0] * currentQuestion[1] ===
      Number(inputRef.current.value);
    if (result) {
      setUserState((prevState) => ({
        ...prevState,
        currentAnswerIsRight: true,
        totalCorrectAnswersGiven: prevState.totalCorrectAnswersGiven + 1,
      }));
    } else {
      setUserState((prevState) => ({
        ...prevState,
        currentAnswerIsWrong: true,
      }));
    }
    setGameState((prevState) => ({
      ...prevState,
      answersCompleted: answersCompleted + 1,
    }));

    inputRef.current.value = "";
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
          <div className="flexCol">
            {gameState.gameIsFinished ? (
              <>
                <TextEmphasisBox>
                  <p>
                    You got {userState.totalCorrectAnswersGiven} out of{" "}
                    {startingSettings.questionsToComplete} questions correct!
                  </p>
                </TextEmphasisBox>
                <Spacer size={3} />
                <Button
                  innerText="Play again?"
                  onClick={handleBeginAgain}
                />
              </>
            ) : !gameState.gameIsRunning ? (
              <>
                <TextEmphasisBoxMinor>
                  <p className="textCenter">
                    Which times tables do you want to practice?
                  </p>
                  <p className="textCenter">
                    {startingSettings.timesTables.map((times) => (
                      <span
                        key={uuidv4()}
                        className="pad1">
                        {times}
                      </span>
                    ))}
                  </p>
                </TextEmphasisBoxMinor>
                <Spacer size={3} />
                <div className={gameSelectGrid}>
                  {tablesToLearn.map((table) => (
                    <Button
                      key={uuidv4()}
                      innerText={String(table)}
                      onClick={handleUserTimesTablesSelectedClick}
                    />
                  ))}
                </div>
                <Spacer size={3} />
                <TextEmphasisBoxMinor>
                  <p className="textCenter">
                    How many questions do you want to answer today?
                  </p>
                  <p className="textCenter">
                    {startingSettings.questionsToComplete}
                  </p>
                </TextEmphasisBoxMinor>
                <Spacer size={3} />
                <div className={gameSelectGrid}>
                  {completionAmounts.map((num) => (
                    <Button
                      key={uuidv4()}
                      innerText={String(num)}
                      onClick={handleUserTotalAnswersToCompleteSelectClick}
                    />
                  ))}
                </div>
                <Spacer size={3} />
                <Button
                  innerText="Ready to Begin?"
                  onClick={handleBeginGame}
                />
              </>
            ) : (
              <div className="flexCol">
                <TextEmphasisBox>
                  <p>
                    Answer {startingSettings.questionsToComplete} questions
                    using the{" "}
                    {startingSettings.timesTables.map((times) => (
                      <span key={uuidv4()}>{times}, </span>
                    ))}{" "}
                    times tables.
                  </p>
                </TextEmphasisBox>
                <Spacer size={2} />
                <TextEmphasisBox>
                  <p>
                    {userState.totalCorrectAnswersGiven} out of{" "}
                    {startingSettings.questionsToComplete}
                  </p>
                </TextEmphasisBox>
                <Spacer size={2} />
                <div className={`${gameAnswer} flexCol`}>
                  <span className="textCenter">
                    {gameState.currentQuestion[0]} x{" "}
                    {gameState.currentQuestion[1]}
                  </span>
                  <Spacer size={3} />
                  <form
                    className={gameAnswerForm}
                    onSubmit={onAnswerSubmit}>
                    <label htmlFor="inputForTimesTables1">{""}</label>
                    <input
                      type="text"
                      id="inputForTimesTables1"
                      ref={inputRef}
                      aria-autocomplete="none"
                      className={
                        userState.currentAnswerIsRight ? isCorrect : isIncorrect
                      }
                    />
                  </form>
                </div>
                <Spacer size={3} />
                {userState.currentAnswerIsWrong && (
                  <TextEmphasisBox>
                    <p>Oh no! That's wrong.</p>
                  </TextEmphasisBox>
                )}
                {userState.currentAnswerIsRight && (
                  <TextEmphasisBox>
                    <p>Well done!</p>
                  </TextEmphasisBox>
                )}
              </div>
            )}
          </div>
          <Spacer size={2} />
        </Main>
        <aside className="sideBorderLight sideBorderPad">
          <h3 className="shadowText">Other Maths Exercises</h3>
          <Spacer size={3} />
          <SimpleLink
            linkTo="/learning/addition/simple-exercises-1"
            activeClassName="isActive"
            innerText=""
          />
          <Spacer size={2} />
        </aside>
      </AsideRight>
    </Layout>
  );
};

export const Head = () => (
  <SearchEngineOptimisation title="Thunder Island | Maths: Times Tables" />
);

//// ** PROP TYPES ** ////
SimpleExercises1.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default SimpleExercises1;
