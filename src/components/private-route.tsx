import * as React from 'react';
import {RouterProps} from 'react-router';
import {Route, Redirect} from "react-router-dom";
import {AppRoute, AuthorizationStatus} from '../helpers/constants';
import {getAuthorizationStatus} from '../store/user/selectors';
import {connect} from 'react-redux';

interface PrivateRouteProps {
  render: (routeProps: RouterProps) => React.ReactNode;
  path: string;
  exact: boolean;
  authorizationStatus: string;
}

const PrivateRoute = ({
  exact,
  path,
  render,
  authorizationStatus
}: PrivateRouteProps) => {
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export default connect(mapStateToProps)(PrivateRoute);
