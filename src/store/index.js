import { createStore } from "redux";
import actions from "./actions"
import state from "./initialState"; //начальное состояние
import reducer from "./reducer"; //обработчик запросов / условный кассир
// import middleware from "./middleware"; //предстоит разобраться
const store = createStore(reducer, state);

export default store;
export {actions};
