export const createMovie = (movie) => {
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

export const createUser = (userInfo) => {
  return {
    id: userInfo.id,
    email: userInfo.email,
    name: userInfo.name,
    avatarUrl: `https://4.react.pages.academy${userInfo.avatar_url}`,
  };
};
