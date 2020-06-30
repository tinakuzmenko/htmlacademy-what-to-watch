import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const movieCard = {
  title: `Bohemian Rhapsody`,
  genre: `Documentary`,
  date: `2018`,
  background: `https://placeimg.com/1300/512/nature`,
  poster: `img/bohemian-rhapsody.jpg`,
  id: 178345,
  description: [`The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).`],
  rating: `8,0`,
  ratingDescription: `Good`,
  votes: 800,
  director: `Bryan Singer`,
  starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
};

const movies = [
  {
    title: `Bohemian Rhapsody`,
    genre: `Documentary`,
    date: `2018`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `img/bohemian-rhapsody.jpg`,
    id: 178345,
    description: [`The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).`],
    rating: `8,0`,
    ratingDescription: `Good`,
    votes: 800,
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
  },
  {
    title: `Aviator`,
    genre: `Drama`,
    date: `2004`,
    background: `https://placeimg.com/1300/512/nature`,
    poster: `img/aviator.jpg`,
    id: 167456,
    description: [`A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`],
    rating: `7,5`,
    ratingDescription: `Normal`,
    votes: 1650,
    director: `Martin Scorsese`,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`],
    preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
  }];

describe(`App`, () => {
  it(`Should render correctly with movies titles array`, () => {
    const tree = renderer
      .create(<App
        movieCard={movieCard}
        movies={movies}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
