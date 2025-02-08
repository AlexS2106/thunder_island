import React, { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";

import {
  grid,
  isCorrect,
  isIncorrect,
  ghostElement,
} from "./Word-Match.module.css";

import Spacer from "../../layout/spacing/Spacer";

import { makeWordMatchExerciseDataObjectArray } from "../../../support/functions/utility";

////** COMPONENT **////
const WordMatch1 = ({ exerciseData }) => {
  ////** STATE **////
  //Initial state for answers
  const [data, setData] = useState(
    makeWordMatchExerciseDataObjectArray(exerciseData),
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
  //Generates a "ghost element" to follow the user's finger around the screen
  const [ghost, setGhost] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: "",
  });

  //Sets refs for drag and drop functionality.
  const dragged = useRef(null);
  const draggedOver = useRef(null);
  //holds the grid still during touchscreen event
  const gridRef = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const container = gridRef.current;
    const preventTouchScroll = (e) => e.preventDefault();

    // Explicitly set passive to false to allow preventDefault()
    container.addEventListener("touchstart", preventTouchScroll, {
      passive: false,
    });
    container.addEventListener("touchmove", preventTouchScroll, {
      passive: false,
    });

    return () => {
      container.removeEventListener("touchstart", preventTouchScroll);
      container.removeEventListener("touchmove", preventTouchScroll);
    };
  }, []);

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
        success: matchingIds.includes(item.id),
      })),
    );
  }, [memoizedArrayOfLocs1, memoizedArrayOfLocs2]);

  //Checks if all answers are successfully completed and sets the success state to true
  useEffect(() => {
    setSuccess(data.every((item) => item.success));
  }, [data]);

  ////** FUNCTIONS **////
  //Drag function logic
  function handleOnDragStart(e, index) {
    if (!success) {
      dragged.current = index;
      draggedOver.current = null; // Reset draggedOver on new drag
    }
  }
  function handleOnDragOver(e, index) {
    e.preventDefault();
    if (!success) {
      draggedOver.current = index;
    }
  }
  function handleOnDrop(e) {
    e.preventDefault();
    handleOnDragEnd(e);
  }
  function handleOnDragEnd(e) {
    if (!success && dragged.current !== null && draggedOver.current !== null) {
      const draggedLoc = dragged.current;
      const draggedOverLoc = draggedOver.current;

      // Ensure the target element exists
      const element = document.elementFromPoint(ghost.x, ghost.y) || e.target;
      if (!element) return;

      // Determine which set is being interacted with
      const isFirstSet = e.target.hasAttribute("data-first");
      const isSecondSet = e.target.hasAttribute("data-second");
      if (!isFirstSet && !isSecondSet) return; // Ensure valid drag-drop
      // Choose correct array
      const sourceArray = isFirstSet ? [...arrayOfLocs1] : [...arrayOfLocs2];

      // Create a new array reference
      const newArray = [...sourceArray];

      // Swap items in the correct array
      [newArray[draggedLoc], newArray[draggedOverLoc]] = [
        newArray[draggedOverLoc],
        newArray[draggedLoc],
      ];

      // Update correct state
      if (isFirstSet) {
        setArrayOfLocs1(newArray);
      } else {
        setArrayOfLocs2(newArray);
      }

      // Reset drag references
      dragged.current = null;
      draggedOver.current = null;
    }
  }

  function handleOnTouchStart(e, index) {
    const touch = e.touches[0]; // Get touch position
    dragged.current = index; // Store the index of the element being touched
    const itemContent = e.target.textContent || ""; // Get the content of the dragged element

    setGhost({
      visible: true,
      x: touch.clientX,
      y: touch.clientY,
      content: itemContent, // Store the text or content of the element
    });
  }

  function handleOnTouchMove(e) {
    const touch = e.touches[0]; // Get touch position
    setGhost((prev) => ({
      ...prev,
      x: touch.clientX,
      y: touch.clientY,
    }));

    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!element) return;

    const index = element.getAttribute("data-index");
    if (index !== null) {
      draggedOver.current = parseInt(index, 10);
    }
  }

  function handleOnTouchEnd(e) {
    // Find the element where the touch ended
    const element = document.elementFromPoint(ghost.x, ghost.y);
    if (!element) return;

    // Get the index of the touched-over item
    const index = element.getAttribute("data-index");

    // Ensure valid values before calling
    if (index !== null) {
      draggedOver.current = parseInt(index, 10);
    }
    // Call `handleOnDragEnd` to swap items
    if (draggedOver.current !== null) {
      handleOnDragEnd(e);
    }
    // Hide the ghost element
    setGhost({ visible: false, x: 0, y: 0, content: "" });
  }

  ////** MARK UP **////
  return (
    <>
      <div
        className={grid}
        ref={gridRef}>
        <div>
          {arrayOfLocs1.map((item, index) => (
            <div
              key={`1${item}${index}`}
              className={
                data.find((dataItem) => dataItem.id === item.id)?.success
                  ? isCorrect
                  : isIncorrect
              }
              role="button"
              tabIndex={0}
              data-first="true"
              data-index={index}
              draggable
              onDragStart={(e) => handleOnDragStart(e, index)}
              onDragOver={(e) => handleOnDragOver(e, index)}
              onDrop={(e) => handleOnDrop(e)}
              onTouchStart={(e) => handleOnTouchStart(e, index)}
              onTouchMove={handleOnTouchMove}
              onTouchEnd={(e) => handleOnTouchEnd(e)}>
              {item.itemAtLoc1}
            </div>
          ))}
        </div>
        <div>
          {arrayOfLocs2.map((item, index) => (
            <div
              key={`2${item}${index}`}
              className={
                data.find((dataItem) => dataItem.id === item.id)?.success
                  ? isCorrect
                  : isIncorrect
              }
              role="button"
              tabIndex={0}
              data-second="true"
              draggable
              data-index={index}
              onDragStart={(e) => handleOnDragStart(e, index)}
              onDragOver={(e) => handleOnDragOver(e, index)}
              onDrop={(e) => handleOnDrop(e)}
              onTouchStart={(e) => handleOnTouchStart(e, index)}
              onTouchMove={handleOnTouchMove}
              onTouchEnd={(e) => handleOnTouchEnd(e)}>
              {item.itemAtLoc2}
            </div>
          ))}
        </div>
        {ghost.visible && (
          <div
            className={ghostElement}
            style={{
              top: `${ghost.y}px`,
              left: `${ghost.x}px`,
            }}>
            {ghost.content}
          </div>
        )}
      </div>
      <Spacer size={3} />
      {success ? (
        <p className="textCenter">Congratulations, you did it!</p>
      ) : null}
    </>
  );
};

////** PROP TYPES **////
WordMatch1.propTypes = {
  exerciseData: PropTypes.array.isRequired,
};

export default WordMatch1;
