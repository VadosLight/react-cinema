import { createStore } from "redux";

import state from "./state"; //начальное состояние
import reducer from "./reducer"; //обработчик запросов / условный кассир
import middleware from "./middleware"; //предстоит разобраться

export default createStore(reducer, state, middleware);
