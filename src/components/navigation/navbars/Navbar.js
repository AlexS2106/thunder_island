import React, { useMemo } from "react";
import { v4 as uuid } from "uuid";

import {
  navbar,
  displayed,
  hamburger,
  hamburgerClosed,
} from "./Navbar.module.css";

import NavLink from "../links/NavLink";
import Search from "../../user-interactive/search/Search";

import { burger, bars } from "../../../support/functions/iconFunctions";
import useToggle from "../../../support/hooks/useToggle";
import useMediaQuery from "../../../support/hooks/useMediaQuery";
import { siteMenu } from "../../../support/types/indices";

////** COMPONENT **////
const Navbar = () => {
  ////** STATE **////
  const [open, toggleOpen] = useToggle(false);
  const isWide = useMediaQuery(`(min-width: 900px)`);

  ////** VARIABLES **////
  //Navigation menu
  const topMenu = siteMenu;
  //open/close menu icons
  const closedMenuIcon = bars();
  const openMenuIcon = burger();
  ////** FUNCTIONS **////
  //Generates clickable links from the pages array (via topmenu in VARIABLES)
  const generateNavLinks = useMemo(
    () =>
      topMenu.map((page) => {
        const { link, name } = page;
        return (
          <li key={uuid()}>
            <NavLink
              key={uuid()}
              linkTo={link}
              innerText={name}
            />
          </li>
        );
      }),
    [topMenu],
  );

  //Sets state to open and close the navbar.
  const handleClick = () => {
    toggleOpen(!open);
  };

  ////** MARK UP **////
  return (
    <nav className={`bgMedium ${navbar} ${isWide ? displayed : hamburger}`}>
      <ul className={!open && !isWide ? hamburgerClosed : undefined}>
        {!isWide && (
          <button onClick={handleClick}>
            {open ? openMenuIcon : closedMenuIcon}
          </button>
        )}
        {generateNavLinks}
        <li>
          <Search />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
