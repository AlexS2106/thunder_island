import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from 'uuid';

import {
  list,
  btn,
  btnActive
} from "./UserChoiceFilter.module.css";

import { makeTitle, makeSlug } from "../../../support/functions/utility";


////** COMPONENT **////
const UserChoiceFilter = ( { menuData, selected, onClick } ) => {
  ////** FUNCTIONS **////
  //Generates a list with clickable options. The onclick func and button text reside in the parent.
  const generateMenu = menuData.map( ( item ) => {
    return (
      <li
        key={ uuid() }>
        <button
          value={ item }
          className={ makeSlug(selected) === item ? btnActive : btn }
          onClick={ onClick } >
          { makeTitle( item ) }
        </button>
      </li>
    );
  } );

    ////** MARK UP **////
  return (
    <ul className={ list }>
      { generateMenu }
    </ul>
    
  );
}

////** PROP TYPES **////
UserChoiceFilter.propTypes = {
  menuData: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default UserChoiceFilter;