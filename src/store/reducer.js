const PUT_LIST_MOVIES = "PUT_LIST_MOVIES";
const PUT_FULL_INFO_MOVIE = "PUT_FULL_INFO_MOVIE";
const CHANGE_ORDER_SORT = "CHANGE_ORDER_SORT";

export default function reducer(state, action) {
  switch (action.type) {
    case PUT_LIST_MOVIES:
      return { value: action.value_1 };
    case PUT_FULL_INFO_MOVIE:
      return { value: action.value_2 };

    default:
      return state;
  }
}
