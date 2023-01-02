import {createWrapper} from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas';

const configureStore = () => { 
    const sagaMiddleware = createSagaMiddleware(); 
    const middlewares =[sagaMiddleware];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);
        // store.dispatch({
        //     type: 'CHANGE_NICKNAME',
        //     data: 'youu',
        // })
        store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;

};

const weapper = createWrapper(configureStore, { 
    //개발할 때 디버깅에 도움을 준다
    debug: process.env.NODE_ENV === 'development',
});

export default weapper;