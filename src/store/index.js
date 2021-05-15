import { createStore, applyMiddleware, compose } from "redux";
import actions from "./actions";
import initState from "./initialState";
import reducer from "./reducer";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const composed = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducer, initState, composed);

export default Object.freeze(store);
export { actions, sagaMiddleware };
