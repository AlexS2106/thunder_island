import React from "react";
import propTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { mediumTileList, smallTileList, border } from "./TileList.module.css";

import Tile from "../../posts/tile/Tile";

const TileList = ({ tileListData, size = "small", withBorder = false }) => {
  const _border = withBorder ? `${border}` : ``;
  const _tileList =
    size === "medium" ? `${mediumTileList}` : `${smallTileList}`;

  return (
    <ul className={`${_tileList} ${_border}`}>
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
  size: propTypes.string.isRequired,
  withBorder: propTypes.bool.isRequired,
};

export default TileList;
