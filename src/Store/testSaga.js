// import { put, takeEvery, delay } from "redux-saga/effects";
import { put, takeEvery, delay } from "redux-saga/effects";
import * as action from "./testAction";
import * as actionTypes from "./actionsTypes";

export function* loginActioSaga() {
  let userData = { username: "mag" };
  yield delay(2000);
  yield put(action.loginSuccessAction(userData));
}

export function* watchAll() {
  yield takeEvery(actionTypes.testAction.LOGIN, loginActioSaga);
}
