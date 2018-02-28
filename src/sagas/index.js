import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';
import {
  UPDATE_STATUS,
  REMOVE_APP,
  ASYNC_UPDATE_STATUS,
  ASYNC_REMOVE_STATUS
} from '../actions/actionTypes';
import { AppStatus } from '../constants';

function* update ({id, status}) {
  let loadingStatus;
  switch (status) {
    case AppStatus.RUNNING:
      loadingStatus = AppStatus.STARTING;
      break;
    case AppStatus.STOPPED:
      loadingStatus = AppStatus.STOPPING;
      break;
    default:
      loadingStatus = 'LOADING';
  }
  yield put({
    type: UPDATE_STATUS,
    id,
    status: loadingStatus
  });
  yield delay(2000);
  yield put({
    type: UPDATE_STATUS,
    id,
    status
  });
}

function* remove ({id}) {
  yield put({
    type: UPDATE_STATUS,
    id,
    status: AppStatus.REMOVING
  });
  yield delay(1000);
  yield put({
    type: REMOVE_APP,
    id
  });
}

function* watchUpdate () {
  yield takeEvery(ASYNC_UPDATE_STATUS, update);
}

function* watchRemove () {
  yield takeEvery(ASYNC_REMOVE_STATUS, remove);
}

function* rootSaga () {
  yield all([
    watchUpdate(),
    watchRemove()
  ]);
}

export default rootSaga;
