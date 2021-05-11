export type TFullMovieInfo = {
  readonly [key: string]: string | Array<any>;
};

export type TMovieList = Array<TShortMovieInfo>;

export type TShortMovieInfo = {
  readonly Title: string;
  readonly Year: string;
  readonly imdbID: string;
  readonly Type?: string;
  readonly Poster?: string;
};

export type TSortBy = "name A-Z" | "name Z-A" | "Year min" | "Year max";

export type TState = {
  readonly movieMore: TFullMovieInfo;
  readonly movieList: TMovieList;
  readonly sortBy: TSortBy;
  readonly pageNumber: number;
  readonly title: string;
};

export type TAction = {
  readonly type: string;
  // readonly [key: string]: any;
  readonly movieMore?: TFullMovieInfo;
  readonly movieList?: TMovieList;
  readonly sortBy?: TSortBy;
  readonly pageNumber?: number;
  readonly title?: string;
};
