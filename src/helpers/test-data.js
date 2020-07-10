export const movie = {
  title: `Snatch`,
  genre: `Crime`,
  date: `2000`,
  background: `https://placeimg.com/1300/512/nature`,
  poster: `img/snatch.jpg`,
  id: 123890,
  description: [`Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`],
  rating: `8,3`,
  ratingDescription: `Good`,
  votes: 1500,
  director: `Guy Ritchie`,
  starring: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/1/19/Ziteil%2C_aerial_video.webm`,
  runTime: `1h 44m`,
};

export const movies = [
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
    runTime: `2h 14m`,
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
    runTime: `2h 50m`,
  },
];

export const currentMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: `2014`,
  background: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  id: 190123,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege`,
  rating: `8,9`,
  ratingDescription: `Very good`,
  votes: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/7/72/Landwasserviadukt%2C_aerial_video.webm`,
  runTime: `1h 39m`,
};

export const reviews =
[{
  movie: `Snatch`,
  reviews: [{
    author: `Kate Muir`,
    rating: `8,9`,
    date: `December 24, 2019`,
    content: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    id: 345234523,
  },
  {
    author: `Bill Goodykoontz`,
    rating: `8,0`,
    date: `November 18, 2015`,
    content: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    id: 22345234,
  },
  {
    author: `Amanda Greever`,
    rating: `8,0`,
    date: `November 18, 2015`,
    content: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    id: 4563456345,
  },
  {
    author: `Matthew Lickona`,
    rating: `7,2`,
    date: `December 20, 2016`,
    content: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    id: 3456345437,
  }]
},
{
  movie: `The Grand Budapest Hotel`,
  reviews: [{
    author: `Kate Muir`,
    rating: `8,9`,
    date: `December 24, 2019`,
    content: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    id: 345234523,
  },
  {
    author: `Bill Goodykoontz`,
    rating: `8,0`,
    date: `November 18, 2015`,
    content: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    id: 22345234,
  },
  {
    author: `Amanda Greever`,
    rating: `8,0`,
    date: `November 18, 2015`,
    content: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    id: 4563456345,
  },
  {
    author: `Matthew Lickona`,
    rating: `7,2`,
    date: `December 20, 2016`,
    content: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    id: 3456345437,
  }]
}];

export const genres = [`All genres`, `Drama`, `Thriller`, `Comedy`];
