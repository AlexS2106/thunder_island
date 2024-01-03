import React from "react";
import PropTypes from "prop-types";

import {
  wide
} from "./layoutStyles.module.css";


  ////** COMPONENT **////
const Div = ( { size, children } ) => {

  let width;
  let err;
  if ( size === 1 ) width = wide;
  if ( size === 2 ) {err = new Error("medium")};
  if ( size === 3 ) {err = new Error("small")};
  if ( err ) { console.log( `Set a width setting for <Div></Div> component for size ${ err }` ) };

  ////** MARK UP **////
  return (
    <div className={ `flexColumn ${width}` }>
      { children }
    </div>
  );
}

////** PROP TYPES **////
Div.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.number.isRequired
}

export default Div;