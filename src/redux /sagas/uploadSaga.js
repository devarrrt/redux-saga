import { fork, call, take, put } from "redux-saga/effects";
import { channel } from "redux-saga";
import {
  FILES_UPLOADING_PROGRESS,
  FILES_UPLOADING_START,
} from "../actions/filesActions";
import { uploadFiles } from "../../API/files";

const handleProgress = (fileUploadingChannel, progressValue) => {
      fileUploadingChannel.put({
        value: progressValue,
      });
};

export function* handleFileUploadingChannelEvents(fileUploadingChannel) {
  while (true) {
    const payload = yield take(fileUploadingChannel);
    yield put({
      type: FILES_UPLOADING_PROGRESS,
      payload: {
        value: payload.value,
      },
    });
  }
}

export function* handleFilesUploading() {
  const fileUploadingChannel = yield call(channel);

  yield fork(handleFileUploadingChannelEvents, fileUploadingChannel);

  while (true) {
    yield take(FILES_UPLOADING_START);

    yield fork(uploadFiles,{
        url: 'https://server',
        files: [ 'file1', 'file2' ],
        onProgress: ( progressValue ) => handleProgress(fileUploadingChannel, progressValue)
    } );
  }
}
