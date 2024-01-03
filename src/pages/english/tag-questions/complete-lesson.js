import React from "react";
import PropTypes from "prop-types";

import { 
  body,
  list
} from "./index.module.css";

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
const CompleteLesson = ( { pageContext} ) => {

  ////** CONTEXT **////
  //Breadcrumb context
    const {
    breadcrumb: { crumbs }
  } = pageContext;
  const crumbPaths = crumbs.map( crumb => crumb.crumbLabel === "tag-questions" ? {
    ...crumb,
    pathname: "/english"
  } : crumb );
  
  ////** VARIABLES **////
  //PageTitle
  const pageTitle = "How To Make Tag Questions";

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={ 3 } />
      <Breadcrumbs crumbs={ crumbPaths } />
      <Spacer size={ 3 } />
      <PageTitle title={ pageTitle } />
      <Spacer size={ 3 } />
      <AsideRight>
        <Main size={ 1 }>
          <article className="pad1">
            <section display="flexColumn">
              <h3 className="shadowText">What Are Tag Questions?</h3>
              <Spacer size={ 3 } />
              <TextEmphasisBoxMinor>
                <p className="textCenter">Tag questions are a different way to ask a question.</p>
              </TextEmphasisBoxMinor>
              <Spacer size={ 2 } />
              <TextEmphasisBox>
                <p>To make tag questions you use a positive and a negative.</p>
              </TextEmphasisBox>
              <Spacer size={ 2 } />
            </section>
            <section className="flexColumn">
              <h3 className="shadowText" >What Do I Use Tag Questions for?</h3>
              <div className={ body }>
                <ul className={ list }>
                  <li> <Arrow type="x1" direction="right" color="accentLight" /> Use tag questions to check you have understood.</li>
                  <li><Arrow type="x1" direction="right" color="accentLight" /> Use tag questions to soften a statement.</li>
                  <li><Arrow type="x1" direction="right" color="accentLight" /> Use tag questions to ask a question more indirectly.</li>
                  <li><Arrow type="x1" direction="right" color="accentLight" /> Use tag questions to check a piece of information is true.</li>
                  <li><Arrow type="x1" direction="right" color="accentLight" /> Use tag questions as a question.</li>
                </ul>
              </div>
            </section>
            <Spacer size={ 3 } />
            <section className="flexColumn">
              <h3 className="shadowText">How Do I Say A Tag Question?</h3>
              <div className={ body }>
                <p>Usually, we ask questions in English like this: </p>
                <ul className={ list }>
                  <li><Arrow type="x2" direction="right" color="dark" /> Where are you going?</li>
                  <li><Arrow type="x2" direction="right" color="dark" /> When is it happening?</li>
                  <li><Arrow type="x2" direction="right" color="dark" /> Why did he do that?</li>
                </ul>
                <Spacer size={ 4 } />
                <p>Tag questions are different.</p>
                <p>They are very small question added or 'tagged' on to the end of a statement.</p>
                <Spacer size={ 4 } />
                <TextEmphasisBoxMinor>
                  <p>If the statement is positive, the tag question <em>must</em> be negative.</p>
                </TextEmphasisBoxMinor>
                <ul className={ list }>
                  <li><Arrow type="x2" direction="right" color="dark" />This is a positive statement with a negative tag question, isn't it?</li>
                  <li><Arrow type="x2" direction="right" color="dark" /> You're going, aren't you?</li>
                  <li><Arrow type="x2" direction="right" color="dark" /> She made it, didn't she?</li>
                </ul>
                <TextEmphasisBoxMinor>
                  <p>But, if the statement is negative then the tag question <em>must</em> be positive.</p>
                </TextEmphasisBoxMinor>
                <ul className={ list }>
                  <li><Arrow type="x2" direction="right" color="dark" />This isn't the same, is it?</li>
                  <li><Arrow type="x2" direction="right" color="dark" />It isn't happening, is it?</li>
                  <li><Arrow type="x2" direction="right" color="dark" />He didn't do it, did he?</li>
                </ul>
              </div>
            </section>
            <Spacer size={ 3 } />
            <section className="flexColumn">
              <h5 className="shadowText">Something to Remember!</h5>
              <div className={ body }>
                <p>Tag questions are mostly used in informal conversations and used a lot.</p>
                <p>Tag questions are rarely written down and when they are the message is often meant harshly.</p>
                <p>But, if you are writing a sentence with a tag question place a <em>comma</em> between the statement and the tag question.</p>
              </div>
            </section>
            <section className="flexColumn">
              <h3 className="shadowText">How Do I Say a Tag Question?</h3>
              <div className={ body }>
                <Spacer size={ 4 } />
                <p>There are three different ways to make tag questions.</p>
                <ul className={ list }>
                  <li>Most tag questions look like this:</li>
                  <ul className={ list }>
                    <li><Arrow type="x1" direction="right" color="dark" /> <em>Auxiliary verb + main verb, the same auxiliary verb + pronoun?</em></li>
                    <ul className={ list }>
                      <li><Arrow type="x2" direction="right" color="dark" /> You haven't been here, have you?</li>
                      <li><Arrow type="x2" direction="right" color="dark" /> He is cooking tonight, isn't he?</li>
                      <li><Arrow type="x2" direction="right" color="dark" /> I should have told him, shouldn't I?</li>
                    </ul>
                  </ul>
                  <li>Sometimes tag questions look like this:</li>
                  <ul className={ list }>
                    <li><Arrow type="x1" direction="right" color="dark" /> Auxiliary verb + main verb, do/does/did + pronoun?</li>
                    <ul className={ list }>
                      <li><Arrow type="x2" direction="right" color="dark" /> They decided, didn't they?</li>
                      <li><Arrow type="x2" direction="right" color="dark" /> We left everything behind, didn't we?</li>
                      <li><Arrow type="x2" direction="right" color="dark" /> He runs very fast, doesn't he?</li>
                      <li><Arrow type="x2" direction="right" color="dark" /> You don't, do you?</li>
                    </ul>
                  </ul>
                  <li>The exception is when saying <em>I am</em>:</li>
                  <ul className={ list }>
                    <li><Arrow type="x1" direction="right" color="dark" /> The negative I am is aren't I.</li>
                    <ul className={ list }>
                      <li><Arrow type="x2" direction="right" color="dark" /> I am going, aren't I?</li>
                      <li><Arrow type="x2" direction="right" color="dark" /> I am working right now, aren't I?</li>
                      <li><Arrow type="x2" direction="right" color="dark" /> I'm here, aren't I?</li>
                    </ul>
                  </ul>
                </ul>
              </div>
            </section>
            <section className="flexColumn">
              <h5 className="shadowText">Something to remember!</h5>
              <div className={ body }>
                <p>Usually, these are the verbs most often used for tag questions:</p>
                <ul className={ list }>
                  <li><Arrow type="x2" direction="right" color="dark" /> to be</li>
                  <li><Arrow type="x2" direction="right" color="dark" /> to have</li>
                  <li><Arrow type="x2" direction="right" color="dark" /> to do</li>
                  <li><Arrow type="x2" direction="right" color="dark" /> could</li>
                  <li><Arrow type="x2" direction="right" color="dark" /> should</li>
                </ul>
              </div>
            </section>
            <section className="flexColumn">
              <h3 className="shadowText">Can I See Examples of Tag Questions?</h3>
              <div className={ body }>
                <h4 className="shadowText">
                  Use Tag Questions to Check Understanding.
                </h4>
                <ul className={ list }>
                  <li><Arrow type="x2" direction="right" color="dark" /> The medicine is in the top drawer. Isn't it?</li>
                </ul>
                <Spacer size={ 4 } />
                <h4 className="shadowText">Use Tag Questions to soften a statement.</h4>
                <ul className={ list }>
                  <li><Arrow type="x2" direction="right" color="dark" /> You couldn't do it, could you?</li>
                </ul>
                <Spacer size={ 4 } />
                <h4 className="shadowText">Use Tag Questions to Ask a Question In an Indirect Way.</h4>
                <ul className={ list }>
                  <li><Arrow type="x2" direction="right" color="dark" /> He's going, isn't he?</li>
                  <li><Arrow type="x2" direction="right" color="dark" />I didn't do that very well, did I?</li>
                </ul>
                <Spacer size={ 4 } />
                <h4 className="shadowText">Use Tag Questions to Check if the Information Is True.</h4>
                <ul className={ list }>
                  <li>Is this where you live? <Arrow type="x2" direction="right" color="dark" /> This is where you live, isn't it?</li>
                  <li>Is the boat safe? <Arrow type="x2" direction="right" color="dark" /> This boat is safe, isn't it?</li>
                  <li>Did you keep the receipt? <Arrow type="x2" direction="right" color="dark" /> You kept the receipt, didn't you?</li>
                  <li>Didn't I ask you? <Arrow type="x2" direction="right" color="dark" /> I asked you, didn't I?</li>
                </ul>
                <h4 className="shadowText">Use Tag Questions to Ask a Questions.</h4>
                <ul className={ list }>
                  <li>Is there anybody there? <Arrow type="x2" direction="right" color="dark" /> There's nobody there, is there?</li>
                  <li>Am I learning quickly? <Arrow type="x2" direction="right" color="dark" /> I'm learning quickly, aren't I?</li>
                </ul>
              </div>
            </section>
          </article>
          <Spacer size={ 2 } />
        </Main>
        <aside className="sideBorderDark sideBorderPad">
          <h3 className="shadowText">Other Lessons</h3>
          <Spacer size={ 4 } />
          <SimpleLink
            linkTo="/english/tenses/overview"
            activeClassName="isActive"
            innerText="A Simple Overview of the Tenses Used in English"
          />
          <Spacer size={ 4 } />
          <SimpleLink
            linkTo="/english/zero-conditional/complete-lesson"
            activeClassName="isActive"
            innerText="The Zero Conditional - A Complete Lesson"
          />
          <Spacer size={ 4 } />
          <SimpleLink
            linkTo="/english/second-conditional/complete-lesson"
            activeClassName="isActive"
            innerText="The Second Conditional - A Complete Lesson"
          />
          <Spacer size={ 4 } />
          <SimpleLink
            linkTo="/english/third-conditional/complete-lesson"
            activeClassName="isActive"
            innerText="The Third Conditional - A Complete Lesson"
          />
          <Spacer size={ 4 } />
          <SimpleLink
            linkTo="/english/using-get/complete-lesson"
            activeClassName="isActive"
            innerText="How to Use Get and Got Like a Native."
          />
          {/* <Spacer size={ 3 } />
          <h3 className="shadowText">Exercises</h3>
          <Spacer size={ 4 } />
          <SimpleLink 
            linkTo="/english/exercise"
            activeClassName="isActive"
            innerText=""
          /> */}
          <Spacer size={ 2 } />
        </aside>
      </AsideRight>
    </Layout>
  );
}

export const Head = () => <Seo title="Thunder Island | English Grammar: Tag Questions" />;

////** PROP TYPES **////
CompleteLesson.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default CompleteLesson;