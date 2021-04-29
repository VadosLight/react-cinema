import actions from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case actions.PUT_LIST_MOVIES:
      return { movieList: action.movieList };
    case actions.PUT_FULL_INFO_MOVIE:
      return { movieMore: action.movieMore };
    case actions.CHANGE_ORDER_SORT:
      return { sortBy: action.sortBy };

    default:
      return state;
  }
}
