import { combineReducers } from "redux";
import { api } from "./words";

export const rootReducer = combineReducers({
  api: api,
});
