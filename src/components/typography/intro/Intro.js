import React from "react";
import PropTypes from "prop-types";

import {
  intro
} from "./Intro.module.css";

 ////** COMPONENT **////
const Intro = ( { children } ) => {
 ////** MARK UP **////
  return (
    <p className={ `sideBorderDark sideBorderPad ${ intro }` }>
      { children }
    </p>
  );
}

////** PROP TYPES **////
Intro.propTypes = {
  children: PropTypes.string.isRequired
}

export default Intro;