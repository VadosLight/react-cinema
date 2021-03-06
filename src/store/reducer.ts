import actions from "./actions";
import initialState from "store/initialState";
import { TAction, TState } from "types/storeTypes";

export default function reducer(
  state: TState = initialState,
  action: TAction
): TState {
  switch (action.type) {
    case actions.PUT_LIST_MOVIES:
      return { ...state, movieList: action.movieList };

    case actions.PUT_FULL_INFO_MOVIE:
      return { ...state, movieMore: action.movieMore };

    case actions.CHANGE_ORDER_SORT:
      return { ...state, sortBy: action.sortBy };

    case actions.INCREMENT_COUNT_PAGE:
      return { ...state, pageNumber: state.pageNumber + 1 };

    case actions.RESETTING_COUNT_PAGE:
      return { ...state, pageNumber: 2 };

    case actions.SET_SEARCH_TITLE:
      return { ...state, title: action.title };

    default:
      return state;
  }
}
