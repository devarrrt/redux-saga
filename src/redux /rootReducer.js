import { combineReducers } from "redux";
import usersReducer from "./reducers/userReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
});