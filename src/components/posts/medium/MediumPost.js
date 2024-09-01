import React, { useContext, useMemo } from "react";
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
const MediumPost = ({
  postData,
  innerText = "See more",
  excerptLength = 100,
  showAuthor = false,
  hasPhotographer = false,
  showSubcategories = false,
}) => {
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

  ////** FUNCTIONS **////
  //Cuts the description of the post into the required length passed by props or to 100 characters (description passed by props.post)
  const generatedExcerpt = useMemo(
    () => reduceSentenceLength(description, excerptLength),
    [description, excerptLength],
  );
  //Generates a list of h4 from the mainCategories (via props.post.frontmatter.mainCategories)
  const mainCats = useMemo(
    () =>
      mainCategories.map((category) => (
        <h4
          key={uuid()}
          className="textCenter shadowText">
          {category.name}
        </h4>
      )),
    [mainCategories],
  );
  //Checks for a list on subcategories and generates a list of h4 from the mainCategories (via props.post.frontmatter.subcategories)
  const subCats = useMemo(
    () =>
      listSubcategories(frontmatter).map((category) => (
        <h4
          key={uuid()}
          className="textCenter shadowText">
          {category.name}
        </h4>
      )),
    [frontmatter],
  );

  ////** MARK UP **////
  return (
    <article className={`bgLight ${post}`}>
      <div>
        <h3 className="textCenter shadowText">{title}</h3>
        {mainCats}
        {showSubcategories && subCats}
        {showAuthor && (
          <address
            rel="author"
            className="textCenter shadowText">
            by {author}
          </address>
        )}
      </div>
      <div className="flexRow">
        {portraitImage && (
          <div className={`flexColumn ${imageWrapper}`}>
            <GatsbyImage
              image={getImage(portraitImage)}
              alt={alt}
            />
            {hasPhotographer &&
              photographer !== "" &&
              photographer !== null &&
              photographer !== undefined && (
                <cite>photo by {photographer}</cite>
              )}
          </div>
        )}
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
