import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { list, listItem } from "./AssociatedPostList.module.css";

import Spacer from "../../layout/spacing/Spacer";
import MediumPost from "../../posts/medium/MediumPost";

////** COMPONENT **////
const AssociatedPostList = ({ postData }) => {
  ////** MARK UP **////
  return (
    <ul className={`flexColumn bgLight ${list}`}>
      {postData.map((item) => {
        return (
          <li
            key={uuid()}
            className={`bgLight ${listItem}`}>
            <MediumPost
              showDate
              showAuthor
              hasPhotographer
              showSubCategories
              post={item}
              innerText="Continue..."
            />
            <Spacer size={3} />
          </li>
        );
      })}
    </ul>
  );
};
////** PROP TYPES **////
AsideRight.propTypes = {
  postData: PropTypes.array.isRequired,
};
export default AssociatedPostList;
