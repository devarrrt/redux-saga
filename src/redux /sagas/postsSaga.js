//erreft takes
import {
  call,
  put,
  takeEvery,
  takeLatest,
  takeLeading,
  take,
} from "redux-saga/effects";
import { getPosts } from "../../API/posts";
import {
  ERROR_USER_POSTS,
  FETCH_USER_POSTS,
  SUCCESS_GET_USER_POSTS,
} from "../actions/userAction";

export function* userPostsRequest(userId) {
  try {
    const data = yield call(getPosts, userId);
    yield put({
      type: SUCCESS_GET_USER_POSTS,
      payload: data,
    });
    console.log("posts");
  } catch (e) {
    yield put({
      type: ERROR_USER_POSTS,
      payload: e.message,
    });
  }
}

export function* postsSaga() {
  //   yield takeEvery(FETCH_USER_POSTS, userPostsRequest);
  //   yield takeLatest(FETCH_USER_POSTS, userPostsRequest);
  //   yield takeLeading(FETCH_USER_POSTS, userPostsRequest);

  while (true) {
     const action =  yield take(FETCH_USER_POSTS)
     yield call( userPostsRequest, action )
  }
}

// takeEvery - выполняет все actions
// takeLatest - выполняет только последний actions
//takeLeading - выполняет только первый action
//take - блокирует последующие вызовы до тех пор, пока не выполнится
