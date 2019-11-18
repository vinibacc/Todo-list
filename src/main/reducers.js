import { combineReducers } from "redux";
import todoReducer from "../todo/todoReducer";

const reducers = combineReducers({
  // Remova essa linha depois de adicionar seus ducks
  todo: todoReducer
});

export default reducers;
