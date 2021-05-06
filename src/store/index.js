import { createStore } from "redux";
import actions from "./actions"
import state from "./initialState";
import reducer from "./reducer";

const store = createStore(reducer, state);

export default store;
export {actions};
