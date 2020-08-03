import * as React from 'react';
import renderer from 'react-test-renderer';
import {movie} from '../../helpers/test-data';
import AddReview from './add-review';
import NameSpace from '../../store/name-space';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import history from '../../history';
import {Router} from 'react-router-dom';

const mockStore = configureStore([]);

describe(`Catalog`, () => {
  it(`Should render correctly`, () => {
    const store = mockStore({
      [NameSpace.APP_STATE]: {
        currentMovie: movie,
      },
      [NameSpace.USER]: {
        userInfo: {
          id: 1,
          email: `sadas@gmail.com`,
          name: `asdasd`,
          avatarUrl: `https://4.react.pages.academy/wtw/asda.jpg`,
        }
      },
    });

    const tree = renderer
      .create(
          <Router history={history}>
            <Provider store={store}>
              <AddReview
                currentMovie={movie}
                isDataSending={false}
                isSendingError={false}
                onSubmitClick={() => {}}
                onFormChange={() => {}}
                onRatingChange={() => {}}
                onReviewChange={() => {}}
                isSubmitDisabled={false}
              />
            </Provider>
          </Router>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
