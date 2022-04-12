import React from "react";
import PropTypes from "prop-types";

import "./Loader.scss";

const Loader = ({ isAnimating }) => {
  return (
    <div className="loader-container">
      <div
        className={`loader-container__progress ${
          isAnimating ? "is-animating" : ""
        }`}
      />
    </div>
  );
};

Loader.propTypes = {
  isAnimating: PropTypes.bool.isRequired,
};

Loader.defaultProps = {
  isAnimating: false,
};

export default Loader;
