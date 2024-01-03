import React from "react";
import PropTypes from "prop-types";

import {
  grid,
  wide
} from "./StandardGrid.module.css";

////** COMPONENT **////
const StandardGrid = ( { size, children } ) => { 

  let addedWidth;
  let err;
  if ( size === 1 ) addedWidth = wide;
  if ( size === 2 ) {err = new Error("medium")};
  if ( size === 3 ) { err = new Error( "small" ) };
  if ( err ) { console.log( `Set a width setting for <StandardGrid></StandardGrid> component for size ${ err }` ); }
  
  ////** MARK UP **////
  return (
    <div className={ `${grid} ${addedWidth}` }>
      { children }
    </div>
  );
}

////** PROP TYPES **////
StandardGrid.propTypes = {
children: PropTypes.array.isRequired,
size: PropTypes.number.isRequired
}

export default StandardGrid;