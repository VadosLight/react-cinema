import { createStore } from "redux";
import actions from "./actions";
import state from "./initialState";
import reducer from "./reducer";

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  state
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
export { actions };
