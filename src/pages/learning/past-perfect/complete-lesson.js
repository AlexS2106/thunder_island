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
import Seo from "../../../components/seo/seo";
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
    crumb.crumbLabel === "past-perfect"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  ////** VARIABLES **////
  //PageTitle
  const pageTitle = "The Past Perfect - A Complete Lesson";

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
          <article className="pad1">
            <section className="flexCol">
              <h3 className="shadowText">What Is the Past Perfect?</h3>
              <Spacer size={3} />
              <TextEmphasisBox>
                <p>
                  The past perfect is an event that happened <em>before</em> a
                  second event.
                </p>
                <Spacer size={4} />
                <p>Both the first and second events were in the past.</p>
                <Spacer size={4} />
                <p>
                  It is the <em>first</em> event that is the past perfect - it
                  can be an action or something that happened.
                </p>
                <Spacer size={4} />
                <p style={{ textAlign: "left", paddingLeft: "1rem" }}>
                  The second event can be:
                </p>
                <ul className="pad1">
                  <li>
                    {" "}
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    an action said in any of the past tenses.
                  </li>
                  <li>
                    {" "}
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    a time.
                  </li>
                  <li>
                    {" "}
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    sometimes, it is not said at all.
                  </li>
                </ul>
              </TextEmphasisBox>
            </section>
            <Spacer size={2} />
            <section className="flexCol">
              <h3 className="shadowText">
                What Do I Use the Past Perfect for?
              </h3>
              <Spacer size={3} />
              <TextEmphasisBoxMinor>
                <p>The Past Perfect Is the Narrative Tense.</p>
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
                  Use it to tell a story about the past.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  Use it for description.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  Use it to talk about events but <em>not</em> in the order they
                  happened
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  Use the past perfect for expressing regret.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  Use the past perfect for reporting an event.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  The Third Conditional Uses the Past Perfect.
                </li>
              </ul>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h3 className="shadowText">How Do I Say the Past Perfect?</h3>
              <div className={body}>
                <p>
                  You use the past participle, often known as past participle.
                </p>
                <Spacer size={4} />
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>
                      Subject + had /hadn't + past participle, second event.
                    </em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I had walked home by the time he arrived.
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I hadn't walked home by the time he arrived.
                    </li>
                  </ul>
                  <Spacer size={4} />
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>
                      Second event + subject + had / hadn't + past participle.
                    </em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      By the time he arrived, I had walked home.
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      By the time he arrived, I hadn't walked home.
                    </li>
                  </ul>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h5 className="shadowText">Something to Remember!</h5>
              <div className={body}>
                <h6>Contractions</h6>
                <ul className="pad1">
                  <li>
                    I had{" "}
                    <Arrow
                      type="x2"
                      direction="right"
                      color="dark"
                    />{" "}
                    I'd
                  </li>
                  <ul>
                    <li>
                      I had walked home by the time it was dark.{" "}
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I'd walked home by the time it was dark.
                    </li>
                  </ul>
                  <li>
                    I had not{" "}
                    <Arrow
                      type="x2"
                      direction="right"
                      color="dark"
                    />{" "}
                    I hadn't
                  </li>
                  <ul>
                    <li>
                      I had not walked home by the time he arrived.{" "}
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I hadn't walked home by the time he arrived.
                    </li>
                  </ul>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h3 className="shadowText">
                Can I See Examples of the Past Perfect?
              </h3>
              <div className={body}>
                <h4 className="shadowText">
                  Using the Past Perfect to Tell a Story About the Past.{" "}
                </h4>
                <ul className="pad1">
                  <li>
                    I'd never been abroad before, but then I moved to Australia.
                  </li>
                  <li>The boat had sailed by the time he reached the docks.</li>
                  <li>They had met a long time ago.</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Using the past perfect to describe something that happened.
                </h4>
                <ul className="pad1">
                  <li>
                    The rain still hadn't stopped by the time we reached the top
                    of the mountain.
                  </li>
                  <li>It had been a long, hot summer.</li>
                  <li>He'd walked all day.</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Using the Past Perfect to Talk about Past Events but{" "}
                  <em>not</em> in the Order They Happened.
                </h4>
                <ul className="pad1">
                  <li>
                    By the time I reached the shop, I had walked a long way.
                  </li>
                  <li>I called his office, but he had already left.</li>
                  <li>It was June, but it still hadn't rained.</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Using the Past Perfect to Report an Event.
                </h4>
                <ul className="pad1">
                  <li>
                    I had stood for about five minutes when the robber came in.
                  </li>
                  <li>I'd decided to tell the truth before I came here.</li>
                  <li>
                    She'd started working at 8 when she was the first one there.
                  </li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Past Perfect to Report on Things Said.
                </h4>
                <ul className="pad1">
                  <li>
                    My teacher had told me to draw, but I couldn't find my
                    pencil.
                  </li>
                  <li>He told me he'd gone shopping.</li>
                  <li>I said I hadn't reported it yet.</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Past Perfect to Express Regret.
                </h4>
                <ul className="pad1">
                  <li>I wish I'd tried harder at school.</li>
                  <li>I wish I'd lived a healthier life.</li>
                  <li>I wish I had spent more time with my parents.</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">
                  Use the Past Perfect for the Third Conditional.
                </h4>
                <ul className="pad1">
                  <li>
                    If my alarm had gone off, I wouldn't have been late to work.
                  </li>
                  <li>
                    If there hadn't been so much traffic, we wouldn't have
                    missed our flight.
                  </li>
                  <li>
                    If he'd studied harder, he would have passed the exam.
                  </li>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h5 className="shadowText">
                Adverbs and Adverbials of Time Often Used to Add Meaning to a
                Past Perfect Event.
              </h5>
              <div className={body}>
                <ul className="pad1">
                  <li>
                    <h6>Before</h6>
                  </li>
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    <em>Any time before the past perfect event.</em>
                  </li>
                  <ul className="pad1">
                    <li>She'd never been there before.</li>
                    <li>
                      The policeman had arrested the thief before you got here.
                    </li>
                    <li>They'd met before</li>.
                  </ul>
                </ul>
                <ul className="pad1">
                  <li>
                    <h6>Already</h6>
                  </li>
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    <em>
                      Before, but not long before, the past perfect event.
                    </em>
                  </li>
                  <ul className="pad1">
                    <li>
                      The boat had already sailed by the time he got to the
                      docks.
                    </li>
                    <li>I had already finished before that moment.</li>
                    <li>By then, we'd already completed the project.</li>
                  </ul>
                </ul>
                <ul className="pad1">
                  <li>
                    <h6>Still</h6>
                  </li>
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    <em>Before and right up to the past perfect event.</em>
                  </li>
                  <ul className="pad1">
                    <li>It still hadn't rained by June.</li>
                    <li>By the time I left, it still hadn't arrived.</li>
                    <li>
                      Back then, I had still dreamed of being a ballerina.
                    </li>
                  </ul>
                </ul>
                <ul className="pad1">
                  <li>
                    <h6>Just</h6>
                  </li>
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    <em>A very short time before the past perfect event.</em>
                  </li>
                  <ul className="pad1">
                    <li>I had just arrived before it started to rain.</li>
                    <li>It was nighttime, and they'd just fallen asleep.</li>
                    <li>He had hoped she would come.</li>
                  </ul>
                </ul>
                <ul className="pad1">
                  <li>
                    <h6>Ever</h6>
                  </li>
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    <em>All the time before the past perfect event.</em>
                  </li>
                  <ul className="pad1">
                    <li>It was the most beautiful sight I had ever seen.</li>
                    <li>Hadn't he ever visited Norway before?</li>
                    <li>
                      Had our company ever tried to work differently, they be
                      doing better now.
                    </li>
                  </ul>
                </ul>
                <ul className="pad1">
                  <li>
                    <h6>Never</h6>
                  </li>
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    <em>At no time before the past perfect event.</em>
                  </li>
                  <ul className="pad1">
                    <li>I had never been abroad until I moved to Australia.</li>
                    <li>Before that night, I had never walked home alone.</li>
                    <li>She had never been there.</li>
                  </ul>
                </ul>
              </div>
              <Spacer size={3} />
              <h5 className="shadowText">
                Adverbs and Adverbials of Time Often Used to Add Meaning to the{" "}
                <em>Second Event</em> of a Past Perfect Sentence.
              </h5>
              <div className={body}>
                <ul className="pad1">
                  <li>
                    <h6>By the time</h6>
                  </li>
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    <em>Right up to the secondary event</em>
                  </li>
                  <ul className="pad1">
                    <li>By the time I'd got there, she'd gone.</li>
                    <li>
                      I had forgotten what I wanted by the time I got to the
                      shop.
                    </li>
                    <li>By the time they had finished, everyone was bored.</li>
                  </ul>
                </ul>
                <ul className="pad1">
                  <li>
                    <h6>When</h6>
                  </li>
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="accentLight"
                    />{" "}
                    <em>Near the same time but before the secondary event.</em>
                  </li>
                  <li style={{ paddingLeft: "1rem" }}>
                    When is often combined with just.
                  </li>
                  <ul className="pad1">
                    <li>The thief had just escaped when the police arrived.</li>
                    <li>I'd just gone inside when it started to rain.</li>
                    <li>We'd just eaten when they told us to leave.</li>
                  </ul>
                </ul>
              </div>
            </section>
            <Spacer size={2} />
          </article>
        </Main>
        <aside className="sideBorderDark sideBorderPad">
          <h3 className="shadowText">Other Lessons</h3>
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/tenses/overview"
            activeClassName="isActive"
            innerText="A Simple Overview of the Tenses Used in English."
          />
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/zero-conditional/complete-lesson"
            activeClassName="isActive"
            innerText="The Zero Conditional - A Complete Lesson"
          />
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
            linkTo="/learning/tag-questions/complete-lesson"
            activeClassName="isActive"
            innerText="How To Make Tag Questions"
          />
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
  <Seo title="Thunder Island | Learning: Past Perfect" />
);

////** PROP TYPES **////
AdvancedLesson.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default AdvancedLesson;
