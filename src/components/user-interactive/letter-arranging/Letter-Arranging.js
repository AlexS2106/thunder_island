import React, { useState, useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";

import {
  startingBoxes,
  endingBoxes,
  boxText,
  isCorrect,
  isIncorrect,
  ghostElement,
} from "./Letter-Arranging.module.css";

import Button from "../../buttons/Button";

import {
  makeTitle,
  redefineLanguageValuesAsValue1AndValue2ForData,
} from "../../../support/functions/utility";

const LetterArranging = ({ data, lang1, lang2, onReset }) => {
  const [letters, setLetters] = useState([]);
  const [mixedLetters, setMixedLetters] = useState([]);
  const [slots, setSlots] = useState([]);
  const [translation, setTranslation] = useState("");
  const [matching, setMatching] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);
  //Generates a "ghost element" to follow the user's finger around the screen
  const [ghost, setGhost] = useState({
    visible: false,
    x: 0,
    y: 0,
    content: "",
  });

  const initialiseGame = useCallback(() => {
    const redefinedData = redefineLanguageValuesAsValue1AndValue2ForData(
      data,
      lang1,
      lang2,
    );
    const splitLetters = redefinedData.value2.split("");
    const randomisedSplitLetters = Array(splitLetters.length).fill(null);
    splitLetters.forEach((letter) => {
      let randomNum;
      do {
        randomNum = Math.floor(Math.random() * splitLetters.length);
      } while (randomisedSplitLetters[randomNum] !== null);
      randomisedSplitLetters[randomNum] = letter;
    });
    setLetters(splitLetters);
    setMixedLetters(randomisedSplitLetters);
    setSlots(Array(splitLetters.length).fill(null));
    setMatching(Array(splitLetters.length).fill(false));
    setTranslation(redefinedData.value1);
    setGameFinished(false);
  }, [data, lang1, lang2]);

  useEffect(() => {
    initialiseGame(data);
  }, [data, initialiseGame]);

  useEffect(() => {
    const checkMatching = matching.every(Boolean);
    if (checkMatching) {
      setGameFinished(true);
    } else {
      setGameFinished(false);
    }
  }, [matching]);

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

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("text/plain", index);
  };

  const handleDrop = (event, slotIndex) => {
    const letterIndex = event.dataTransfer.getData("text");
    const letter = mixedLetters[letterIndex];

    const newSlots = [...slots];
    newSlots[slotIndex] = letter;
    setSlots(newSlots);
    if (letter === letters[slotIndex]) {
      setMatching((prevArray) =>
        prevArray.map((item, index) => (index === slotIndex ? true : item)),
      );
    } else {
      setMatching((prevArray) =>
        prevArray.map((item, index) => (index === slotIndex ? false : item)),
      );
    }
    event.preventDefault();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };
  function handleOnTouchStart(e, index) {
    const touch = e.touches[0]; // Get touch position
    dragged.current = index; // Store the index of the element being touched
    // Get the content of the dragged element
    const itemContent = e.target.textContent || "";

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
    if (dragged.current !== null && draggedOver.current !== null) {
      const letter = mixedLetters[dragged.current];
      const slotIndex = draggedOver.current;

      const newSlots = [...slots];
      newSlots[slotIndex] = letter;
      setSlots(newSlots);

      if (letter === letters[slotIndex]) {
        setMatching((prevArray) =>
          prevArray.map((item, index) => (index === slotIndex ? true : item)),
        );
      } else {
        setMatching((prevArray) =>
          prevArray.map((item, index) => (index === slotIndex ? false : item)),
        );
      }
    }

    // Reset refs after dropping
    dragged.current = null;
    draggedOver.current = null;

    // Hide ghost element
    setGhost({ visible: false, x: 0, y: 0, content: "" });
  }

  return (
    <div ref={gridRef}>
      <p>
        Arrange the letters to mean <em>{translation}</em> in {makeTitle(lang2)}
        .
      </p>
      <div className={`flexRow`}>
        {mixedLetters.map((letter, index) => (
          <div
            key={index}
            className={`${startingBoxes} ${boxText} flexRow`}
            style={{}}
            role="button"
            tabIndex={0}
            data-first="true"
            data-index={index}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}
            onTouchStart={(e) => handleOnTouchStart(e, index)}
            onTouchMove={(e) => handleOnTouchMove(e, index)}
            onTouchEnd={(e) => handleOnTouchEnd(e)}>
            {letter}
          </div>
        ))}
      </div>
      <div className={`flexRow`}>
        {slots.map((slot, index) => (
          <div
            key={index}
            className={`${endingBoxes} ${boxText} flexRow ${matching[index] ? isCorrect : isIncorrect}`}
            role="button"
            tabIndex={0}
            data-first="true"
            data-index={index}
            onDrop={(event) => handleDrop(event, index)}
            onDragOver={handleDragOver}
            onTouchStart={(e) => handleOnTouchStart(e, index)}
            onTouchMove={(e) => handleOnTouchMove(e, index)}
            onTouchEnd={(e) => handleOnTouchEnd(e)}>
            {slot}
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
      {gameFinished && (
        <div>
          <p>Well done!</p>
          <Button
            innerText="Next?"
            onClick={onReset}
          />
        </div>
      )}
    </div>
  );
};

//// ** PROP TYPES ** ////
LetterArranging.propTypes = {
  data: PropTypes.object.isRequired,
  lang1: PropTypes.string.isRequired,
  lang2: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default LetterArranging;
