import actions from "store/actions";

export const setListMovies = ({ movieList }) => {
  return { type: actions.PUT_LIST_MOVIES, movieList };
};

export const setFullInfoAboutMovie = ({ movieMore }) => {
  return { type: actions.PUT_FULL_INFO_MOVIE, movieMore };
};

export const setOrderSort = ({ sortBy }) => {
  return { type: actions.CHANGE_ORDER_SORT, sortBy };
};

export const incrementPageCounter = () => {
  return { type: actions.INCREMENT_COUNT_PAGE };
};

export const resetPageCounter = () => {
  return { type: actions.RESETTING_COUNT_PAGE };
};

export const setSearchTitle = ({ title = "" }) => {
  return { type: actions.SET_SEARCH_TITLE, title };
};
