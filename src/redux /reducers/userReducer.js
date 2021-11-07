import { SUCCESS_FETCH_USERS } from "../actions/userAction";

const initialState = {
  posts: null,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_FETCH_USERS: {
      return {
        ...state,
        posts: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
