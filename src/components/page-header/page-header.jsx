import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import {Pages, AuthorizationStatus, AppRoute} from '../../helpers/constants';

import {getCurrentPage, getCurrentMovie} from '../../store/app-state/selectors';
import {getAuthorizationStatus, getUserInfo} from '../../store/user/selectors';

const PageHeader = (props) => {
  const {isSignInPage, isSignedIn, isWithBreadcrubs, userInfo, movieTitle} = props;

  const signInPageTitle = (
    <h1 className="page-title user-page__title">Sign in</h1>
  );

  const userBlockElement = (
    <div className="user-block">
      {isSignedIn &&
        <Link to={AppRoute.MY_LIST}>
          <div className="user-block__avatar">
            <img src={userInfo.avatarUrl} alt={userInfo.name} width="63" height="63" />
          </div>
        </Link>}
      {!isSignedIn &&
        <Link
          to={AppRoute.SIGN_IN}
          className="user-block__link"
        >
        Sign in
        </Link>}
    </div>
  );

  const breadcrumbsElement = (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="movie-page.html" className="breadcrumbs__link">{movieTitle}</a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={`page-header ${isSignInPage ? `user-page__head` : `movie-card__head`}`}>
      <div className="logo">
        <Link
          className="logo__link"
          to={AppRoute.MAIN}
        >
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {isWithBreadcrubs && breadcrumbsElement}
      {isSignInPage ? signInPageTitle : userBlockElement}
    </header>
  );
};

PageHeader.propTypes = {
  isMainPage: PropTypes.bool.isRequired,
  isSignInPage: PropTypes.bool.isRequired,
  isSignedIn: PropTypes.bool.isRequired,
  isWithBreadcrubs: PropTypes.bool.isRequired,
  userInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
  movieTitle: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isMainPage: getCurrentPage(state) === Pages.MAIN,
  isSignInPage: getCurrentPage(state) === Pages.SIGN_IN,
  isWithBreadcrubs: getCurrentPage(state) === Pages.ADD_REVIEW,
  isSignedIn: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  userInfo: getUserInfo(state),
  movieTitle: getCurrentMovie(state).title,
});

export {PageHeader};
export default connect(mapStateToProps)(PageHeader);
