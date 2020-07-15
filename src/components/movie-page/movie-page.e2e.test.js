import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MoviePage from './movie-page';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import {NavTabs} from '../../helpers/constants';
import {movie, movies, reviews} from '../../helpers/test-data';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MoviePage e2e tests`, () => {
  it(`Should render right screens on different states`, () => {
    const moviePageComponent = shallow(
        <MoviePage
          isMainPage={false}
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

    const moviePageComponent = shallow(
        <MoviePage
          isMainPage={false}
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
