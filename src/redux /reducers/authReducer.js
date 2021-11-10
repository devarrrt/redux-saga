import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  STOP_LOADING_PENDING,
} from "../actions/authAction";

const initialState = {
  error: null,
  token: null,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      const token = action.payload.token
      return {
        ...state,
        token,
        isLoading: false,
      }
    case LOGIN_ERROR:
     const error = action.payload.error
      return {
        ...state,
        error,
        isLoading: false,
      }
    case STOP_LOADING_PENDING:
      return {
        ...state,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        erorr: null,
        token: null,
      };
    default: {
      return state;
    }
  }
};

export default authReducer;
