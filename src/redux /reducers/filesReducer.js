import { FILES_UPLOADING_PROGRESS } from "../actions/filesActions";

const initState = {
  filesUploadingProgress: 0,
};

export const filesReducer = (state = initState, action) => {
  switch (action.type) {
    case FILES_UPLOADING_PROGRESS: {
      return {
        ...state,
        filesUploadingProgress: action.payload.value
      };
    }
    default:
      return state;
  }
};
