import React from "react";
import PropTypes from "prop-types";

import {
  signature,
  signed,
  strike,
  rotate,
  end
 } from "./Signature.module.css";

import { makeTitle } from "../../../support/functions/utility";

////** COMPONENT **////
const Signature = ( { signedBy, ...props } ) => { 
  
  let classes = [];
  //customisation options
  if ( props.rotate ) { classes.push( rotate ) };
  if ( props.end ) { classes.push( end ) };
  
 ////** MARK UP **////
  return (
    <div className={ [ ...classes, signature ].join( " " )}>
      <address className={ signed }
        rel="author" >
        { makeTitle( signedBy ) || "Alex" }
      </address>
      <hr className={ strike } role="none" />
    </div>
  );
}

////** PROP TYPES **////
Signature.propTypes = {
  signedBy: PropTypes.string.isRequired,
  props: PropTypes.bool
}

export default Signature;