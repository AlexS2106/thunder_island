import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import SimpleLink from "../../navigation/links/SimpleLink";

const Tile = ({ tileData }) => {
  ////** VARIABLES **////
  //Unpacking data
  const { frontmatter } = tileData;
  const { title, slug, portraitImage, alt } = frontmatter;

  //Memoised link
  const linkTo = useMemo(() => `/recipes/${slug}`, [slug]);

  ////** MARK UP**////
  return (
    <>
      <GatsbyImage
        image={getImage(portraitImage)}
        alt={alt}
      />
      <SimpleLink
        linkTo={linkTo}
        innerText={title}
      />
    </>
  );
};

Tile.propTypes = {
  tileData: PropTypes.object.isRequired,
};

export default Tile;
