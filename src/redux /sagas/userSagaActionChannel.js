import { buffers } from "redux-saga";
import { actionChannel, takeEvery, call, take, put } from "redux-saga/effects";
import { getPosts } from "../../API/posts";
import {
  ERROR_FETCH_USERS,
  FETCH_USERS,
  SUCCESS_FETCH_USERS,
} from "../actions/userAction";

export function* fetchUsersRequets(userId) {
  try {
    const data = yield call(getPosts, userId);
    yield put({
      type: SUCCESS_FETCH_USERS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: ERROR_FETCH_USERS,
      payload: error.message,
    });
  }
}

export function* sagasPostsChannel() {
  const requestChannel = yield actionChannel(FETCH_USERS, buffers.none());//buffers.none() отправляет последний запрос
  while (true) {
    const action = yield take(requestChannel);
    console.log("action", action);
    yield call(fetchUsersRequets, action);
  }
}
 
// export function* sagasPosts() {
//   yield takeEvery(FETCH_USERS, fetchUsersRequets);
// }
