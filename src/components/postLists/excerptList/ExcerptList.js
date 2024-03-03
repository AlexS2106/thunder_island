import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { list } from "./ExcerptList.module.css";

import SimpleLink from "../../navigation/links/SimpleLink";
import MediumPost from "../../posts/medium/MediumPost";

////** COMPONENT **////
const ExcerptList = ({ excerptData, innerText, excerptLength }) => {
  ////** FUNCTIONS **////
  //Generate a list of excerpts of random posts
  const generatedExcerpts = excerptData.map((item) => {
    //Posts with a main category of health will be linked to recipes while the health category has so few posts.
    const mainCategoryLink =
      item.frontmatter.mainCategories[0] === "health"
        ? "recipes"
        : item.frontmatter.mainCategories[0];
    return (
      <li key={uuid()}>
        <MediumPost
          postData={item}
          innerText={innerText}
          excerptLength={excerptLength}
        />
        <h3 className="textCenter">
          <SimpleLink
            linkTo={`/${mainCategoryLink}`}
            innerText={`See more in ${item.frontmatter.mainCategories}?`}
          />
        </h3>
      </li>
    );
  });

  ////** MARK UP**////
  return <ul className={`bgMedium ${list}`}>{generatedExcerpts}</ul>;
};

ExcerptList.propTypes = {
  excerptData: PropTypes.array.isRequired,
  innerText: PropTypes.string.isRequired,
  excerptLength: PropTypes.number.isRequired,
};

export default ExcerptList;
