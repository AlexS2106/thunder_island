import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import {
  link
} from "./NavLink.module.css";

////** COMPONENT **////
const NavLink = ( { linkTo, innerText } ) => {

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
NavLink.propTypes = {
  linkTo: PropTypes.string.isRequired,
  innerText: PropTypes.string.isRequired,
}

export default NavLink;