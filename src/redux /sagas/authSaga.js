import { call, cancel, cancelled, fork, put, take } from "@redux-saga/core/effects";
import { clearToken, login, saveToken } from "../../API/user";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  STOP_LOADING_PENDING,
} from "../actions/authAction";

function* authorize(username, password) {
  try {
    const token = yield call(login, username, password); //blocked call
    yield put({
      // as dispatch
      type: LOGIN_SUCCESS,  
      payload: { token },
    });
    yield call(saveToken, token);
  } catch (error) {
    yield put({
      type: LOGIN_ERROR,
      payload: error,
    });
  } finally {
      if (yield cancelled()) {
          yield put({ type: STOP_LOADING_PENDING })
      }
  }
}

export function* authSaga() {
  while (true) {
    const { payload } = yield take(LOGIN_REQUEST); // action with type
    const task = yield fork(authorize, payload.username, payload.password);//not blocked
    const action = yield take([LOGOUT, LOGIN_ERROR]);
    if (action.type === LOGOUT) yield cancel(task);
    yield call(clearToken);
  }
}
