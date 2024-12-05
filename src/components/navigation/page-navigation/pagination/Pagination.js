import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { v4 as uuid } from "uuid";

import { pagination, arrow } from "./Pagination.module.css";

import {
  doubleArrowRight,
  doubleArrowLeft,
} from "../../../../support/functions/iconFunctions";

import useMediaQuery from "../../../../support/hooks/useMediaQuery";

const Pagination = ({ pageInfo: { pageCount, currentPage } }) => {
  ////** STATE **////
  const isMobile = useMediaQuery(`(max-width: 650px)`);
  ////** FUNCTIONS **////
  // Create list with numbers for the pages, each one is a clickable link to the page of that number.
  const generatePageLink = (pageNumber) => (
    <li key={uuid()}>
      <Link to={pageNumber === 1 ? `/` : `/${pageNumber}`}>{pageNumber}</Link>
    </li>
  );

  // Generate arrows for navigation
  const generateNavigationLink = (to, label, icon) => (
    <li key={uuid()}>
      <Link
        to={to}
        className={arrow}
        role="button"
        tabIndex={0}
        aria-label={label}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            window.location.href = to;
          }
        }}>
        {icon}
      </Link>
    </li>
  );

  // Generate pagination items
  const paginationItems = [];

  if (currentPage > 1) {
    paginationItems.push(
      generateNavigationLink(
        `/${currentPage - 1}`,
        "Previous",
        doubleArrowLeft(),
      ),
    );
  }
  if (!isMobile) {
    if (currentPage > 2) {
      paginationItems.push(generatePageLink(1));
      if (currentPage > 3) {
        paginationItems.push(<li key={uuid()}>...</li>);
      }
    }
  }

  if (currentPage > 1) {
    paginationItems.push(generatePageLink(currentPage - 1));
  }

  paginationItems.push(generatePageLink(currentPage));

  if (currentPage < pageCount) {
    paginationItems.push(generatePageLink(currentPage + 1));
  }
  if (!isMobile) {
    if (currentPage < pageCount - 1) {
      if (currentPage < pageCount - 2) {
        paginationItems.push(<li key={uuid()}>...</li>);
      }
      paginationItems.push(generatePageLink(pageCount));
    }
  }

  if (currentPage < pageCount) {
    paginationItems.push(
      generateNavigationLink(`/${currentPage + 1}`, "Next", doubleArrowRight()),
    );
  }

  ////** MARK UP **////
  return (
    <nav className={pagination}>
      <ul className="flexRow">{paginationItems}</ul>
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
