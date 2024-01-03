import React from "react";
import PropTypes from "prop-types";

import {
  wrapper
} from "./AsideLeft.module.css";

const AsideLeft = ( { children } ) => { 
  return (
    <div className={ wrapper }>
      { children }
    </div>
  );
}

////** PROP TYPES **////
AsideLeft.propTypes = {
  children: PropTypes.array.isRequired
}

export default AsideLeft;