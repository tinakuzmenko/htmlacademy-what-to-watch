import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieNav from './movie-nav';
import {NavTabs} from '../../helpers/constants';

Enzyme.configure({
  adapter: new Adapter(),
});

const tabs = Object.values(NavTabs);

describe(`MovieNav e2e tests`, () => {
  it(`Should pass the right argument of current tab be clicked`, () => {
    const onItemClick = jest.fn((args) => args);

    const movieNavComponent = shallow(
        <MovieNav
          navTabs={NavTabs}
          currentActiveItem={NavTabs.DETAILS}
          onItemClick={onItemClick}
        />
    );

    const movieNavTabs = movieNavComponent.find(`.movie-nav__link`);

    movieNavTabs.forEach((movieNavTab, index) => {
      movieNavTab.simulate(`click`, {preventDefault: onItemClick});
      expect(onItemClick).toHaveBeenCalledWith(tabs[index]);
    });
  });
});
