import React from "react";

import { header } from "./Header.module.css";

import { largeLogo } from "../../support/functions/staticImgFunctions";
import useMetadata from "../../support/hooks/useMetadata.query";

////** COMPONENT **////
const Header = () => {
  ////** GRAPHQL DATA **////
  const { title } = useMetadata();

  ////** VARIABLES **////
  const logo = largeLogo();

  ////** MARK UP **////
  return (
    <header className={`flexRow ${header}`}>
      {logo}
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
