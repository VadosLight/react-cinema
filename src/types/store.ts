export type TShortMovieInfo = {
  Title: string;
  Year: string;
  imdbID: string;
  Type?: string;
  Poster?: string;
};

export type TMovieList = Array<TShortMovieInfo>;

export type TFullMovieInfo = {
  [key: string]: string | Array<object>;
};
