import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { v4 as uuid } from "uuid";

import { search, searchForm, searchDropdown } from "./Search.module.css";

import { makeTitle, debounce } from "../../../support/functions/utility";
import useSlugs from "../../../support/hooks/useSlugs.query";
import { mainCategories } from "../../../support/types/indices";

////** COMPONENT **////
const Search = () => {
  const slugs = useSlugs();
  ////** STATE **////
  //State for the index and user query
  const [index, setIndex] = useState([]);
  const [query, setQuery] = useState("");
  //State for making the dropdown to show the search results
  const [dropdown, setDropdown] = useState([]);
  const [show, setShow] = useState(false);
  //Populates the index state
  useEffect(() => {
    const _slugs = slugs.map(
      (node) =>
        `${node.frontmatter.mainCategories[0]}/${node.frontmatter.slug}`,
    );
    const __slugs = _slugs.concat(mainCategories);
    setIndex(__slugs);
  }, [slugs]);
  //Component did mount state for dropdown - will only alter if dropdown state alters
  useEffect(() => {
    setShow(dropdown.length !== 0);
  }, [dropdown]);

  ////** FUNCTIONS **////
  //Manages events on user input
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const debouncedMakeTheDropdownList = debounce(() => {
      if (value.length > 2) {
        const regExp = new RegExp(value.replaceAll(" ", "-"), "i");
        const list = index.filter((i) => regExp.test(i));
        setDropdown(list);
      } else {
        setDropdown([]);
      }
    }, 300);
    debouncedMakeTheDropdownList();
  };
  //Manages events on user submit (enter press)
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  ////** MARK UP **////
  return (
    <div className={search}>
      <form
        className={searchForm}
        onSubmit={handleSubmit}>
        <label htmlFor="query">{""}</label>
        <input
          type="text"
          id="query"
          placeholder="Search"
          value={query}
          onChange={handleChange}
        />
      </form>
      {show && (
        <div style={{ display: "flex", position: "fixed" }}>
          <ul className={`flexCol ${searchDropdown}`}>
            {dropdown.map((item) => (
              <Link
                key={uuid()}
                to={`/${item}`}>
                {makeTitle(
                  item.includes("/") ? item.slice(item.indexOf("/")) : item,
                )}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
