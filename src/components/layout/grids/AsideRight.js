import React from "react";
import PropTypes from "prop-types";

import {
  wrapper
} from "./AsideRight.module.css";

const AsideRight = ( { children } ) => { 
  return (
    <div className={ wrapper }>
      { children }
    </div>
  );
}

////** PROP TYPES **////
AsideRight.propTypes = {
  children: PropTypes.array.isRequired
}

export default AsideRight;