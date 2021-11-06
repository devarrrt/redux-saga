import { FETCH_USERS } from "../actions/userAction";

const initialState = {
  posts: null,
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS: {
      const posts = action.payload.data;
      return {
        ...state,
        posts,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
