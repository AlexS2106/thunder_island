import React from "react";
import PropTypes from "prop-types";

import "../../../support/styles/globalStyles.css";

import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import Navbar from "../../navigation/navbars/Navbar";
import Spacer from "../spacing/Spacer";

////** COMPONENT **////
const Layout = ( { ...props } ) => {

////** MARK UP **////  
  return (
    <>
      <Navbar />
      <Header />
      { props.children }
      <Spacer size={ 3 } />
      <Footer />
    </>
  );
}

////** PROP TYPES **////
Layout.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Layout;