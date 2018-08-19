import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

//redux-thunk用于升级store的dispatch方法，让函数参数立即执行
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;