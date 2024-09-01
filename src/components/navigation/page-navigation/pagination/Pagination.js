import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { v4 as uuid } from "uuid";

import { pagination, arrow } from "./Pagination.module.css";

import {
  doubleArrowRight,
  doubleArrowLeft,
} from "../../../../support/functions/iconFunctions";

////** COMPONENT **////
const Pagination = ({ pageInfo: { pageCount, currentPage } }) => {
  ////** FUNCTIONS **////
  //Creates list with numbers for the pages, each one is a clickable link to the page of that number. (via props.pageinfo.pageCount)
  const paginationArray = Array.from({ length: pageCount }, (_, index) => {
    return (
      <li key={uuid()}>
        <Link to={index === 0 ? `/` : `/${index + 1}`}> {index + 1} </Link>
      </li>
    );
  });

  //Takes the entire page list from paginationArray (above) and chops it into smaller parts, showing the current page plus one plus a clickable arrow on both sides. e.g 1,2,3 <2,3,4> <20,21,22> 21,22,23
  const paginationList = paginationArray.map((el, index) => {
    let i = index + 1; //because the page numbers start at 1
    let nextPageEl = currentPage + 1;
    let nextArrow = currentPage + 2;
    let prevPageEl = currentPage - 1;
    let prevArrow = currentPage - 2;

    if (/*is a middle page*/ currentPage > 3 && currentPage <= pageCount - 2) {
      if (i === prevArrow)
        return (
          <li key={uuid()}>
            <Link
              to={`/${prevArrow}`}
              className={arrow}>
              {" "}
              {doubleArrowLeft()}
            </Link>
          </li>
        );
      if (i === currentPage || i === nextPageEl || i === prevPageEl) return el;
      if (i === nextArrow)
        return (
          <li key={uuid()}>
            <Link
              to={`/${nextArrow}`}
              className={arrow}>
              {" "}
              {doubleArrowRight()}
            </Link>
          </li>
        );
    } else if (currentPage /*is third page*/ === 3) {
      if (i === prevArrow)
        return (
          <li key={uuid()}>
            <Link
              to={`/`}
              className={arrow}>
              {" "}
              {doubleArrowLeft()}
            </Link>
          </li>
        );
      if (i === currentPage || i === nextPageEl || i === prevPageEl) return el;
      if (i === nextArrow)
        return (
          <li key={uuid()}>
            <Link
              to={`/${nextArrow}`}
              className={arrow}>
              {" "}
              {doubleArrowRight()}
            </Link>
          </li>
        );
    } else if (currentPage /*is second page*/ === 2) {
      if (i === currentPage || i === nextPageEl || i === prevPageEl) return el;
      if (i === nextArrow)
        return (
          <li key={uuid()}>
            <Link
              to={`/${nextArrow}`}
              className={arrow}>
              {" "}
              {doubleArrowRight()}
            </Link>
          </li>
        );
    } else if (currentPage /*is first page*/ === 1) {
      if (i === currentPage || i === nextPageEl || i === nextPageEl + 1)
        return el;
    } else if (currentPage /*is last page*/ === pageCount) {
      if (i === currentPage || i === prevPageEl) return el;
      if (i === prevArrow)
        return (
          <li key={uuid()}>
            <Link
              to={`/${prevArrow}`}
              className={arrow}>
              {" "}
              {doubleArrowLeft()}
            </Link>
          </li>
        );
    } else if (currentPage /*is penultimate page*/ === pageCount - 1) {
      if (i === currentPage || i === prevPageEl || i === nextPageEl) return el;
      if (i === prevArrow)
        return (
          <li key={uuid()}>
            <Link
              to={`/${prevArrow}`}
              className={arrow}>
              {" "}
              {doubleArrowLeft()}
            </Link>
          </li>
        );
    }
  });

  ////** MARK UP **////
  return (
    <nav className={pagination}>
      <ul className="flexRow">{paginationList}</ul>
    </nav>
  );
};
////** PROP TYPES **////
Pagination.propTypes = {
  pageInfo: PropTypes.shape({
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
  }).isRequired,
};

export default Pagination;
