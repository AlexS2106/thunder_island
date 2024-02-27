import React, { useContext } from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { v4 as uuid } from "uuid";

import {
  post,
  imageWrapper,
  textWrapper,
  btnWrapper,
} from "./MediumPost.module.css";

import ButtonEmphasised from "../../buttons/ButtonEmphasised";

import {
  makeLink,
  listSubcategories,
  reduceSentenceLength,
} from "../../../support/functions/utility";
import { DispatchContext } from "../../../support/providers/ContextProvider";

////** COMPONENT **////
const MediumPost = ({ postData, ...props }) => {
  ////** CONTEXT **////
  const dispatch = useContext(DispatchContext);

  ////** VARIABLES **////
  //Unpacking imported data
  const { frontmatter } = postData;
  const {
    title,
    slug,
    mainCategories,
    author,
    portraitImage,
    alt,
    photographer,
    description,
  } = frontmatter;
  //article -> Button
  const innerText = props.innerText ? props.innerText : "See More";

  ////** FUNCTIONS **////
  //Cuts the description of the post into the required length passed by props or to 100 characters (description passed by props.post)
  const generatedExcerpt = reduceSentenceLength(
    description,
    props.excerptLength || 100,
  );
  //Generates a list of h4 from the mainCategories (via props.post.frontmatter.mainCategories)
  const mainCats = mainCategories.map((category) => {
    return (
      <h4
        key={uuid()}
        className="textCenter shadowText">
        {category.name}
      </h4>
    );
  });
  //Checks for a list on subcategories and generates a list of h4 from the mainCategories (via props.post.frontmatter.subcategories)
  const subCats = listSubcategories(frontmatter).map((category) => {
    return (
      <h4
        key={uuid()}
        className="textCenter shadowText">
        {category.name}
      </h4>
    );
  });
  //Checks for a portraitImage and makes an image and wrapper if one is found (via props.post.frontmatter.portraitImage)
  const generatedImage = portraitImage ? (
    <div className={`flexColumn ${imageWrapper}`}>
      <GatsbyImage
        image={getImage(portraitImage)}
        alt={alt}
      />
      {props.hasPhotographer &&
      photographer !== "" &&
      photographer !== null &&
      photographer !== undefined ? (
        <cite>photo by {photographer}</cite>
      ) : null}
    </div>
  ) : null;

  ////** MARK UP **////
  return (
    <article className={`bgLight ${post}`}>
      <div>
        <h3 className="textCenter shadowText">{title}</h3>
        {mainCats}
        {props.showSubcategories && subCats}
        {props.showAuthor && (
          <address
            rel="author"
            className="textCenter shadowText">
            by {author}
          </address>
        )}
      </div>
      <div className="flexRow">
        {generatedImage}
        <div className={`flexColumn ${textWrapper}`}>
          <p className="sideBorderDark sideBorderPad">{generatedExcerpt}</p>
        </div>
      </div>
      <div className={`flexColumn ${btnWrapper}`}>
        <ButtonEmphasised
          innerText={innerText}
          onClick={() => {
            dispatch({ type: "select_posts", payload: slug });
            navigate(makeLink(mainCategories, slug));
          }}
        />
      </div>
    </article>
  );
};

////** PROP TYPES **////
MediumPost.propTypes = {
  postData: PropTypes.object.isRequired,
  innerText: PropTypes.string.isRequired,
  excerptLength: PropTypes.number,
  showDate: PropTypes.bool,
  showAuthor: PropTypes.bool,
  hasPhotographer: PropTypes.bool,
  showSubCategories: PropTypes.bool,
};

export default MediumPost;
