import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import withShowMore from './with-show-more';
import {movie, movies} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';
import {Pages} from '../../helpers/constants';

const MockComponent = () => {
  return (
    <div></div>
  );
};

const mockStore = configureStore([]);

it(`withShowMore is rendered correctly`, () => {
  const MockComponentWrapped = withShowMore(MockComponent);

  const store = mockStore({
    [NameSpace.DATA]: {
      movieCard: movie,
      movies,
    },
    [NameSpace.APP_STATE]: {
      activeGenre: `Drama`,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <MockComponentWrapped
          currentPage={Pages.MAIN}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
