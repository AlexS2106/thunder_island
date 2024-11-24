import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { list } from "./SmallPostList.module.css";

import SmallPost from "../../posts/small/SmallPost";
import Spacer from "../../layout/spacing/Spacer";

////** COMPONENT **////
const SmallPostList = ({ postData, innerText }) => {
  const generateSmallPostList = postData.map((item) => (
    <li key={uuid()}>
      <SmallPost
        postData={item}
        innerText={innerText}
      />
      <Spacer size={3} />
    </li>
  ));

  ////** MARK UP **////
  return (
    <ul className={` flexCol bgLight ${list}`}>{generateSmallPostList}</ul>
  );
};

////** PROP TYPES **////
SmallPostList.propTypes = {
  postData: PropTypes.array.isRequired,
  innerText: PropTypes.string.isRequired,
};

export default SmallPostList;
