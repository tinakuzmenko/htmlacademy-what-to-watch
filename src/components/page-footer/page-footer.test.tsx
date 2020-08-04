import * as React from 'react';
import {Router} from 'react-router-dom';
import * as renderer from 'react-test-renderer';

import PageFooter from './page-footer';
import history from '../../history';

describe(`Footer`, () => {
  it(`Should render correctly when is main page`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <PageFooter />
          </Router>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
