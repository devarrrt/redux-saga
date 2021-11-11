//with fork / spawn
import { call, fork, put, spawn } from "redux-saga/effects";
import { getUserAlbums } from "../../API/albums";
import { getPosts } from "../../API/posts";
import { SAVE_USER_ALBUMS, SAVE_USER_POSTS } from "../actions/userAction";

function* fetchAlbums(userId){ 
const data = yield call( getUserAlbums, userId ) 
yield put({
    type: SAVE_USER_ALBUMS,
    payload: data
})
}

function* fetchPosts(userId) {
  const data = yield call(getPosts, userId);
  yield put({
      type: SAVE_USER_POSTS,
      payload: data
  })
}

// export function* fetchUserData(userId) {
//   yield fork(fetchAlbums, userId);
//   yield fork(fetchPosts, userId);
//   console.log('done');
// }

export function* fetchUserData(userId) {
  yield spawn(fetchAlbums, userId);
  yield spawn(fetchPosts, userId);
  console.log("done");
}

export function* albumsSaga() {
  const userId = 1;
  yield call(fetchUserData, userId);
}
