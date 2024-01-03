import React from "react";
import PropTypes from "prop-types";

import {
  mini,
  small,
  medium,
  large
} from "./Spacer.module.css";

////** COMPONENT **////
const Spacer = ( { size } ) => {

  ////** VARIABLES **////
  //Determine space size 
  let height;

  if ( size === 4 ) { height = mini }
  if ( size === 3 ) { height = small }
  if ( size === 2 ) { height = medium }
  if ( size === 1 ) { height = large }
  
  ////** MARK UP **////  
  return (
    <div className={ height } role="none" />
  );
}

////** PROP TYPES **////
Spacer.propTypes = {
  size: PropTypes.number.isRequired,
}

export default Spacer;