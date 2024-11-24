import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import {} from "./dropdown.module.css";

import { makeTitle } from "../../../support/functions/utility";

const Dropdown = ({ text, dropdownData, selectedOption, onChange }) => {
  return (
    <div>
      <p>{`Set ${text}`}</p>
      <select
        value={selectedOption}
        onChange={onChange}>
        {dropdownData.map((item) => (
          <option
            key={uuid()}
            value={item}>
            {item}
          </option>
        ))}
      </select>
      <p>
        {makeTitle(text)}: {selectedOption}
      </p>
    </div>
  );
};

////** PROP TYPES **////
Dropdown.propTypes = {
  text: PropTypes.string.isRequired,
  dropdownData: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selectedOption: PropTypes.any,
};

export default Dropdown;
