import React from "react";
import PropTypes from "prop-types";

import {
  chat,
  wide,
  medium,
  narrow
} from "./Chat.module.css";


const Chat = ( { size, children } ) => { 
  let width;
  if ( size === 1 ) { width = wide }
  if ( size === 2 ) { width = medium }
  if ( size === 3 ) { width = narrow }
  return (
    <div className={ `${ chat } ${ width }` }>
      { children }
    </div>
  );
}

export default Chat;

////** PROP TYPES **////
Chat.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  size: PropTypes.number.isRequired
}