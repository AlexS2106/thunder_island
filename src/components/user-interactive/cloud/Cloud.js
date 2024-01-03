import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import {
  cloud,
  btn,
  btnActive
} from "./Cloud.module.css"


import { makeTitle, makeSlug } from "../../../support/functions/utility";


////** COMPONENTS **////
const Cloud = ( { title, menuData, selected, onClick } ) => { 
  ////** FUNCTIONS **////
  //Generates a list, button and onclick prop for each tag
  const generateCloud = menuData.map( item => {

    let btnClasses = makeSlug( selected ) === item ? `${ btn } ${ btnActive }` : btn;

    return (
      <li key={ uuid() }>
        <button
          value={ item }
          className={ btnClasses }
          onClick={ onClick }>
          { makeTitle( item ) }
        </button>
      </li>
    );
  } );

  ////** MARK UP **////
  return (
    <section className={ `flexColumn ${cloud}` }>
      <header>
        <h3 className="shadowText">
          { title }
        </h3>
      </header>
      <ul>
        { generateCloud }
      </ul>
    </section>
  );
}

////** PROP TYPES **////
Cloud.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  menuData: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired
}

export default Cloud;