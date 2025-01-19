import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { link } from "./LinkAsButton.module.css";

////** COMPONENT **////
const LinkAsButton = ({ linkTo, innerText, linkOut = false }) => {
  ////** MARK UP **////
  return linkOut ? (
    <a
      href={linkTo}
      className={`pad1 ${link}`}
      target="_blank"
      rel="noopener noreferrer">
      {innerText}
    </a>
  ) : (
    <Link
      to={linkTo}
      className={`pad1 ${link}`}
      activeClassName="isActive">
      {innerText}
    </Link>
  );
};

////** PROP TYPES **////
LinkAsButton.propTypes = {
  linkTo: PropTypes.string.isRequired,
  innerText: PropTypes.string.isRequired,
  linkOut: PropTypes.bool,
};

////** DEFAULT PROPS **////
LinkAsButton.defaultProps = {
  linkOut: false,
};

export default LinkAsButton;
