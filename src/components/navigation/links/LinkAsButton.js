import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";   

import {
  link
} from "./LinkAsButton.module.css";

////** COMPONENT **////
const LinkAsButton = ( { linkTo, innerText } ) => {

////** MARK UP **////
  return (
    <Link
      to={ linkTo }
      className={ `pad1 ${ link }` }
      activeClassName="isActive"
    >
      { innerText }
    </Link>
  );
}

////** PROP TYPES **////
LinkAsButton.propTypes = {
  linkTo: PropTypes.string.isRequired,
  innerText: PropTypes.string.isRequired,
}

export default LinkAsButton;