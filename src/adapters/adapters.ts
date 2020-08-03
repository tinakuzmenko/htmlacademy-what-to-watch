import {MovieInterface, UserInfoInterface} from '../types';

interface ServerMovie {
  [`name`]: string;
  [`genre`]: string;
  [`released`]: number;
  [`background_color`]: string;
  [`background_image`]: string;
  [`preview_image`]: string;
  [`poster_image`]: string;
  [`id`]: number;
  [`description`]: string;
  [`rating`]: number;
  [`scores_count`]: number;
  [`director`]: string;
  [`starring`]: Array<string>;
  [`run_time`]: number;
  [`preview_video_link`]: string;
  [`video_link`]: string;
  [`is_favorite`]: boolean;
}

interface ServerUserInfo {
  [`id`]: number;
  [`email`]: string;
  [`name`]: string;
  [`avatar_url`]: string;
}

export const createMovie = (movie: ServerMovie): MovieInterface => {
  return {
    title: movie.name,
    genre: movie.genre,
    date: movie.released,
    backgroundColor: movie.background_color,
    background: movie.background_image,
    poster: movie.preview_image,
    posterImage: movie.poster_image,
    id: movie.id,
    description: movie.description,
    rating: movie.rating,
    votes: movie.scores_count,
    director: movie.director,
    starring: movie.starring,
    runTime: movie.run_time,
    preview: movie.preview_video_link,
    videoLink: movie.video_link,
    isFavorite: movie.is_favorite,
  };
};

export const createUser = (userInfo: ServerUserInfo): UserInfoInterface => {
  return {
    id: userInfo.id,
    email: userInfo.email,
    name: userInfo.name,
    avatarUrl: `https://4.react.pages.academy${userInfo.avatar_url}`,
  };
};
