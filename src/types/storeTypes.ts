export type TFullMovieInfo = {
  readonly [key: string]: string | Array<any>;
};

export function instanceOfTMovieList(object: any): object is TMovieList {
  return "Title" in object[0] && "Year" in object[0] && "imdbID" in object[0];
}

export function instanceOfTShortMovieInfo(
  object: any
): object is TShortMovieInfo {
  return "Title" in object && "Year" in object && "imdbID" in object;
}

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
  readonly movieMore?: TFullMovieInfo;
  readonly movieList?: TMovieList;
  readonly sortBy?: TSortBy;
  readonly pageNumber?: number;
  readonly title?: string;
};
