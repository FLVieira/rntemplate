import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import * as userActions from './actions';
import api from '~/services/api';

export function* signInRequest({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.get, `/`);
    yield put(userActions.signInSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro no login', 'Houve um erro.');
    yield put(userActions.signInFailure());
  }
}

export default all([takeLatest('@user/SIGN_IN_REQUEST', signInRequest)]);
