import actions from "store/actions";
import * as T from "types/storeTypes";

export const setListMovies = ({ movieList }: { movieList: T.TMovieList }) => {
  return { type: actions.PUT_LIST_MOVIES, movieList };
};

export const setFullInfoAboutMovie = ({
  movieMore,
}: {
  movieMore: T.TFullMovieInfo;
}) => {
  return { type: actions.PUT_FULL_INFO_MOVIE, movieMore };
};

export const setOrderSort = ({ sortBy }: { sortBy: T.TSortBy }) => {
  return { type: actions.CHANGE_ORDER_SORT, sortBy };
};

export const incrementPageCounter = () => {
  return { type: actions.INCREMENT_COUNT_PAGE };
};

export const resetPageCounter = () => {
  return { type: actions.RESETTING_COUNT_PAGE };
};

export const setSearchTitle = ({ title }: { title: string }) => {
  return { type: actions.SET_SEARCH_TITLE, title };
};
