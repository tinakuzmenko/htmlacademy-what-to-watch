export const ALL_GENRES = `All genres`;
export const TEXTAREA_COLOR = `rgba(255, 255, 255, 0.3)`;
export const MAX_SHOWN_GENRES = 10;
export const RATINGS_QUANTITY = 5;
export const SHOWN_MOVIES = 8;
export const MAX_SHOWN_MOVIES_LIKE_THIS = 4;

export enum Pages {
  MAIN = `main`,
  MOVIE = `movie`,
  VIDEO = `video`,
  SIGN_IN = `sign in`,
  ADD_REVIEW = `add review`,
  MY_LIST = `my list`,
}

export enum NavTabs {
  OVERVIEW = `Overview`,
  DETAILS = `Details`,
  REVIEWS = `Reviews`,
}

export enum smallVideoPlayer {
  WIDTH = `280`,
  HEIGHT = `175`,
}

export enum TimeInSeconds {
  MINUTE = 60,
}

export enum AuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`,
}

export enum Error {
  UNAUTHORIZED = 401,
}

export enum Review {
  MIN_LENGTH = 50,
  MAX_LENGTH = 400,
}

export enum AppRoute {
  MAIN = `/`,
  SIGN_IN = `/login`,
  MY_LIST = `/mylist`,
  MOVIE = `/films`,
  PLAYER = `/player`,
}

export enum Favorites {
  ADD = 1,
  REMOVE = 0,
}

interface ApiConfigInterface {
  URL: string;
  TIMEOUT: number;
  COOKIES: true;
}

export const ApiConfig: ApiConfigInterface = {
  URL: `https://4.react.pages.academy/wtw`,
  TIMEOUT: 5000,
  COOKIES: true
};

export const reviewSubmitButton: {
  [key: string]: string;
} = {
  post: `Post`,
  sending: `Sending...`,
};
