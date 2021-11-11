import {
  SAVE_USER_ALBUMS,
  SUCCESS_FETCH_USERS,
  SAVE_USER_POSTS,
} from "../actions/userAction";

const initialState = {
  posts: null,
  albums: null,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_FETCH_USERS:
      return {
        ...state,
        posts: action.payload.data,
      };
    case SAVE_USER_ALBUMS:
      return {
        ...state,
        albums: action.payload,
      };
    case SAVE_USER_POSTS:
      return {
        ...state,
        albums: action.payload.data,
      };

    default:
      return state;
  }
};

export default usersReducer;
