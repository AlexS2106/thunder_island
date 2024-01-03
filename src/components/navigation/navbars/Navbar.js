import React from "react";
import { v4 as uuid } from 'uuid';

import {
  navbar,
  displayed,
  hamburger,
  hamburgerClosed
} from "./Navbar.module.css";

import NavLink from "../links/NavLink";
import Search from "../../user-interactive/search/Search";

import { burger, bars } from "../../../support/functions/iconFunctions";
import useToggle from "../../../support/hooks/useToggle";
import useMediaQuery from "../../../support/hooks/useMediaQuery";

////** COMPONENT **////
const Navbar = () => {
  
  ////** STATE **////
  const [ open, toggleOpen ] = useToggle( false );
  const isWide = useMediaQuery( `(min-width: 900px)` );

  ////** VARIABLES **////
  //List of pages and links for navlinks
  const topMenu = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/recipes",
      name: "Recipes",
    },
    {
      link: "/english",
      name: "English",
    },
    {
      link: "/portfolio",
      name: "Portfolio",
    },
    {
      link: "/about",
      name: "About"
    },
  ];
  //open/close menu icons
  const closedMenuIcon = bars();
  const openMenuIcon = burger();
  ////** FUNCTIONS **////
  //Generates clickable links from the pages array (via topmenu in VARIABLES)
  const generateNavLinks = topMenu.map( page => {
    const { link, name } = page;
    return (
      <li key={ uuid() }>
        <NavLink
          key={ uuid() }
          linkTo={ link }
          innerText={ name }
        />
      </li>
    );
  } );
  //Sets state to open and close the navbar.
  const handleClick = () => {
    toggleOpen( !open );
  };
  
  ////** MARK UP **////
  return (
    <nav className={ `bgMedium ${ navbar } ${ isWide ? displayed : hamburger }` }>
      <ul className={ !open && !isWide ? hamburgerClosed : undefined }>
        { !isWide && <button onClick={ handleClick }>{ open ? openMenuIcon : closedMenuIcon }</button> }
        { generateNavLinks }
        <li>
        <Search />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;