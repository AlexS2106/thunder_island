import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { greeting, rotated } from "./index.module.css";

import Breadcrumbs from "../../components/navigation/page-navigation/breadcrumbs/Breadcrumbs";
import Chat from "../../components/typography/chat/Chat";
import Layout from "../../components/layout/containers/Layout";
import Main from "../../components/layout/containers/Main";
import MediumPostList from "../../components/postLists/mediumPostList/MediumPostList";
import PageTitle from "../../components/typography/pageTitle/PageTitle";
import Signature from "../../components/typography/signature/Signature";
import Spacer from "../../components/layout/spacing/Spacer";
import StandardGrid from "../../components/layout/grids/StandardGrid";

import useUnpublished from "../../support/hooks/useUnpublished.query";

////** COMPONENT **////
const ComingSoonPage = ({ pageContext }) => {
  const _unpublishedPosts = useUnpublished();
  ////** STATE **////
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  ////** VARIABLES **////
  //PageTitle - title
  const pageTitle = "Coming Soon";
  //MediumPostList - [] of {}, button text, max-length of description text, boolean variables of extra data to show
  const mainData = [..._unpublishedPosts];
  const mainPostsInnerText = "Continue...";
  const mediumPostExcerptLength = 150;
  const showDate = true;
  const showAuthor = true;
  const hasPhotographer = true;
  const showSubcategories = true;

  ////** MARK UP **////
  return (
    <Layout>
      <Spacer size={3} />
      <Breadcrumbs crumbs={crumbs} />
      <Spacer size={3} />
      <PageTitle title={pageTitle} />
      <Spacer size={3} />
      <StandardGrid size={1}>
        <Main size={1}>
          <h3 className="shadowText">Future Posts To Be</h3>
          <Spacer size={3} />
          <MediumPostList
            postData={mainData}
            excerptLength={mediumPostExcerptLength}
            showDate={showDate}
            showAuthor={showAuthor}
            hasPhotographer={hasPhotographer}
            showSubCategories={showSubcategories}
            innerText={mainPostsInnerText}
          />
        </Main>
        <aside>
          <div className="sideBorderDark sideBorderPad">
            <div className="flexCol">
              <div className={rotated}>
                <h3 className={`textCenter pad1 ${greeting}`}>Hello!</h3>
              </div>
              <Chat size={1}>
                <p className="pad1">If you found this page - well done!</p>
                <p className="pad1">
                  This page is where I keep stuff that will, eventually, get
                  published - I promise! But, the posts aren't quite in tip-top
                  condition yet.
                </p>
                <p className="pad1">
                  This page happened because my family loved my Crusty Bread.
                  The{" "}
                  <Link
                    className="shadowText"
                    to="/recipes/crusty-bread/">
                    Crusty Bread
                  </Link>{" "}
                  recipe had been kept and written but, unfortunately, had
                  failed to acquire a photograph for many months. As a result,
                  it had never been published.
                </p>
                <p className="pad1">
                  Fed up with having to access the website code to retrieve the
                  recipe whenever we wanted to eat Crusty Bread (I could have
                  just taken a quick photo, but why do that?), I decided it was
                  easier to make an "unpublished page" to access my
                  not-quite-ready posts more easily.
                </p>
                <p className="pad1">
                  Usually, a post is here due to a failure of photography or
                  lack of thorough editing. Still, sometimes it's because a
                  recipe isn't quite good enough to pass my taste testers'
                  approval, the project is still under development, or I haven't
                  finished writing the story yet.
                </p>
                <p className="pad1">
                  If you don't care - have a read and put forth your opinions!
                </p>
              </Chat>
              <Signature
                signedBy="Alex"
                rotate
              />
            </div>
          </div>
        </aside>
      </StandardGrid>
    </Layout>
  );
};

////** PROP TYPES **////
ComingSoonPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default ComingSoonPage;
