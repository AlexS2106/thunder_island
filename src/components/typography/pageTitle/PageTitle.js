import React from "react";
import PropTypes from "prop-types";

import {
  pageTitle,
  long
} from "./PageTitle.module.css";

////** COMPONENT **////
const PageTitle = ( { title, size } ) => { 

  let width;
  if ( size === 1 ) { width = long }; 
  
  ////** MARK UP **////
  return (
      <h1 className={`shadowText ${pageTitle} ${width}`}>
        { title }
      </h1>
  );
}

////** PROP TYPES **////
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number
}

export default PageTitle;