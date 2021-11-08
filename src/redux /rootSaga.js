import { all } from "@redux-saga/core/effects";
import { sagasPosts } from "./sagas/userSaga";

export function* rootSaga() {
  yield all([
      sagasPosts()
    ])
}
