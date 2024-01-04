import React from "react";
import PropTypes from "prop-types";

import {
  prettyDate
} from "./Date.module.css";

////** COMPONENT **////
const Date = ( { date } ) => { 

  if ( date.indexOf( "-" ) ) { date.replace( "-", "." ) };

  const prettyYear = date.slice( 0, date.indexOf( "." ) );

function prettifyMonth ( date ) {
    const month = date.slice( date.indexOf( "." ) + 1, date.lastIndexOf( "." ) );
    month.toString();
    const remove0 = month.indexOf( "0" ) === 0 ? month.slice( 1 ) : month;
    const monthAsNum = Number( remove0 );
    switch ( monthAsNum ) {
      case 1: return "January";
      case 2: return "February";
      case 3: return "March";
      case 4: return "April";
      case 5: return "May";
      case 6: return "June";
      case 7: return "July";
      case 8: return "August";
      case 9: return "September";
      case 10: return "October";
      case 11: return "November";
      case 12: return "December";
      default:
        return "A Month Of The Year";
    }
  };
  const prettyMonth = prettifyMonth( date );
  
  
function prettifyDay ( date ) {
  const day = date.slice( date.lastIndexOf( "." ) + 1, date.length );
  const dayStr = day.toString().indexOf( "0" ) === 0 ? day.slice(1) : day;
  const firstNum = dayStr.slice( -1 ); 

  let suffix;
  switch (firstNum) { 
    case "1": suffix = "st";
      break;
    case "2": suffix = "nd";
      break;
    case "3": suffix = "rd";
      break;
    default: suffix = "th";
  }
    return dayStr.concat( suffix );
  }

const prettyDay = prettifyDay( date );

  ////** MARK UP **////
  return (
    <time
      dateTime={ date }
      className={ prettyDate }>
      <span>{`${ prettyDay } ${ prettyMonth } ${ prettyYear }`}</span>
    </time>
  );
}

////** PROP TYPES **////
Date.propTypes = {
  date: PropTypes.string.isRequired
}

export default Date;