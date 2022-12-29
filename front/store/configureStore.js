import {createWrapper} from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const configureStore = () => {  
    const middlewares =[];
    const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer);
        store.dispatch({
            type: 'CHANGE_NICKNAME',
            data: 'youu',
        })
    return store;

};

const weapper = createWrapper(configureStore, { 
    //개발할 때 디버깅에 도움을 준다
    debug: process.env.NODE_ENV === 'development'
});

export default weapper;