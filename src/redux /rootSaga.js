import { all } from "@redux-saga/core/effects";
import { albumsSaga } from "./sagas/albumsSaga";
import { authSaga } from "./sagas/authSaga";
import { channelSaga } from "./sagas/channelSaga";
import { eventsSata } from "./sagas/eventsSaga";
import { postsSaga } from "./sagas/postsSaga";
import { handleFilesUploading } from "./sagas/uploadSaga";
import { sagasPosts } from "./sagas/userSaga";

export function* rootSaga() {
  yield all([
      sagasPosts(),
      authSaga(),
      albumsSaga(),
      postsSaga(),
      eventsSata(),
      channelSaga(),
      handleFilesUploading()
    ])
}
