import React, { useState, useEffect, createRef } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import {
  gameWrapper,
  game,
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
import Seo from "../../../components/seo/seo";
import SimpleLink from "../../../components/navigation/links/SimpleLink";
import Spacer from "../../../components/layout/spacing/Spacer";
import TextEmphasisBoxMinor from "../../../components/typography/text-emphasis/TextEmphasisBoxMinor";
import TextEmphasisBox from "../../../components/typography/text-emphasis/TextEmphasisBox";

import {
  tablesToLearn,
  completionAmounts,
} from "../../../support/types/mathsExercises";
import { randomNumber } from "../../../support/functions/utility";

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
          pathname: "/english",
        }
      : crumb,
  );

  let [isFinished, setIsFinished] = useState(false);
  const [timesTables, setTimesTables] = useState([]);
  const [questionsToComplete, setQuestionsToComplete] = useState();
  let [gameRunning, setGameRunnning] = useState(false);
  let [isRight, setIsRight] = useState(false);
  let [isWrong, setIsWrong] = useState(false);
  let [question, setQuestion] = useState([]);
  let [answersDone, setAnswersDone] = useState(0);
  let [correctAnswers, setCorrectAnswers] = useState();

  useEffect(() => {
    if (gameRunning && answersDone === questionsToComplete) {
      setIsFinished(true);
    }
  }, [answersDone, questionsToComplete, gameRunning]);

  const inputRef = createRef();

  ////** VARIABLES **////
  //PageTitle
  const pageTitle = "Times Tables Exercises";
  const tables = tablesToLearn;
  const totalAnswersToCompleteOptions = completionAmounts;

  ////** FUNCTIONS ** ////
  //times tables from imported indices variable
  const generateSelectTimesTablesGrid = (
    <div className={gameSelectGrid}>
      {tables.map((table) => (
        <Button
          key={uuidv4()}
          innerText={String(table)}
          onClick={handleUserTimesTablesSelectedClick}
        />
      ))}
    </div>
  );
  //questions asked options from an imported indices variable
  const generateTotalAnswersToCompleteOptions = (
    <div className={gameSelectGrid}>
      {totalAnswersToCompleteOptions.map((num) => (
        <Button
          key={uuidv4()}
          innerText={String(num)}
          onClick={handleUserTotalAnswersToCompleteSelectClick}
        />
      ))}
    </div>
  );
  //ui on pregame
  const generatePreGame = (
    <>
      <TextEmphasisBoxMinor>
        <p className="textCenter">
          Which times tables do you want to practice?
        </p>
        <p className="textCenter">
          {timesTables.map((times) => (
            <span
              key={uuidv4()}
              className="pad1">
              {times}
            </span>
          ))}
        </p>
      </TextEmphasisBoxMinor>
      <Spacer size={3} />
      {generateSelectTimesTablesGrid}
      <Spacer size={3} />
      <TextEmphasisBoxMinor>
        <p className="textCenter">
          How many questions do you want to answer today?
        </p>
        <p className="textCenter">{questionsToComplete}</p>
      </TextEmphasisBoxMinor>
      <Spacer size={3} />
      {generateTotalAnswersToCompleteOptions}
      <Spacer size={3} />
      <Button
        innerText="Ready to Begin?"
        onClick={handleBeginGame}
      />
    </>
  );
  //ui during play
  const generateGame = (
    <div className={game}>
      <TextEmphasisBox>
        <p>
          Answer {questionsToComplete} questions using the{" "}
          {timesTables.map((times) => (
            <span key={uuidv4()}>{times}, </span>
          ))}{" "}
          times tables.
        </p>
      </TextEmphasisBox>
      <Spacer size={2} />
      <TextEmphasisBox>
        <p>
          {correctAnswers} out of {questionsToComplete}
        </p>
      </TextEmphasisBox>
      <Spacer size={2} />
      <div className={gameAnswer}>
        <span className="textCenter">
          {question[0]} x {question[1]}
        </span>
        <Spacer size={3} />
        <form
          className={gameAnswerForm}
          onSubmit={onAnswerSubmit}>
          <label htmlFor="answerInput">
            <input
              type="text"
              id="answerInput"
              ref={inputRef}
              aria-autocomplete="none"
              className={isRight ? isCorrect : isIncorrect}
            />
          </label>
        </form>
      </div>
      <Spacer size={3} />
      {isWrong ? (
        <TextEmphasisBox>
          <p>Oh no! That's wrong.</p>
        </TextEmphasisBox>
      ) : (
        <TextEmphasisBox>
          {isRight ? <p>Well done!</p> : <p>Try this!</p>}
        </TextEmphasisBox>
      )}
    </div>
  );
  //ui when all questions are answered
  const generatePostGame = (
    <>
      <TextEmphasisBox>
        <p>
          You got {correctAnswers} out of {questionsToComplete} questions
          correct!
        </p>
      </TextEmphasisBox>
      <Spacer size={3} />
      <Button
        innerText="Play again?"
        onClick={handleBeginAgain}
      />
    </>
  );

  //adds user chosen times tables to state
  function handleUserTimesTablesSelectedClick(e) {
    const num = Number(e.target.innerText);
    const _timesTables = [...timesTables, num];
    const __timesTables = Array.from(new Set(_timesTables));
    setTimesTables([...__timesTables]);
  }
  //adds user chosen totalquestions to be answered to state
  function handleUserTotalAnswersToCompleteSelectClick(e) {
    const num = Number(e.target.innerText);
    setQuestionsToComplete(num);
  }
  //onclick func begins the game after the timesTables and questionsToComplete are chosen
  function handleBeginGame() {
    setGameRunnning(true);
    setAnswersDone(0);
    setCorrectAnswers(0);
    setIsRight(false);
    setIsWrong(false);
    setQuestion([]);
    askQuestion();
  }
  //onlick function when user chooses to restart game after a previous completion
  function handleBeginAgain() {
    setIsFinished(false);
    setGameRunnning(false);
    setTimesTables([]);
    setQuestionsToComplete();
    setIsRight(false);
    setIsWrong(false);
    setAnswersDone();
    setCorrectAnswers();
  }
  //generates a question
  function askQuestion() {
    setIsRight(false);
    setIsWrong(false);
    const num1 = randomNumber(0, 12);
    const num2 = randomNumber(
      Math.min(...timesTables),
      Math.max(...timesTables),
    );
    setQuestion([num1, num2]);
  }
  //Manages the user submitted answer
  function onAnswerSubmit(e) {
    e.preventDefault();

    let result = question[0] * question[1] === Number(inputRef.current.value);
    if (result) {
      setIsRight(true);
      setCorrectAnswers((prevCount) => prevCount + 1);
    } else {
      setIsWrong(true);
    }

    setAnswersDone((prevCount) => prevCount + 1);
    checkFinished();
  }
  //see if all questions are answered and ask another question or finish the game
  function checkFinished() {
    inputRef.current.value = "";
    if (isFinished) {
      setGameRunnning(false);
    } else {
      askQuestion();
    }
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
          <div className={gameWrapper}>
            {isFinished
              ? generatePostGame
              : !gameRunning
                ? generatePreGame
                : generateGame}
          </div>
          <Spacer size={2} />
        </Main>
        <aside className="sideBorderLight sideBorderPad">
          <h3 className="shadowText">Other Maths Lessons To Be Added</h3>
          <SimpleLink
            linkTo="/english/zero-conditional/complete-lesson"
            activeClassName="isActive"
            innerText="The Zero Conditional - A Complete Lesson"
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
