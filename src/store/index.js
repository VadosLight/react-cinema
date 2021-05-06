import { createStore } from "redux";
import actions from "./actions";
import state from "./initialState";
import reducer from "./reducer";

const store = createStore(
  reducer,
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
export { actions };
