import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { grid, innerGrid } from "./index.module.css";

import AsideRight from "../../../components/layout/grids/AsideRight";
import Breadcrumbs from "../../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Layout from "../../../components/layout/containers/Layout";
import Main from "../../../components/layout/containers/Main";
import PageTitle from "../../../components/typography/pageTitle/PageTitle";
import SearchEngineOptimisation from "../../../components/seo/SearchEngineOptimisation";
import SimpleLink from "../../../components/navigation/links/SimpleLink";
import Spacer from "../../../components/layout/spacing/Spacer";
import TextEmphasisBoxMinor from "../../../components/typography/text-emphasis/TextEmphasisBoxMinor";

const Overview = ({ pageContext }) => {
  ////** CONTEXT **////
  //Breadcrumb context
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const crumbPaths = crumbs.map((crumb) =>
    crumb.crumbLabel === "tenses"
      ? {
          ...crumb,
          pathname: "/learning",
        }
      : crumb,
  );

  ////** VARIABLES **////
  //PageTitle
  const pageTitle = "A Simple Overview of the Tenses Used in English.";

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={3} />
      <Breadcrumbs crumbs={crumbPaths} />
      <Spacer size={3} />
      <PageTitle
        title={pageTitle}
        size={1}
      />
      <Spacer size={2} />
      <AsideRight>
        <Main size={1}>
          <TextEmphasisBoxMinor>
            <p className="textCenter">
              A simplified reference guide to the English tenses.
            </p>
          </TextEmphasisBoxMinor>
          <Spacer size={2} />
          <div className={grid}>
            <div className={innerGrid}>
              <dl>
                <dt>Past Simple</dt>
                <dd>An action completed in the past.</dd>
              </dl>
              <ol>
                <li>I walked.</li>
                <li>I didn't walk.</li>
              </ol>
              <ol>
                <li>Did I walk?</li>
                <li>Didn't I walk?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt>Past Continuous</dt>
                <dd>An action that overlaps a moment in the past.</dd>
              </dl>
              <ol>
                <li>I was walking.</li>
                <li>I wasn't walking.</li>
              </ol>
              <ol>
                <li>Was I walking?</li>
                <li>Wasn't I walking?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt className="accentText">
                  <Link to={`/learning/past-perfect/complete-lesson`}>
                    Past Perfect
                  </Link>
                </dt>
                <dd>A short action completed a moment in the past.</dd>
              </dl>
              <ol>
                <li>I had walked.</li>
                <li>I hadn't walked.</li>
              </ol>
              <ol>
                <li>Had I walked?</li>
                <li>Hadn't I walked?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt>Past Perfect Continuous</dt>
                <dd>A long action interrupted by a moment in the past.</dd>
              </dl>
              <ol>
                <li>I had been walking.</li>
                <li>I hadn't been walking.</li>
              </ol>
              <ol>
                <li>Had I been walking?</li>
                <li>Hadn't I been walking?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt>Present Simple</dt>
                <dd>An action in the present.</dd>
                <dd>A regularly occurring action.</dd>
              </dl>
              <ol>
                <li>I walk.</li>
                <li>I don't walk.</li>
              </ol>
              <ol>
                <li>Do I walk?</li>
                <li>Don't I walk?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt>Present Continuous</dt>
                <dd>An action that overlaps the present.</dd>
                <dd>An action starting in the present.</dd>
              </dl>
              <ol>
                <li>I am walking.</li>
                <li>I'm not walking.</li>
              </ol>
              <ol>
                <li>Am I walking?</li>
                <li>Aren't I walking?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt>Present Perfect</dt>
                <dd>
                  A short action completed at an unspecified time before the
                  present.
                </dd>
              </dl>
              <ol>
                <li>I have walked.</li>
                <li>I haven't walked.</li>
              </ol>
              <ol>
                <li>Have I walked?</li>
                <li>Haven't I walked?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt>Present Perfect Continuous</dt>
                <dd>
                  A long action started in the past that is interrupted by the
                  present.
                </dd>
              </dl>
              <ol>
                <li>I have been walking.</li>
                <li>I haven't been walking.</li>
              </ol>
              <ol>
                <li>Have I been walking?</li>
                <li>Haven't I been walking?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt>Future Simple</dt>
                <dd>An action in the future.</dd>
              </dl>
              <ol>
                <li>I will walk.</li>
                <li>I won't walk.</li>
                <li>I'm going to walk.</li>
                <li>I'm not going to walk.</li>
              </ol>
              <ol>
                <li>Will I walk?</li>
                <li>Won't I walk?</li>
                <li>Am I going to walk?</li>
                <li>Aren't I going to walk?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt>Future Continuous</dt>
                <dd>An action that overlaps a moment in the future.</dd>
              </dl>
              <ol>
                <li>I will be walking.</li>
                <li>I won't be walking.</li>
                <li>I am going to be walking.</li>
                <li>I'm not going to be walking.</li>
              </ol>
              <ol>
                <li>Will I be walking?</li>
                <li>Won't I be walking?</li>
                <li>Am I going to be walking?</li>
                <li>Aren't I going to be walking?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt>Future Perfect</dt>
                <dd>
                  A short action in the future that will be completed before a
                  time in the future.
                </dd>
              </dl>
              <ol>
                <li>I will have walked.</li>
                <li>I won't have walked.</li>
                <li>I'm going to have walked.</li>
                <li>I'm not going to have walked.</li>
              </ol>
              <ol>
                <li>Will I have walked?</li>
                <li>Won't I have walked?</li>
                <li>Am I going to have walked?</li>
                <li>Am I not going to have walked?</li>
              </ol>
            </div>
            <div className={innerGrid}>
              <dl>
                <dt>Future Perfect Continuous</dt>
                <dd>
                  A long action in the future that will continue until it is
                  interrupted by an event in the future.
                </dd>
              </dl>
              <ol>
                <li>I will have been walking.</li>
                <li>I won't have been walking.</li>
                <li>I'm going to have been walking.</li>
                <li>I'm not going to have been walking.</li>
              </ol>
              <ol>
                <li>Will I have been walking?</li>
                <li>Won't I have been walking?</li>
                <li>Am I going to have been walking?</li>
                <li>Am I not going to have been walking?</li>
              </ol>
            </div>
          </div>
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
            linkTo="/learning/past-perfect/complete-lesson"
            activeClassName="isActive"
            innerText="The Past Perfect - A Complete Lesson"
          />
          <Spacer size={4} />
          <SimpleLink
            linkTo="learning/tag-questions/complete-lesson"
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
            linkTo="/learning/zero-conditional/exercise-word-match-1"
            activeClassName="isActive"
            innerText="The Zero Conditional - Word Match"
          />
          <Spacer size={4} />
          <SimpleLink
            linkTo="/learning/third-conditional/exercise-word-match-1"
            activeClassName="isActive"
            innerText="The Third Conditional - Word Match"
          />
          <Spacer size={2} />
        </aside>
      </AsideRight>
    </Layout>
  );
};

export const Head = () => (
  <SearchEngineOptimisation title="Thunder Island | Learning : English Tenses" />
);

////** PROP TYPES **////
Overview.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Overview;
