import * as React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";

import {Pages, AuthorizationStatus, AppRoute} from '../../helpers/constants';
import {getAuthorizationStatus, getUserInfo} from '../../store/user/selectors';

const PageHeader = (props) => {
  const {currentPage, isSignedIn, userInfo, children} = props;

  const isSignInPage = currentPage === Pages.SIGN_IN;
  const isMyListPage = currentPage === Pages.MY_LIST;
  const isWithBreadcrumbs = currentPage === Pages.ADD_REVIEW;

  const isWithTitle = isSignInPage || isMyListPage;

  const pageTitleElement = (
    <h1 className="page-title user-page__title">
      {isSignInPage && `Sign in`}
      {isMyListPage && `My list`}
    </h1>
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

  return (
    <header className={`page-header ${isWithTitle ? `user-page__head` : `movie-card__head`}`}>
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
      {isWithBreadcrumbs && children}
      {isSignInPage || isMyListPage ? pageTitleElement : null}
      {!isSignInPage && userBlockElement}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
  userInfo: getUserInfo(state),
});

export {PageHeader};
export default connect(mapStateToProps)(PageHeader);
