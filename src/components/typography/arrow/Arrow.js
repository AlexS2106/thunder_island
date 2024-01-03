import React from "react";
import PropTypes from "prop-types";

import {
  accentDark,
  accentLight,
  dark
} from "./Arrow.module.css";
 
import {
  singleArrowRight, singleArrowLeft, doubleArrowRight, doubleArrowLeft } from "../../../support/functions/iconFunctions";
 

   ////** COMPONENT **//// 
const Arrow = ( { type, direction, color } ) => {

  ////** FUNCTIONS **////
  //decides which svg
  function generateArrow (type, direction) {
    if ( type === "x1" ) {
     return direction === "right" ? singleArrowRight() : singleArrowLeft();
    } else if ( type === "x2" ) {
     return direction === "right" ? doubleArrowRight() : doubleArrowLeft();
    } else { 
      console.log( Error( "No type or direction was passed to the Arrow component." ) );
    }
  }
  //decides the color of the svg
  function generateClassName (color) { 
    if ( color === "dark" ) {
      return dark;
    } else if ( color === "accentDark" ) {
      return accentDark;
    } else if ( color === "accentLight" ) { 
      return accentLight;
    } else { 
      console.log( Error( "No color was passed to the Arrow component." ) );
    }
  }

  return (
    <span
      className={ generateClassName( color ) }>
      { generateArrow( type, direction ) }
    </span>
  );
}

////** PROP TYPES **////
Arrow.propTypes = {
  type: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Arrow;