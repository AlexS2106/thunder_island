import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { spacing, btnWrapper } from "./SmallPost.module.css";

import LinkAsButton from "../../navigation/links/LinkAsButton";

import { makeLink } from "../../../support/functions/utility";

////** COMPONENT **////
const SmallPost = ({ postData, innerText }) => {
  ////** VARIABLES **////
  //Unpacking data
  const { frontmatter } = postData;
  const { title, slug, mainCategories, landscapeImage, alt } = frontmatter;
  ////** MARK UP **////
  return (
    <div className="flexColumn">
      <h4 className={`shadowText ${spacing}`}>{title}</h4>
      <div className={spacing}>
        <GatsbyImage
          image={getImage(landscapeImage)}
          alt={alt}
        />
      </div>
      <div className={`pad1 ${btnWrapper}`}>
        <LinkAsButton
          linkTo={makeLink(mainCategories, slug)}
          innerText={innerText}
        />
      </div>
    </div>
  );
};

////** PROP TYPES **////
SmallPost.propTypes = {
  postData: PropTypes.object.isRequired,
  innerText: PropTypes.string.isRequired,
};

export default SmallPost;
