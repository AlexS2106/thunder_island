import React from "react";
import PropTypes from "prop-types";

import {
  wide
} from "./layoutStyles.module.css";


  ////** COMPONENT **////
const Main = ( { size, children } ) => {

  let width;
  let err;
  if ( size === 1 ) width = wide;
  if ( size === 2 ) {err = new Error("medium")};
  if ( size === 3 ) {err = new Error("small")};
  if ( err ) { console.log( `Set a width setting for <Main></Main> component for size ${ err }` ); }

  ////** MARK UP **////
  return (
    <main className={`flexColumn ${width}`}>
      { children }
    </main>
  );
}

////** PROP TYPES **////
Main.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.number.isRequired
}

export default Main;