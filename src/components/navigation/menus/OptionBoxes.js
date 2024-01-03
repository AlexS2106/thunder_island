import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import {
  boxes
} from "./OptionBoxes.module.css";

import Button from "../../buttons/Button";

import { makeTitle } from "../../../support/functions/utility";


////** COMPONENT **////
const OptionBoxes = ( { menu, onClick } ) => {

  ////** FUNCTIONS **////
  //Generates a grid of boxes with a clickable button centre and a picture background (via props.menu) The onclick func and button innertext reside in the parent
  const generateBoxes = menu.map( ( item ) => {

    return (
      <div key={ uuid() } className="flexColumn">
        { item.image }
        <Button
          innerText={ makeTitle(item.name) }
          role="link"
          onClick={ onClick } />
      </div>
    );
  } );

  ////** MARK UP **////
  return (
    <div className={ boxes }>
      { generateBoxes }
    </div>
  );
}

////** PROP TYPES **////
OptionBoxes.propTypes = {
  menu: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default OptionBoxes;