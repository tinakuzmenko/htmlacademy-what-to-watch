import React from "react";
import {Route, Redirect} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from '../helpers/constants';
import {getAuthorizationStatus} from '../store/user/selectors';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';

const PrivateRoute = (props) => {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (authorizationStatus !== AuthorizationStatus.NO_AUTH)
          ? render(routeProps)
          : <Redirect to={AppRoute.SIGN_IN} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);
