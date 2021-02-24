import { combineReducers } from "redux";
import { list } from "./list";

export const rootReducer = combineReducers({
  list: list,
});
