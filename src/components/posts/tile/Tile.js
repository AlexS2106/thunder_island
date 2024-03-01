import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import SimpleLink from "../../navigation/links/SimpleLink";

const Tile = ({ tileData }) => {
  const { frontmatter } = tileData;
  const { title, slug, portraitImage, alt } = frontmatter;
  return (
    <>
      <GatsbyImage
        image={getImage(portraitImage)}
        alt={alt}
      />
      <SimpleLink
        linkTo={`/recipes/${slug}`}
        innerText={title}
      />
    </>
  );
};

Tile.propTypes = {
  tileData: PropTypes.object.isRequired,
};

export default Tile;
