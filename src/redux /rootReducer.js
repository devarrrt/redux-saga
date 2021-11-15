import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import { filesReducer } from "./reducers/filesReducer";
import usersReducer from "./reducers/userReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
  files: filesReducer
});