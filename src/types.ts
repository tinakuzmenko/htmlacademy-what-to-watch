export interface MovieInterface {
  title: string;
  genre: string;
  date: number;
  backgroundColor: string;
  background: string;
  poster: string;
  posterImage: string;
  id: number;
  description: string;
  rating: number;
  votes: number;
  director: string;
  starring: Array<string>;
  runTime: number;
  preview: string;
  videoLink: string;
  isFavorite: boolean;
}

export interface UserInfoInterface {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
}

export interface ReviewInterface {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}
