import React, { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";

import { grid, isCorrect, isIncorrect } from "./mix-n-match.module.css";

import Spacer from "../../../components/layout/spacing/Spacer";

import { makeMixMatchExerciseDataObjectArray } from "../../../support/functions/utility";

////** COMPONENT **////
const MixNMatch1 = ({ exerciseData }) => {
  ////** STATE **////
  //Initial state for answers
  const [data, setData] = useState(
    makeMixMatchExerciseDataObjectArray(exerciseData),
  );
  //Sort answers into a new order as per random sorting by utility function
  const [arrayOfLocs1, setArrayOfLocs1] = useState(
    [...data].sort((a, b) => a.loc1 - b.loc1),
  );
  const [arrayOfLocs2, setArrayOfLocs2] = useState(
    [...data].sort((a, b) => a.loc2 - b.loc2),
  );
  //Awaits a successfully completed exercise
  const [success, setSuccess] = useState(false);

  //Sets refs for drag and drop functionality.
  const dragged = useRef(null);
  const draggedOver = useRef(null);

  //Set memoisation
  const memoizedArrayOfLocs1 = useMemo(() => arrayOfLocs1, [arrayOfLocs1]);
  const memoizedArrayOfLocs2 = useMemo(() => arrayOfLocs2, [arrayOfLocs2]);

  //Maps through each data item object to see if loc1 and loc2 match correctly and sets the success attribute accordingly of those that do.
  useEffect(() => {
    const matchingIds = memoizedArrayOfLocs1
      .filter((item, index) => item.id === memoizedArrayOfLocs2[index].id)
      .map((item) => item.id);
    setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        success: matchingIds.includes(item.id) ? true : false,
      })),
    );
  }, [memoizedArrayOfLocs1, memoizedArrayOfLocs2]);

  //Checks if all answers are successfully completed and sets the success state to true
  useEffect(() => {
    const allCorrect = data.every((item) => item.success);
    setSuccess(allCorrect);
  }, [data]);

  ////** FUNCTIONS **////
  //Drag function logic
  function handleOnDragStart(e, index) {
    if (!success) {
      dragged.current = index;
    }
  }

  function handleOnDragOver(e, index) {
    e.preventDefault();
    if (!success) {
      draggedOver.current = index;
    }
  }

  function handleOnDragEnd(e) {
    if (!success) {
      const draggedLoc = dragged.current;
      const draggedOverLoc = draggedOver.current;

      if (draggedLoc === null || draggedOverLoc === null) return;

      const updatedLocs = e.target.hasAttribute("data-first")
        ? [...arrayOfLocs1]
        : [...arrayOfLocs2];

      const draggedOverItem = updatedLocs[draggedOverLoc];
      const draggedItem = updatedLocs[draggedLoc];
      updatedLocs[draggedLoc] = draggedOverItem;
      updatedLocs[draggedOverLoc] = draggedItem;

      e.target.hasAttribute("data-first")
        ? setArrayOfLocs1(updatedLocs)
        : setArrayOfLocs2(updatedLocs);

      dragged.current = null;
      draggedOver.current = null;
    }
  }
  ////** MARK UP **////
  return (
    <>
      <div className={grid}>
        <div>
          {arrayOfLocs1.map((item, index) => (
            <div
              key={`1${item}${index}`}
              className={
                data.find(
                  (dataItem) =>
                    dataItem.id === item.id && dataItem.success === true,
                )
                  ? isCorrect
                  : isIncorrect
              }
              role="button"
              tabIndex={0}
              data-first="true"
              draggable
              onDragStart={(e) => handleOnDragStart(e, index)}
              onDragOver={(e) => handleOnDragOver(e, index)}
              onDragEnd={(e) => handleOnDragEnd(e)}>
              {item.itemAtLoc1}
            </div>
          ))}
        </div>
        <div>
          {arrayOfLocs2.map((item, index) => (
            <div
              key={`2${item}${index}`}
              className={
                data.find(
                  (dataItem) =>
                    dataItem.id === item.id && dataItem.success === true,
                )
                  ? isCorrect
                  : isIncorrect
              }
              role="button"
              tabIndex={0}
              data-second="true"
              draggable
              onDragStart={(e) => handleOnDragStart(e, index)}
              onDragOver={(e) => handleOnDragOver(e, index)}
              onDragEnd={(e) => handleOnDragEnd(e)}>
              {item.itemAtLoc2}
            </div>
          ))}
        </div>
      </div>
      <Spacer size={3} />
      {success ? (
        <p className="textCenter">Congratulations, you did it!</p>
      ) : null}
    </>
  );
};

////** PROP TYPES **////
MixNMatch1.propTypes = {
  exerciseData: PropTypes.array.isRequired,
};

export default MixNMatch1;
