import React from 'react';
import PropTypes from 'prop-types';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import withShowMore from './with-show-more';
import {movie, movies} from '../../helpers/test-data';
import NameSpace from '../../store/name-space';

Enzyme.configure({
  adapter: new Adapter(),
});

const MockComponent = (props) => {
  const {onShowMoreButtonClick} = props;

  return (
    <div>
      <button
        onClick={onShowMoreButtonClick}
      ></button>
    </div>
  );
};

MockComponent.propTypes = {
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const mockStore = configureStore([]);

describe(`HOC withShowMore e2e tests`, () => {
  it(`Should call props callback on child button click`, () => {
    const MockComponentWrapped = withShowMore(MockComponent);
    const onShowMoreButtonClick = jest.fn();

    const store = mockStore({
      [NameSpace.DATA]: {
        movieCard: movie,
        movies,
      },
      [NameSpace.APP_STATE]: {
        currentPage: `main`,
      },
    });

    const wrapper = mount(
        <Provider store={store}>
          <MockComponentWrapped
            onShowMoreButtonClick={onShowMoreButtonClick} />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    );

    wrapper.find(`button`).simulate(`click`);
    expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
  });
});
