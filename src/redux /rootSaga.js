import { all } from "@redux-saga/core/effects";
import { sagasPosts } from "./userSaga";

export function* rootSaga() {
  yield all([
      sagasPosts()
    ])
}
