import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviePage from './movie-page.jsx';
import MovieOverview from '../movie-overview/movie-overview.jsx';
import MovieDetails from '../movie-details/movie-details.jsx';
import MovieReviews from '../movie-reviews/movie-reviews.jsx';
import {NavTabs} from '../../utils/constants.js';
import {movie, movies, reviews} from '../../utils/test-data.js';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MoviePage e2e tests`, () => {
  it(`Should render right screens on different states`, () => {
    const moviePageComponent = shallow(
        <MoviePage
          movieCard={movie}
          movies={movies}
          movieReviews={reviews}
          onSmallMovieCardClick={() => {}} />
    );
    moviePageComponent.setState({currentTab: ``});
    expect(moviePageComponent.find(MovieOverview)).toHaveLength(1);

    moviePageComponent.setState({currentTab: NavTabs.OVERVIEW});
    expect(moviePageComponent.find(MovieOverview)).toHaveLength(1);

    moviePageComponent.setState({currentTab: NavTabs.DETAILS});
    expect(moviePageComponent.find(MovieDetails)).toHaveLength(1);

    moviePageComponent.setState({currentTab: NavTabs.REVIEWS});
    expect(moviePageComponent.find(MovieReviews)).toHaveLength(1);
  });

  it(`Should render right screen on current tab click`, () => {
    const tabs = Object.values(NavTabs);

    const moviePageComponent = mount(
        <MoviePage
          movieCard={movie}
          movies={movies}
          movieReviews={reviews}
          onSmallMovieCardClick={() => {}} />
    );

    const instance = moviePageComponent.instance();

    const movieNavItems = moviePageComponent.find(`.movie-nav__item`);
    movieNavItems.forEach((movieNavItem, index) => {
      movieNavItem.simulate(`click`);
      instance._handleTabClick(tabs[index]);
      expect(moviePageComponent.state().currentTab).toEqual(tabs[index]);
    });
  });
});
