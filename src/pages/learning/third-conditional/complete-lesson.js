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
    crumb.crumbLabel === "third-conditional"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );
  ////** VARIABLES **////
  const pageTitle1 = "The Third Conditional - A Complete Lesson";

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
              <h3 className="shadowText">What Is the Third Conditional?</h3>
              <Spacer size={3} />
              <TextEmphasisBox>
                <p>An unreal past condition and the imagined result.</p>
                <Spacer size={4} />
                <p>
                  This condition did not happen but if it had happened, then
                  this result could have happened as well.
                </p>
              </TextEmphasisBox>
              <Spacer size={4} />
              <TextEmphasisBox>
                <p>
                  The third condition is the{" "}
                  <em>past hypothetical conditional.</em>
                </p>
              </TextEmphasisBox>
            </section>
            <Spacer size={2} />
            <section className="flexCol">
              <h3 className="shadowText">
                What Do I Use the Third Conditional for?
              </h3>
              <Spacer size={3} />
              <ul className="pad1">
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To talk about situations that never happened.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To express regret.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To express relief.
                </li>
                <li>
                  {" "}
                  <Arrow
                    type="x1"
                    direction="right"
                    color="accentLight"
                  />{" "}
                  To criticise.
                </li>
              </ul>
            </section>
            <Spacer size={2} />
            <section className="flexCol">
              <h3 className="shadowText">
                How Do I Say the Third Conditional?
              </h3>
              <div className={body}>
                <TextEmphasisBoxMinor>
                  <p className="textCenter">
                    You use the past participle and the past perfect.
                  </p>
                </TextEmphasisBoxMinor>
                <Spacer size={4} />
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>
                      If + past perfect, subject + would have / would not have +
                      past participle.
                    </em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If I had walked home, I would have arrived by now.
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If I had waited for the bus, I would not have arrived home
                      yet.
                    </li>
                  </ul>
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>
                      Subject + would have / would not have + past participle +
                      if + past perfect.
                    </em>
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I would have arrived home if I had walked.
                    </li>
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I would not have arrived home yet if I had waited for the
                      bus.{" "}
                    </li>
                  </ul>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h5 className="shadowText">Something to remember!</h5>
              <div className={body}>
                <h6>Replacing Would</h6>
                <p>
                  Above, the example used <em>would</em> but you can replace
                  would with:
                </p>
                <Spacer size={4} />
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>May have</em> or <em>may not have</em>.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      She <em>may have</em> caused the crash if she had driven
                      to fast.
                    </li>
                  </ul>
                  <Spacer size={4} />
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>Might have</em> or <em>might not have</em>.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If I had not gone out that night I <em>might not</em> have
                      met my husband.
                    </li>
                  </ul>
                  <Spacer size={4} />
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    <em>Could have</em> or <em>could not have</em>.
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If I could have helped, they would have completed
                      everything on time.
                    </li>
                  </ul>
                </ul>
                <Spacer size={4} />
                <h6>Replacing If</h6>
                <p>Replace if with I wish or if only.</p>
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    I wish
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      I wish I would have helped so they would have completed
                      everything on time.
                    </li>
                  </ul>
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    If only
                  </li>
                  <ul className="pad1">
                    <li>
                      <Arrow
                        type="x2"
                        direction="right"
                        color="dark"
                      />{" "}
                      If only I could have helped, then they would have
                      completed everything on time.
                    </li>
                  </ul>
                </ul>
                <Spacer size={4} />
                <h6>When the If clause Is Not Said.</h6>
                <p>Occasionally the if clause is implied.</p>
                <ul className="pad1">
                  <li>
                    <Arrow
                      type="x1"
                      direction="right"
                      color="dark"
                    />{" "}
                    I would have helped, if you have asked me.{" "}
                    <Arrow
                      type="x2"
                      direction="right"
                      color="dark"
                    />{" "}
                    I would have helped.
                  </li>
                </ul>
              </div>
            </section>
            <Spacer size={3} />
            <section className="flexCol">
              <h3 className="shadowText">
                Can I See Examples of the Third Conditional?
              </h3>
              <div className={body}>
                <h4 className="shadowText">
                  Talking About Situations That Never Happened.
                </h4>
                <ul className="pad1">
                  <li>
                    If he had gone to university, he might have received a
                    higher wage.
                  </li>
                  <li>
                    What would you have done if you hadn't taken this job?
                  </li>
                  <li>
                    If I had run faster, I would have finished the race by now.
                  </li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">Expressing regret.</h4>
                <ul className="pad1">
                  <li>
                    I wish I had worked harder so I could have a better job now.
                  </li>
                  <li>
                    If I hadn't eaten so much, I wouldn't have a stomach ache.
                  </li>
                  <li>
                    I wish we have saved more money, we might have retired
                    earlier.
                  </li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">Expressing Relief.</h4>
                <ul className="pad1">
                  <li>I would not have fallen if I had stayed at home.</li>
                  <li>
                    If we had driven along the other road, we would have been
                    stuck in a traffic jam.
                  </li>
                  <li>If I had worn that dress, I would have looked awful.</li>
                </ul>
                <Spacer size={4} />
                <h4 className="shadowText">To criticise.</h4>
                <ul className="pad1">
                  <li>
                    This country would have been a nice place if the people had
                    kept it clean.
                  </li>
                  <li>
                    If she hadn't driven so fast, she might not have had her
                    accident.
                  </li>
                  <li>
                    If I had known the movie would be so bad, I wouldn't have
                    come.
                  </li>
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
            linkTo="/learning/past-perfect/complete-lesson"
            activeClassName="isActive"
            innerText="The Past Perfect - The Complete Lesson"
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
            linkTo="/learning/third-conditional/exercise-word-match-1"
            activeClassName="isActive"
            innerText="The Third Conditional - A Word Match Exercise."
          />
          <Spacer size={2} />
        </aside>
      </AsideRight>
    </Layout>
  );
};

export const Head = () => (
  <SearchEngineOptimisation title="Thunder Island | Learning: Third Conditional" />
);

////** PROP TYPES **////
AdvancedLesson.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default AdvancedLesson;
