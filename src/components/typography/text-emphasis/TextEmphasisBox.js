import React from "react";
import PropTypes from "prop-types";

import {
  emphasis
} from "./TextEmphasisBox.module.css";

const TextEmphasisBox = ( { children } ) => { 
  return (
    <div className={ emphasis }>
      { children }
    </div>
  )
}
////** PROP TYPES **////
TextEmphasisBox.propTypes = {
   children: PropTypes.any.isRequired
}

export default TextEmphasisBox;