import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import {
  link
} from "./SimpleLink.module.css";

////** COMPONENT **////
const SimpleLink = ( { linkTo, innerText } ) => {

  ////** MARK UP **////

    return (
      <Link
        to={ linkTo }
        className={ link }
        activeClassName="isActive"
      >
        { innerText }
      </Link >
    );
  };

////** PROP TYPES **////
SimpleLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  innerText: PropTypes.string.isRequired,
}

export default SimpleLink;