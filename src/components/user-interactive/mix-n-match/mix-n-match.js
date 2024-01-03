import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from 'uuid';

import { 
  grid,
  isCorrect,
  isIncorrect
} from "./mix-n-match.module.css";

import Spacer from "../../../components/layout/spacing/Spacer";


  ////** COMPONENT **////
const MixNMatch1 = ( { exerciseData } ) => {
  
  ////** STATE **////
  //Initial state for answers  
  const [ answers, setAnswers ] = useState( () => {

    const randoms1 = makeRandomNums( exerciseData );
    const randoms2 = makeRandomNums( exerciseData );

    const initialState = exerciseData.map( ( answer, index ) => {
      answer.leftLoc = randoms1[ index ];
      answer.rightLoc = randoms2[ index ];
      return answer;
    } );
    return initialState;

  } );

  //Sorts the answers into their new orders on each side: left and right.
  const [ lefts, setlefts ] = useState( () => [ ...answers ].sort( ( a, b ) => a.leftLoc - b.leftLoc ), [ answers ] );
  const [ rights, setrights ] = useState( () => [ ...answers ].sort( ( a, b ) => a.rightLoc - b.rightLoc ), [ answers ] );

  //Awaits a successgfully completed exercise
  const [ success, setSuccess ] = useState( false );
  
  //Sets refs for drag and drop functionality.
  const dragged = useRef( null );
  const draggedOver = useRef( null );
  
  //Maps through each answer object to see if right side and left side answers match correctly and sets the success attribute accordingly of those that do.
  useEffect( () => {
    let matchingIds = lefts.map( ( left, index ) => left.id === rights[ index ].id ? left.id : null );

    const _answers = [ ...answers ];
    const __answers = _answers.map( answer => {
      matchingIds.indexOf( answer.id ) !== -1 ? answer.success = true : answer.success = false;
      return answer;
    } );

    setAnswers( [ ...__answers ] );

  }, [ lefts, rights, answers ] )
  
  //Checks if all answers are successfully completed and sets the success state to true
  useEffect( () => {
    const answerValues = Object.values( answers );
    const checkSuccess = answerValues.filter( answer => answer.success );
    if ( checkSuccess.length === answers.length ) { setSuccess( true ) };
  }, [ answers ] );


  ////** FUNCTIONS **////
  //Generates an array of unique random numbers
  function makeRandomNums ( arr ) {
    var randoms = new Set();
    while ( randoms.size < arr.length ) {
      randoms.add( Math.floor( Math.random() * arr.length - 1 ) + 1 );
    };
    return ( [ ...randoms.values() ] );
  }
  //Drag function logic
  const onDragEndHandler = ( e ) => {

    let draggedLoc = dragged.current;
    let draggedOverLoc = draggedOver.current;
    
    if ( e.target.hasAttribute( "right" ) ) {
      let _rights = [ ...rights ];

      const draggedOverItem = _rights.splice( draggedOverLoc, 1, {} )[ 0 ];
      const draggedItem = _rights.splice( draggedLoc, 1, {} )[ 0 ];

      _rights.splice( draggedLoc, 1, draggedOverItem );
      _rights.splice( draggedOverLoc, 1, draggedItem );

      setrights( _rights );
      
    } else if ( e.target.hasAttribute( "left" ) ) {
      let _lefts = [ ...lefts ];

      const draggedOverItem = _lefts.splice( draggedOverLoc, 1, {} )[ 0 ];
      const draggedItem = _lefts.splice( draggedLoc, 1, {} )[ 0 ];

      _lefts.splice( draggedOverLoc, 1, draggedItem );
      _lefts.splice( draggedLoc, 1, draggedOverItem );

      setlefts( _lefts );

    };

  }

  ////** MARK UP **////
  return (
    <>
      <div className={ grid }>
        <div>
          { lefts.map( ( answer, index ) =>
            <div
              key={ uuid() }
              className={ answer.success ? isCorrect : isIncorrect }
              left="true"
              draggable
              onDragStart={ () => dragged.current = index }
              onDragEnter={ () => draggedOver.current = index }
              onDragOver={ ( e ) => e.preventDefault() }
              onDragEnd={ ( e ) => onDragEndHandler( e ) }>
              { answer.left }
            </div>
          ) }
        </div>
        <div>
          { rights.map( ( answer, index ) =>
            <div
              key={ uuid() }
              className={ answer.success ? isCorrect : isIncorrect }
              right="true"
              draggable
              onDragStart={ () => dragged.current = index }
              onDragEnter={ () => draggedOver.current = index }
              onDragOver={ ( e ) => e.preventDefault() }
              onDragEnd={ ( e ) => onDragEndHandler( e ) }>
              { answer.right }
            </div>
          ) }
        </div>
      </div>
      <Spacer size={ 3 } />
      { success ? <p className="textCenter">Congratulations, you did it!</p> : null }
    </>
  );
}
  
////** PROP TYPES **////
MixNMatch1.propTypes = {
   exerciseData: PropTypes.array.isRequired, 
}

export default MixNMatch1;
