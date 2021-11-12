import { all } from "@redux-saga/core/effects";
import { albumsSaga } from "./sagas/albumsSaga";
import { authSaga } from "./sagas/authSaga";
import { postsSaga } from "./sagas/postsSaga";
import { sagasPosts } from "./sagas/userSaga";

export function* rootSaga() {
  yield all([
      sagasPosts(),
      authSaga(),
      albumsSaga(),
      postsSaga()
    ])
}
