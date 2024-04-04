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

  const by1 = useMediaQuery(`(min-width: 450px)`);
  const by2 = useMediaQuery(`(min-width: 650px)`);

  let numPicsShowingOnCarousel = 3;
  if (!by2) {
    numPicsShowingOnCarousel = 2;
  }
  if (!by1) {
    numPicsShowingOnCarousel = 1;
  }
  console.log(move);
  const multiplyBy = 33;
  ////** FUNCTIONS **////
  //Generates the carousel posts
  const generateCarousel = carouselData.map((item) => (
    <SmallPost
      key={uuid()}
      postData={item}
      innerText={innerText}
    />
  ));
  //Acts on a user clicking to move the carousel left or right
  const clickHandler = (value) => {
    if (value === "increment") {
      move >= carouselData * multiplyBy
        ? setMove(carouselData * multiplyBy)
        : setMove(move + multiplyBy);
    } else if (value === "decrement") {
      move - multiplyBy < 0 ? setMove(0) : setMove(move - multiplyBy);
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
        (carouselData.length * multiplyBy) / (carouselData.length / 2) ? (
          <button onClick={() => clickHandler("increment")}>
            <span className={colorPadding}>{singleArrowRight()}</span>
          </button>
        ) : null}
      </div>
      <div
        className={`flexRow ${spaced}`}
        style={{
          width: `${carouselData.length * multiplyBy}vw`,
          transform: `translateX( -${move}vw )`,
        }}>
        {generateCarousel}
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
