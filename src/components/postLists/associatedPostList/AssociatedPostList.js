import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from 'uuid';

import {
  list,
  listItem
} from "./AssociatedPostList.module.css";

import Spacer from "../../layout/spacing/Spacer";
import MediumPost from "../../posts/medium/MediumPost";

////** COMPONENT **////
const AssociatedPostList = ( { postData } ) => {

////** MARK UP **////
  return (
    <div className={ `flexColumn bgLight ${list}` }>
      { postData.map( ( item ) => {
        return (
          <div key={ uuid() } className={ `bgLight ${ listItem }` }>
            <MediumPost
              showDate
              showAuthor
              hasPhotographer
              showSubCategories
              post={ item }
              innerText="Continue..." />
            <Spacer size={ 3 } />
          </div>
        )
      } ) }
    </div>
  );
}
////** PROP TYPES **////
AsideRight.propTypes = {
  postData: PropTypes.array.isRequired
}
export default AssociatedPostList;