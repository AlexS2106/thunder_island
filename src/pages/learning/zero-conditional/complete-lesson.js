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
    crumb.crumbLabel === "zero-conditional"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  ////** VARIABLES **////
  const pageTitle1 = "The Zero Conditional - A Complete Lesson";

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
              <h3 className="shadowText">What Is the Zero Conditional?</h3>
              <Spacer size={3} />
              <TextEmphasisBox>
                <p>A condition and its result.</p>
                <p>The result will always occur with that action.</p>
              </TextEmphasisBox>
              <Spacer size={4} />
              <TextEmphasisBox>
                <p>
                  The zero conditional is also called the{" "}
                  <em>factual conditional</em>.
                </p>
              </TextEmphasisBox>
            </section>
            <Spacer size={2} />
            <section className="flexCol">
              <h3 className="shadowText">
                What Do I Use the Zero Conditional for?
              </h3>
              <Spacer size={3} />
              <TextEmphasisBoxMinor>
                <p className="textCenter">Real and probable conditions.</p>
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
                  To say scientific facts.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To speak truths.
                </li>
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x2"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    General truths.
                  </li>
                  <li>
                    <Arrow
                      type="x2"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    Personal truths.
                  </li>
                  <li>
                    <Arrow
                      type="x2"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    Habits.
                  </li>
                </ul>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To give instructions.
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
                  To give suggestions.
                </li>
              </ul>
            </section>
            <Spacer size={2} />
            <section className="flexCol">
              <h3 className="shadowText">How Do I Say the Zero Conditional?</h3>
              <div className={body}>
                <p>You say the zero conditional by using two clauses.</p>
                <Spacer size={4} />
                <p>
                  One clause is the condition clause. It uses <em>if</em> and
                  the present tense to make the condition.
                </p>
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>If + present tense</em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If I walk
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If I don't walk
                    </li>
                  </ul>
                </ul>
                <p>
                  The other clause is the result clause. It uses either the
                  present simple or the imperative.
                </p>
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>Subject + present simple</em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I move.
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I don't move.{" "}
                    </li>
                  </ul>
                </ul>
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>Imperative</em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      Move!
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      Don't move!{" "}
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
                      <em>If I walk, I move.</em>
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      <em>If I walk, move!</em>
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      <em>If I don't walk, I don't move.</em>
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      <em>If I don't walk, don't move!</em>
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
                      <em>I move if I walk.</em>
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      <em>Move if I walk!</em>
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      <em>I don't move if I don't walk.</em>
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      <em>Don't move if I don't walk!</em>
                    </li>
                  </ul>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h5 className="shadowText">
                Do I Have to Use <em>If</em>?
              </h5>
              <div className={body}>
                <Spacer size={4} />
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    Use <em>if</em> for a <em>possible</em> action.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If I wash, I am clean.
                    </li>
                  </ul>
                  <Spacer size={4} />
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    Use <em>when</em> for an <em>expected</em> action.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      When I wash, I am clean.
                    </li>
                  </ul>
                  <Spacer size={4} />
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    Use <em>unless</em> for a <em>negative if</em>.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      Unless I wash, I am not clean.
                    </li>
                  </ul>
                  <Spacer size={4} />
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    Use <em>as long as</em> to <em>replace if</em>.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      As long as I wash, I am clean.{" "}
                    </li>
                  </ul>
                  <Spacer size={4} />
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    Use <em>as soon as</em> to <em>replace if</em>.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      As soon as I wash, I am clean.{" "}
                    </li>
                  </ul>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h3 className="shadowText">
                Can I See Examples of the Zero Conditional?
              </h3>
              <div className={body}>
                <h4 className="shadowText">
                  Use the Zero Conditional to Talk About Scientific Facts.
                </h4>
                <ul className="pad1">
                  <li>If water is frozen, it is solid.</li>
                  <li>When you mix red and blue, it makes purple.</li>
                  <li>Water isn't boiling unless it's at 100°C.</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Zero Conditional to State Truths.
                </h4>
                <div className="pad1">
                  <h5 className="shadowText">General Truths.</h5>
                  <ul className="pad1">
                    <li>If you brush your teeth, they are clean.</li>
                    <li>As long as you eat, you aren't hungry.</li>
                    <li>When you look, you see.</li>
                  </ul>
                  <h5 className="shadowText">Personal Truths</h5>
                  <ul className="pad1">
                    <li>If I eat nuts, I am ill.</li>
                    <li>As soon as I lay down, I feel sleepy.</li>
                    <li>If my dad doesn't call, I call him.</li>
                  </ul>
                  <h5 className="shadowText">Habits</h5>
                  <ul className="pad1">
                    <li>As soon as he arrives, he has coffee.</li>
                    <li>When it's lunchtime, we eat.</li>
                    <li>If we go to bed, we sleep.</li>
                  </ul>
                </div>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Zero Condtional to Give Instructions.
                </h4>
                <ul className="pad1">
                  <li>As soon as Bill arrives, call me!</li>
                  <li>Tell me if you are coming.</li>
                  <li>When everyone is ready, go!</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Zero Conditional to Give Advice.
                </h4>
                <ul className="pad1">
                  <li>As soon as you arrive, find the hotel.</li>
                  <li>If you are going into the city, use public transport.</li>
                  <li>Don't go unless you have a ticket.</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Zero Conditional to Make a Suggestion.
                </h4>
                <ul className="pad1">
                  <li>If you have time, change it.</li>
                  <li>Turn it off as soon as it stops.</li>
                  <li>Help her when you can.</li>
                </ul>
              </div>
            </section>
          </article>
          <Spacer size={2} />
        </Main>
        <aside className="sideBorderDark sideBorderPad">
          <h3 className="shadowText">Other Lessons</h3>
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/second-conditional/complete-lesson"
            activeClassName="isActive"
            innerText="The Second Conditional - A Complete Lesson"
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
            innerText="The Past Perfect - A Complete Lesson."
          />
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/tag-questions/complete-lesson"
            activeClassName="isActive"
            innerText="Tag Questions."
          />
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/using-get/complete-lesson"
            activeClassName="isActive"
            innerText="How to Use Get and Got Like a Native."
          />
          <Spacer size={3} />
          <h3 className="shadowText">Exercises</h3>
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/zero-conditional/exercise-word--match-1"
            activeClassName="isActive"
            innerText="The Zero Conditional - A Word Match Exercise."
          />
          <Spacer size={2} />
        </aside>
      </AsideRight>
    </Layout>
  );
};

export const Head = () => (
  <SearchEngineOptimisation title="Thunder Island | Learning: Zero Conditional" />
);

////** PROP TYPES **////
AdvancedLesson.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default AdvancedLesson;
