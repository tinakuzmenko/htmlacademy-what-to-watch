import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {PageHeader} from './page-header';
import {Router} from 'react-router-dom';
import history from '../../history';
import {Pages} from '../../helpers/constants';

const userInfo = {
  id: 1,
  email: `sadas@gmail.com`,
  name: `asdasd`,
  avatarUrl: `https://4.react.pages.academy/wtw/asda.jpg`,
};

describe(`PageHeader`, () => {
  it(`Should render correctly when is main page and user signed in`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PageHeader
              currentPage={Pages.MAIN}
              isWithBreadcrubs={false}
              isSignedIn={true}
              onSignInClick={() => {}}
              userInfo={userInfo}
            />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly when is main page and user is not signed in`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PageHeader
              currentPage={Pages.ADD_REVIEW}
              isWithBreadcrubs={false}
              isSignedIn={false}
              onSignInClick={() => {}}
              userInfo={userInfo}
            />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly when is not main page and not sign in page`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PageHeader
              currentPage={Pages.ADD_REVIEW}
              isWithBreadcrubs={false}
              isSignedIn={true}
              userInfo={userInfo}
              onSignInClick={() => {}}
            />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should render correctly when is sign in page`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PageHeader
              currentPage={Pages.SIGN_IN}
              isWithBreadcrubs={false}
              isSignedIn={false}
              userInfo={userInfo}
              onSignInClick={() => {}}
            />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
