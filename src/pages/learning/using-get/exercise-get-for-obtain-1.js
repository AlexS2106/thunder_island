import React, { useState } from "react";
import PropTypes from "prop-types";

import { label, isCorrect, isIncorrect } from "./index.module.css";

import AsideRight from "../../../components/layout/grids/AsideRight";
import Breadcrumbs from "../../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Button from "../../../components/buttons/Button";
import Layout from "../../../components/layout/containers/Layout";
import Main from "../../../components/layout/containers/Main";
import PageTitle from "../../../components/typography/pageTitle/PageTitle";
import Seo from "../../../components/seo/seo";
import SimpleLink from "../../../components/navigation/links/SimpleLink";
import Spacer from "../../../components/layout/spacing/Spacer";
import TextEmphasisBox from "../../../components/typography/text-emphasis/TextEmphasisBox";
import TextEmphasisBoxMinor from "../../../components/typography/text-emphasis/TextEmphasisBoxMinor";

import { getGotExercise } from "../../../support/types/english";

////** COMPONENT **////
const ExerciseGetForObtain1 = ({ pageContext }) => {
  ////** CONTEXT **////
  //Breadcrumb state
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const crumbPaths = crumbs.map((crumb) =>
    crumb.crumbLabel === "using-get"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  ////** STATE **////
  //State relative to user interaction with the answer inputs
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState(() => [...getGotExercise]);

  const [success, setSuccess] = useState(false);

  ////** VARIABLES **////
  const pageTitle1 = "An Exercise For Using Get.";

  ////** FUNCTIONS **////
  //Manages change in any of the inputs
  const handleOnChange = (e) => {
    const targetAnswer = answers[e.target.id];
    targetAnswer.userAnswer = e.target.value;
    targetAnswer.success = targetAnswer.correctAnswer.includes(
      targetAnswer.userAnswer,
    );
    setAnswers([...answers]);
  };
  //Manages the submit click
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const answerValues = Object.values(answers);
    const fails = answerValues.filter((answer) => !answer.success);
    fails.length ? handleFailure(fails) : handleSuccess();
  };
  //Manages events after the successful completion of all answers.
  const handleSuccess = () => {
    setSuccess(true);
  };
  //Manages events after submission when all answers are not correct.
  const handleFailure = () => {
    setSuccess(false);
  };
  const handleReset = () => {
    setAnswers([...getGotExercise]);
    setSuccess(false);
    setSubmitted(false);
  };
  //Generates each input and its properties.
  const answerInput = (num) => {
    const { id, verb, userAnswer, success } = answers[num];
    const inputClass = success ? isCorrect : isIncorrect;
    const inputStyle =
      submitted && !success ? { backgroundColor: "pink" } : null;

    return (
      <>
        <label
          htmlFor={id}
          className={label}>
          {""}
        </label>
        <input
          type="text"
          id={id}
          value={userAnswer}
          placeholder={verb}
          onChange={handleOnChange}
          className={inputClass}
          style={inputStyle}
        />
      </>
    );
  };

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
          <TextEmphasisBox>
            <p>
              Often <em>get</em> is used instead of alternative words.
            </p>
            <p>The alternative words all mean obtain.</p>
          </TextEmphasisBox>
          <Spacer size={3} />
          <TextEmphasisBoxMinor>
            <p>
              In the text below, find all the times <em>got</em> or <em>get</em>{" "}
              is used and replace them with an alternative word.
            </p>
            <Spacer size={3} />
            <p>
              Choose an alternative meaning from the verbs below, then change
              the verb into the correct tense.
            </p>
            <ol>
              <li>To achieve</li>
              <li>To buy</li>
              <li>To fetch</li>
              <li>To receive</li>
              <li>To catch</li>
              <li>To contract</li>
              <li>To take</li>
            </ol>
          </TextEmphasisBoxMinor>
          <Spacer size={3} />
          <section className="flexCol">
            <h3>Speech</h3>
            <p>
              'When my son {answerInput(0)} his degree, I was so happy because I
              knew he had worked so hard for these last three years to{" "}
              {answerInput(1)} it.'
            </p>
            <p>
              'I had saved up all the money I could and {answerInput(2)} him a
              brand new car as a graduation present. All he had to do was go and{" "}
              {answerInput(3)} it from the car shop. You should've seen his face
              when he {answerInput(4)} it. He was so happy!'
            </p>
            <p>
              'He decided to take a year off after that and drive around Europe
              in his new car. I was a bit worried, I'll be honest with you. But,
              he's a sensible boy; he {answerInput(5)} his cleverness from me,
              so he does. I knew he'd be all right but still, a mother worries!'
            </p>
            <p>
              'He drove South to the seaport and {answerInput(6)} the boat
              across to France. He spent the next two months travelling around
              the continent. Every week, I {answerInput(7)} a postcard from him
              from a different place. He was having such a great time!'
            </p>
            <p>
              'Eventually, I got a phone call. It was him! He told me he was in
              Italy. He said he'd {answerInput(8)} himself an Italian girlfriend
              and been offered a job at some firm in Italy. He's signed the
              contract already, and that company's {answerInput(9)} him now for
              a whole year. I was so happy but sad as well! I miss him, you see?
              Well, in the end, he asked me if I'd {answerInput(10)} a parcel
              from him yet. Well, I hadn't. Obviously! So I said no.'
            </p>
            <p>
              {" "}
              'Well, Mum, {answerInput(11)} yourself to the post office and go{" "}
              {answerInput(12)} it, he said. And that's why I'm here! Can I{" "}
              {answerInput(13)} my parcel?'
            </p>
          </section>
          <Spacer size={3} />
          {!success && (
            <Button
              onClick={handleSubmit}
              innerText="Submit"
            />
          )}
          {submitted && success && (
            <p
              style={{
                fontSize: "2rem",
                textAlign: "center",
                padding: "1rem",
              }}>
              Congratulations, you did it!
            </p>
          )}
          {success && (
            <Button
              onClick={handleReset}
              innerText="Reset"
            />
          )}
          <Spacer size={2} />
        </Main>
        <aside className="sideBorderLight sideBorderPad">
          <h3 className="shadowText">Lessons on Using Get</h3>
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/using-get/complete-lesson"
            activeClassName="isActive"
            innerText="How to Use Get and Got Like a Native."
          />
          <Spacer size={2} />
        </aside>
      </AsideRight>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="Thunder Island | Learning: Get And Got" />
);

//// ** PROP TYPES ** ////
ExerciseGetForObtain1.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default ExerciseGetForObtain1;
