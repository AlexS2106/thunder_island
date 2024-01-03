import React from "react";
import PropTypes from "prop-types";

import {
  emphasis
} from "./TextEmphasisBoxMinor.module.css";

const TextEmphasisBoxMinor = ( { children } ) => { 
  return (
    <div className={ emphasis }>
      { children }
    </div>
  );
}
////** PROP TYPES **////
TextEmphasisBoxMinor.propTypes = {
   children: PropTypes.any.isRequired
}

export default TextEmphasisBoxMinor;