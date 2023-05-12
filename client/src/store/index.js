import {createStore, applyMiddleware, compose} from 'redux'
import appReducer from './reducers/index'
import promiseMiddleware from 'redux-promise'

const ReduxStore = () => {
    const webToolEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middlewareEnhancer = applyMiddleware(promiseMiddleware);
    const composedEnhancers = webToolEnhancers(middlewareEnhancer);
    const store = createStore(appReducer, composedEnhancers)
    return store;
}

export default ReduxStore;