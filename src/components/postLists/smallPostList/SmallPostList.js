import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from 'uuid';

import {
  list
} from "./SmallPostList.module.css";

import SmallPost from "../../posts/small/SmallPost";
import Spacer from "../../layout/spacing/Spacer";


////** COMPONENT **////
const SmallPostList = ( { postData, innerText } ) => {

  const generateSmallPostList = postData.map( ( item ) => (
    <div key={ uuid() }>
      <SmallPost
        postData={ item }
        innerText={ innerText }
      />
      <Spacer size={ 3 } />
    </div>
  ) );

    ////** MARK UP **////
  return (
    <div className={ ` flexColumn bgLight ${list}` }>
      { generateSmallPostList }
    </div>
  );
}

////** PROP TYPES **////
SmallPostList.propTypes = {
  postData: PropTypes.array.isRequired,
  innerText: PropTypes.string.isRequired
}

export default SmallPostList;