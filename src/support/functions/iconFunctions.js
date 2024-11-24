import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faAnglesRight,
  faAnglesLeft,
  faBurger,
  faBars,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export function singleArrowRight() {
  return (
    <FontAwesomeIcon
      icon={faAngleRight}
      size="1x"
    />
  );
}
export function singleArrowLeft() {
  return (
    <FontAwesomeIcon
      icon={faAngleLeft}
      size="1x"
    />
  );
}
export function doubleArrowRight() {
  return (
    <FontAwesomeIcon
      icon={faAnglesRight}
      size="1x"
    />
  );
}
export function doubleArrowLeft() {
  return (
    <FontAwesomeIcon
      icon={faAnglesLeft}
      size="1x"
    />
  );
}

export function burger() {
  return (
    <FontAwesomeIcon
      icon={faBurger}
      size="2x"
    />
  );
}
export function bars() {
  return (
    <FontAwesomeIcon
      icon={faBars}
      size="2x"
    />
  );
}
export function tick() {
  return (
    <FontAwesomeIcon
      icon={faCheck}
      size="3x"
    />
  );
}
export function cross() {
  return (
    <FontAwesomeIcon
      icon={faXmark}
      size="3x"
    />
  );
}
