const PUT_LIST_MOVIES = "PUT_LIST_MOVIES";
const PUT_FULL_INFO_MOVIE = "PUT_FULL_INFO_MOVIE";
const CHANGE_ORDER_SORT = "CHANGE_ORDER_SORT";

export default function reducer(state, action) {
  switch (action.type) {
    case PUT_LIST_MOVIES:
      return { movieList: action.movieList };
    case PUT_FULL_INFO_MOVIE:
      return { movieMore: action.movieMore };
    case CHANGE_ORDER_SORT:
      return { sortBy: action.sortBy };

    default:
      return state;
  }
}
