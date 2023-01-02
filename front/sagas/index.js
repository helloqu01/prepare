import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() { //재너레이터 
  yield all([ //all은 밑의 함수를 동시에 실행하게 해준다.
    fork(postSaga), //fork는 함수를 실행 한다는 뜻 비동기 함수 호출이다/ call은 동기 함수 호출이다.
    fork(userSaga),
  ]);
}