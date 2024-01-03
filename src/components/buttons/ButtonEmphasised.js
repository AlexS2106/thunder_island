import React from "react";
import PropTypes from "prop-types";

import {
  btn
} from "./ButtonEmphasised.module.css";

////** COMPONENT **////
const ButtonEmphasised = ( { innerText, onClick} ) => {

////** MARK UP **////
  return (
    <button
      className={ btn } 
      onClick={ onClick } >
      { innerText }
    </button>
  );

}

////** PROP TYPES **////
ButtonEmphasised.propTypes = {
  innerText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ButtonEmphasised;