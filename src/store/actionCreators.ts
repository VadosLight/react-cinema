import actions from "store/actions";
import * as T from "types/storeTypes";

export const setListMovies = ({
  movieList,
}: {
  movieList: T.TMovieList;
}): T.TAction => {
  return { type: actions.PUT_LIST_MOVIES, movieList };
};

export const setFullInfoAboutMovie = ({
  movieMore,
}: {
  movieMore: T.TFullMovieInfo;
}): T.TAction => {
  return { type: actions.PUT_FULL_INFO_MOVIE, movieMore };
};

export const setOrderSort = ({ sortBy }: { sortBy: T.TSortBy }): T.TAction => {
  return { type: actions.CHANGE_ORDER_SORT, sortBy };
};

export const incrementPageCounter = (): T.TAction => {
  return { type: actions.INCREMENT_COUNT_PAGE };
};

export const resetPageCounter = (): T.TAction => {
  return { type: actions.RESETTING_COUNT_PAGE };
};

export const setSearchTitle = ({ title }: { title: string }): T.TAction => {
  return { type: actions.SET_SEARCH_TITLE, title };
};
