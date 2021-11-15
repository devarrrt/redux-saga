import { call, fork, take, put, delay } from "redux-saga/effects";
import { channel } from "redux-saga";

function* handleChannelRequest(requestChannel) {
  while (true) {
    const payload = yield take(requestChannel);
    console.log(payload, "payload");
    yield delay(2000)
  }
}

export function* channelSaga() {
  const requestChannel = yield call(channel);

  yield fork(handleChannelRequest, requestChannel);

  yield put(requestChannel, { payload: "hello" });
  yield put(requestChannel, { payload: "hello" });
  yield put(requestChannel, { payload: "hello" });
  yield put(requestChannel, { payload: "hello" });
}
