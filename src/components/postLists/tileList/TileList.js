import React from "react";
import propTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { tileList, border } from "./TileList.module.css";

import Tile from "../../posts/tile/Tile";

const TileList = ({ tileListData, withBorder }) => {
  const classes = withBorder ? `${tileList} ${border}` : `${tileList}`;

  return (
    <ul className={classes}>
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
};

export default TileList;
