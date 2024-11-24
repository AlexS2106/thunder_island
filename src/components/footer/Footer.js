import React from "react";

import { footer, credits } from "./Footer.module.css";

import useMetadata from "../../support/hooks/useMetadata.query";
import { smallLogo } from "../../support/functions/staticImgFunctions";

const Footer = () => {
  ////** GRAPHQL DATA **////
  const { title, author, stack, techs } = useMetadata();

  ////** VARIABLES **////
  const logo = smallLogo();

  ////** FUNCTIONS **////
  const techList = techs.map((tech, index) =>
    index === techs.length - 1 ? `and ${tech}` : `${tech}, `,
  );
  const generateCopyright = `@Copyright ${title} ${new Date().getFullYear()}`;

  return (
    <footer className={footer}>
      <div className="flexCol">{logo}</div>
      <div className={credits}>
        <p>{generateCopyright} </p>
        <div className="flexRow">
          <div className="flexCol">
            <p>A {stack} Website</p>
            <p>{techList}</p>
          </div>
          <div className="flexCol">
            <p>Logo Design</p>
            <p>by Claire Murray</p>
          </div>
          <div className="flexCol">
            <p>
              All the design, coding and content (with the exception of the
              nicest photographs - credit given where known) of Thunder Island
              is the result of the interests, hobbies and dabblings of {author}.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
