import {  put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUser(action) {
      const res= yield axios.get('http://www.rootbk.cn:5000/api/cooks/menu')
      yield put({type: "add", data: res.data.prefix});
}

function* mySaga() {
  yield takeEvery("countAdd", fetchUser);
}

export default mySaga;