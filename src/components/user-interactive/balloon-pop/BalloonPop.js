import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { container, gameArea, balloon, scoring } from "./BalloonPop.module.css";

import Button from "../../buttons/Button";
import Spacer from "../../layout/spacing/Spacer";
import TextEmphasisBoxMinor from "../../typography/text-emphasis/TextEmphasisBoxMinor";

import { makeTitle } from "../../../support/functions/utility";

////** COMPONENT **////
const BalloonPop = ({ exerciseData }) => {
  ////** STATE **////
  //Initial state for answers
  const [gameWords, setGameWords] = useState([]);
  const [targetWord, setTargetWord] = useState(null);
  const [score, setScore] = useState(0);
  const [lastTouched, setLastTouched] = useState(null);
  //Shuffle function
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
  //Generate logic to begin the game
  const initialiseGame = useCallback(() => {
    // Shuffle the words
    const durationOptions = [4, 5, 6, 7, 8, 9, 10, 11, 12, 15];

    const shuffledWords = shuffleArray([...exerciseData]).map((word) => {
      //Adds differences in speed to vary animation so balloons don't get stuck behind each other.
      const baseDuration =
        durationOptions[Math.floor(Math.random() * durationOptions.length)];
      const variedDuration = baseDuration + Math.random() * 1.5;
      return {
        ...word,
        right: `${Math.random() * 83}%`,
        animationDuration: `${variedDuration.toFixed(2)}s`,
      };
    });

    // Shuffle the array of colours and ensure a colour is assigned uniquely
    const shuffledColors = shuffleArray([
      "red",
      "maroon",
      "indigo",
      "darkolivegreen",
      "purple",
      "pink",
      "green",
      "orange",
      "teal",
      "darkblue",
      "black",
    ]);

    // Assign a colour to each word, cycle the colours if there aren't enough
    const wordsWithColors = shuffledWords.map((word, index) => ({
      ...word,
      color: shuffledColors[index % shuffledColors.length],
    }));

    setGameWords(wordsWithColors);
    setTargetWord(wordsWithColors[0] || null);
    setScore(0);
  }, [exerciseData]);

  useEffect(() => {
    initialiseGame();
  }, [initialiseGame]);

  //organises various states when a balloon is selected
  const handleBalloonClick = (clickedWord) => {
    if (targetWord && clickedWord === targetWord.value2) {
      setScore(score + 1);
      const newWords = gameWords.filter((word) => word.value2 !== clickedWord);
      setGameWords(newWords);
      setTargetWord(newWords.length > 0 ? newWords[0] : null);
    }
  };

  // Handle mouse and touch interactions
  const handleInteraction = (event, clickedWord) => {
    event.preventDefault(); // Prevent ghost clicks on mobile
    if (event.type === "touchstart") {
      if (lastTouched === clickedWord) return; // Prevents a duplicate touch event
      setLastTouched(clickedWord);
    }
    handleBalloonClick(clickedWord);
  };

  return (
    <div className={`${container} flexCol`}>
      <Spacer size={3} />
      <TextEmphasisBoxMinor>
        <p className="textCenter">
          Find:{" "}
          <strong>{targetWord && makeTitle(`${targetWord?.value1}`)}</strong>
        </p>
      </TextEmphasisBoxMinor>
      <div className={gameArea}>
        {gameWords.map((word) => (
          <p
            key={word.value1}
            className={`${balloon} flexCol textCenter`}
            style={{
              right: word.right,
              animationDuration: word.animationDuration,
              color: word.color, // Use the preassigned color
              border: `5px solid ${word.color}`,
            }}
            onClick={(e) => handleInteraction(e, word.value2)}
            onTouchStart={(e) => handleInteraction(e, word.value2)}>
            {word.value2}
          </p>
        ))}
        <p className={`${scoring} shadowText`}>Score: {score}</p>
        <Spacer size={3} />
        {gameWords.length === 0 && (
          <Button
            innerText="Restart Game"
            onClick={initialiseGame}
          />
        )}
      </div>
    </div>
  );
};

//// ** PROP TYPES ** ////
BalloonPop.propTypes = {
  exerciseData: PropTypes.array.isRequired,
};

export default BalloonPop;
