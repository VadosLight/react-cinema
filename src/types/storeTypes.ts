export type TShortMovieInfo = {
  Title: string;
  Year: string;
  imdbID: string;
  Type?: string;
  Poster?: string;
};

export type TMovieList = Array<TShortMovieInfo>;

export type TFullMovieInfo = {
  [key: string]: string | Array<any>;
};

export type TSortBy = "name A-Z" | "name Z-A" | "Year min" | "Year max";

export type TAction = {
  readonly type: string;
  readonly [key: string]: string;
};

export type TState = {
  movieMore: TFullMovieInfo;
  movieList: TMovieList;
  sortBy: TSortBy;
  pageNumber: number;
  title: string;
};
