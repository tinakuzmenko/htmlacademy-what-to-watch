import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieNav from './movie-nav.jsx';
import {NavTabs} from '../../helpers/constants.js';

Enzyme.configure({
  adapter: new Adapter(),
});

const tabs = Object.values(NavTabs);

describe(`MovieNav e2e tests`, () => {
  it(`Should pass the right argument of current tab be clicked`, () => {
    const onTabClick = jest.fn((args) => args);

    const movieNavComponent = shallow(
        <MovieNav
          navTabs={NavTabs}
          currentActiveTab={NavTabs.DETAILS}
          onTabClick={onTabClick}
        />
    );

    const movieNavTabs = movieNavComponent.find(`.movie-nav__link`);

    movieNavTabs.forEach((movieNavTab, index) => {
      movieNavTab.simulate(`click`, {preventDefault: onTabClick});
      expect(onTabClick).toHaveBeenCalledWith(tabs[index]);
    });
  });
});
