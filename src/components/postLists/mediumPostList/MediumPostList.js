import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from 'uuid';

import {
  list
} from "./MediumPostList.module.css";

import MediumPost from "../../posts/medium/MediumPost";
import Spacer from "../../layout/spacing/Spacer";

////** COMPONENT **////
const MediumPostList = ( { postData, ...props } ) => {

////** FUNCTIONS **////
  const generateMediumPostList = postData.map( ( item ) => (
      <div key={ uuid() } >
        <MediumPost
          postData={ item }
          { ...props }
        />
        <Spacer size={ 3 } />
      </div>
  ) );
  
////** MARK UP **////
  return (
    <div className={ `flexColumn bgLight ${ list }` }>
      { generateMediumPostList }
    </div>
  );
}

////** PROP TYPES **////
MediumPostList.propTypes = {
  postData: PropTypes.array.isRequired,
  innerText: PropTypes.string.isRequired,
  excerptLength: PropTypes.number,
  showDate: PropTypes.bool,
  showAuthor: PropTypes.bool,
  hasPhotographer: PropTypes.bool,
  showSubCategories: PropTypes.bool,
}

export default MediumPostList;