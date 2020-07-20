import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Pages} from '../../helpers/constants';

const PageHeader = ({isMainPage}) => {
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a
          className="logo__link"
          href={!isMainPage ? `main.html` : null}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
        </div>
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  isMainPage: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isMainPage: state.currentPage === Pages.MAIN,
});

export {PageHeader};
export default connect(mapStateToProps)(PageHeader);
