import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import {
  carousel,
  centered,
  spaced,
  colorPadding,
} from "./Carousel.module.css";

import SmallPost from "../../posts/small/SmallPost";

import {
  singleArrowLeft,
  singleArrowRight,
} from "../../../support/functions/iconFunctions";
import useMediaQuery from "../../../support/hooks/useMediaQuery";

////** COMPONENT **////
const Carousel = ({ carouselData, title, innerText }) => {
  ////** STATE **////
  const [move, setMove] = useState(0);
  // Create carousel size based off device width
  const by1 = useMediaQuery(`(min-width: 450px)`);
  const by2 = useMediaQuery(`(min-width: 650px)`);

  let numPicsShowingOnCarousel = 3;
  if (!by2) {
    numPicsShowingOnCarousel = 2;
  }
  if (!by1) {
    numPicsShowingOnCarousel = 1;
  }
  const multiplyBy = 33;

  ////** FUNCTIONS **////
  //Acts on a user clicking to move the carousel left or right
  const clickHandler = (value) => {
    if (value === "increment") {
      setMove((prevMove) =>
        prevMove >=
        (carouselData.length - numPicsShowingOnCarousel) * multiplyBy
          ? (carouselData.length - numPicsShowingOnCarousel) * multiplyBy
          : prevMove + multiplyBy,
      );
    } else if (value === "decrement") {
      setMove((prevMove) =>
        prevMove - multiplyBy < 0 ? 0 : prevMove - multiplyBy,
      );
    }
  };

  ////** MARK UP **////
  return (
    <div className={carousel}>
      <div className={`flexRow ${centered}`}>
        {move !== 0 ? (
          <button onClick={() => clickHandler("decrement")}>
            <span className={colorPadding}>{singleArrowLeft()}</span>
          </button>
        ) : null}
        <h3>{title}</h3>
        {move <
          (carouselData.length - numPicsShowingOnCarousel) * multiplyBy && (
          <button onClick={() => clickHandler("increment")}>
            <span className={colorPadding}>{singleArrowRight()}</span>
          </button>
        )}
      </div>
      <div
        className={`flexRow ${spaced}`}
        style={{
          width: `${carouselData.length * multiplyBy}vw`,
          transform: `translateX( -${move}vw )`,
        }}>
        {carouselData.map((item) => (
          <SmallPost
            key={uuid()}
            postData={item}
            innerText={innerText}
          />
        ))}
      </div>
    </div>
  );
};

////** MARK UP **////
Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  carouselData: PropTypes.array.isRequired,
  innerText: PropTypes.string.isRequired,
};

export default Carousel;
