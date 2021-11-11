import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import usersReducer from "./reducers/userReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  auth: authReducer,
});