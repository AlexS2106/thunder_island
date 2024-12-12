import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import {
  startingBoxes,
  endingBoxes,
  boxText,
  isCorrect,
  isIncorrect,
} from "./spell-words.module.css";

import Button from "../../buttons/Button";

import { redefineLanguageValuesAsValue1AndValue2ForData } from "../../../support/functions/utility";

const SpellWords = ({ data, lang1, lang2, onReset }) => {
  const [letters, setLetters] = useState([]);
  const [mixedLetters, setMixedLetters] = useState([]);
  const [slots, setSlots] = useState([]);
  const [translation, setTranslation] = useState("");
  const [matching, setMatching] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);

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

  return (
    <div>
      <p>
        Arrange the letters to mean <em>{translation}</em> in Maltese.
      </p>
      <div className={`flexRow`}>
        {mixedLetters.map((letter, index) => (
          <div
            key={index}
            className={`${startingBoxes} ${boxText} flexRow`}
            style={{}}
            role="button"
            tabIndex={0}
            draggable
            onDragStart={(event) => handleDragStart(event, index)}>
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
            onDrop={(event) => handleDrop(event, index)}
            onDragOver={handleDragOver}>
            {slot}
          </div>
        ))}
      </div>
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
SpellWords.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SpellWords;
