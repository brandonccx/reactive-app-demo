import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { UPDATE_STATUS, ASYNC_UPDATE_STATUS } from '../actions/actionTypes';
import { AppStatus } from '../constants';

function* start ({id, status}) {
  yield put({
    type: UPDATE_STATUS,
    id,
    status: AppStatus.STARTING
  });
  yield delay(1000);
  yield put({
    type: UPDATE_STATUS,
    id,
    status
  });
}

function* watchStart () {
  yield takeEvery(ASYNC_UPDATE_STATUS, start);
}

export default watchStart;
