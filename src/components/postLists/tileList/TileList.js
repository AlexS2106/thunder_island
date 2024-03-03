import React from "react";
import propTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { tileList, border } from "./TileList.module.css";

import Tile from "../../posts/tile/Tile";

const TileList = ({ tileListData, withBorder }) => {
  const addedClasses = withBorder ? `${border}` : ``;

  return (
    <ul className={`${tileList} ${addedClasses}`}>
      {tileListData.map((item) => (
        <li key={uuid()}>
          <Tile tileData={item} />
        </li>
      ))}
    </ul>
  );
};

TileList.propTypes = {
  tileListData: propTypes.array.isRequired,
  withBorder: propTypes.bool.isRequired,
};

export default TileList;
