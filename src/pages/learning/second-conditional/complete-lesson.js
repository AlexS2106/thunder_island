import React from "react";
import PropTypes from "prop-types";

import { body } from "./index.module.css";

import Arrow from "../../../components/typography/arrow/Arrow";
import AsideRight from "../../../components/layout/grids/AsideRight";
import Breadcrumbs from "../../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import TextEmphasisBox from "../../../components/typography/text-emphasis/TextEmphasisBox";
import TextEmphasisBoxMinor from "../../../components/typography/text-emphasis/TextEmphasisBoxMinor";
import Layout from "../../../components/layout/containers/Layout";
import Main from "../../../components/layout/containers/Main";
import PageTitle from "../../../components/typography/pageTitle/PageTitle";
import SearchEngineOptimisation from "../../../components/seo/SearchEngineOptimisation";
import SimpleLink from "../../../components/navigation/links/SimpleLink";
import Spacer from "../../../components/layout/spacing/Spacer";

////** COMPONENT **////
const AdvancedLesson = ({ pageContext }) => {
  ////** CONTEXT **////
  //Breadcrumb context
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const crumbPaths = crumbs.map((crumb) =>
    crumb.crumbLabel === "second-conditional"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  ////** VARIABLES**////
  const pageTitle1 = "The Second Conditional - A Complete Lesson";

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
          <article className="pad1">
            <section className="flexCol">
              <h3 className="shadowText">What Is the Second Conditional?</h3>
              <Spacer size={3} />
              <TextEmphasisBox>
                <p>
                  An unreal condition and its result in the present or in the
                  future.
                </p>
              </TextEmphasisBox>
            </section>
            <Spacer size={2} />
            <section className="flexCol">
              <h3 className="shadowText">
                What Do I Use the Second Conditional for?
              </h3>
              <Spacer size={3} />
              <TextEmphasisBoxMinor>
                <p>The second conditional is to imagine, dream and wish!</p>
              </TextEmphasisBoxMinor>
              <Spacer size={3} />
              <ul className="pad1">
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To talk about an unreal condition in the present and an
                  imaginary result.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  Use the second conditional To talk about an impossible or
                  unlikely condition and result in the future.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To talk about an imaginary yet possible future situation and
                  often to consider options.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To give advice.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To ask for advice.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  Ask a hypothetical question.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To give a reason why you can't do something.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To make polite requests.
                </li>
              </ul>
            </section>
            <Spacer size={2} />
            <section className="flexCol">
              <h3 className="shadowText">
                How Do I Say the Second Conditional?
              </h3>
              <div className={body}>
                <p>You make the second conditional by using two clauses.</p>
                <Spacer size={4} />
                <p>
                  One clause is the condition clause. It uses <em>if</em> and
                  the past simple to make the condition.
                </p>
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>If + past simple</em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If I walked home
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If I didn't walk home
                    </li>
                  </ul>
                </ul>
                <p>
                  The other clause is the result clause. It uses the subject,{" "}
                  <em>would</em> and the base form of a verb to make the result.
                </p>
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>Subject + would + verb base form</em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I would be there already.
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I wouldn't have seen her.{" "}
                    </li>
                  </ul>
                </ul>
                <Spacer size={4} />
                <p>
                  The condition or the result can go at the beginning of the
                  sentence or the end.
                </p>
                <Spacer size={4} />
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>Condition clause + , + result clause.</em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      <em>If I walked home, I would be there soon.</em>
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      <em>If I said so, I would be there soon.</em>
                    </li>
                  </ul>
                  <Spacer size={4} />
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>Result clause + condition clause.</em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      <em>I would be there already if I walked home.</em>
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      <em>I would be there soon if I wanted to be.</em>
                    </li>
                  </ul>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h5 className="shadowText">Do I Have to Use Would?</h5>
              <div className={body}>
                <p>
                  Above, the example used <em>would</em>. Would is the word most
                  often used for the second conditional but there are two other
                  words you can use. It all depends on what you want to say!
                </p>
                <Spacer size={4} />
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    Use <em>would</em> for wishes and dreams.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If we <em>had</em> the money, I would love to buy that
                      house.
                    </li>
                  </ul>
                  <Spacer size={4} />
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    Use <em>could</em> when the result is not 100% sure.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If we owned a car, I <em>could</em> drive to work.
                    </li>
                  </ul>
                  <Spacer size={4} />
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    Use <em>might</em> when the result is a lot less sure.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If we had the money, I <em>might</em> buy a car.
                    </li>
                  </ul>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h3 className="shadowText">
                Can I See Examples of the Second Conditional?
              </h3>
              <div className={body}>
                <h4 className="shadowText">
                  Use the Second Conditional to Talk about Impossible or
                  Unlikely Future Conditions and their Results.
                </h4>
                <ul className="pad1">
                  <li>If he went to the moon, he'd be happy.</li>
                  <li>If I won the lottery, I would buy a mansion.</li>
                  <li>If they owned the company, they'd do a better job.</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Second Conditional to Talk about Imaginary but
                  Possible Futures.
                </h4>
                <p>
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  This is often used as a way of considering options and
                  choices.
                </p>
                <ul className="pad1">
                  <li>If I joined a gym, I might work out more.</li>
                  <li>
                    We could finish on time if the company employed another
                    person.
                  </li>
                  <li>If they bought cheaper bread, they'd save more money.</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Second Conditional to Talk about an Unreal Condition
                  in the Present and an Imaginary Result.
                </h4>
                <ul className="pad1">
                  <li>If I had a million euros, I might buy that car.</li>
                  <li>He would do better if he worked a bit harder.</li>
                  <li>
                    If she were more careful, she wouldn't break everything.
                  </li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Second Conditional to Offer Advice.
                </h4>
                <ul className="pad1">
                  <li>If I were her, I'd say no.</li>
                  <li>If I were you, I think I might call them.</li>
                  <li>
                    If I were your age, I'd be at a party with my friends.
                  </li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Second Conditional to Ask Advice.
                </h4>
                <ul className="pad1">
                  <li> If you were me, what would you do?</li>
                  <li>If you could go on holiday, would you?</li>
                  <li> If you lived there, what would you do?</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Second Conditional to a Hypothetical Question.
                </h4>
                <ul className="pad1">
                  <li>What would you do if it were always night?</li>
                  <li>
                    If you could change the country, what would you change?
                  </li>
                  <li>If you met the Queen, what might you say?</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Second Conditional to Give Reasons You Cannot Do
                  Something.
                </h4>
                <ul className="pad1">
                  <li>If I had his number, I would call him.</li>
                  <li>If I had the time, I could do something about it.</li>
                  <li>
                    If I thought it would make a difference, I might help.
                  </li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Second Conditional For a Polite Request.
                </h4>
                <ul className="pad1">
                  <li>It'd be great if you introduced us.</li>
                  <li>I'd be really happy if you visited me.</li>
                  <li>She might find it easier if you helped her.</li>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h5 className="shadowText">Something a Little Different!</h5>
              <div className={body}>
                <p>
                  <Arrow
                    type="x1"
                    direction="right"
                    color="dark"
                  />{" "}
                  When talking about imaginary abilities, replace the past
                  simple with <em>could + verb 1</em> like this:
                </p>
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x2"
                      direction="right"
                      color="dark"
                    />{" "}
                    If I could fly, I'd fly to Malta.
                  </li>
                  <li>
                    <Arrow
                      type="x2"
                      direction="right"
                      color="dark"
                    />{" "}
                    If I could play the piano, I'd make beautiful music.
                  </li>
                  <li>
                    <Arrow
                      type="x2"
                      direction="right"
                      color="dark"
                    />{" "}
                    I'd be home by now if I could run faster.
                  </li>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h5 className="shadowText">Something to Remember!</h5>
              <div className={body}>
                <p>
                  <Arrow
                    type="x1"
                    direction="right"
                    color="dark"
                  />{" "}
                  When imagining you are someone else you use the verb{" "}
                  <em>to be</em> like this:
                </p>
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x2"
                      direction="right"
                      color="dark"
                    />{" "}
                    If I were you
                  </li>
                </ul>
                <p>
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  Note that it is <em>I were</em> and not <em>I was</em> for
                  imaginary situations.
                </p>
              </div>
            </section>
          </article>
          <Spacer size={2} />
        </Main>
        <aside className="sideBorderDark sideBorderPad">
          <h3 className="shadowText">Other Lessons</h3>
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/zero-conditional/complete-lesson"
            activeClassName="isActive"
            innerText="The Zero Conditional - A Complete Lesson"
          />
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/third-conditional/complete-lesson"
            activeClassName="isActive"
            innerText="The Third Conditional - A Complete Lesson"
          />
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/tenses/overview"
            activeClassName="isActive"
            innerText="A Simple Overview of the Tenses Used in English."
          />
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/past-perfect/complete-lesson"
            activeClassName="isActive"
            innerText="The Past Perfect - A Complete Lesson"
          />
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/tag-questions/complete-lesson"
            activeClassName="isActive"
            innerText="How To Make Tag Questions"
          />
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/using-get/complete-lesson"
            activeClassName="isActive"
            innerText="How to Use Get and Got Like a Native"
          />
          <Spacer size={3} />
          <h3 className="shadowText">Exercises</h3>
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/second-conditional/exercise-word-match-1"
            activeClassName="isActive"
            innerText="The Second Conditional - A Sentence Matching Exercise."
          />
          <Spacer size={2} />
        </aside>
      </AsideRight>
    </Layout>
  );
};

export const Head = () => (
  <SearchEngineOptimisation title="Thunder Island | Learning: Second Conditional" />
);

////** PROP TYPES **////
AdvancedLesson.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default AdvancedLesson;
