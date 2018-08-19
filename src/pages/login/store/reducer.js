import { fromJS } from 'immutable';
import { CHANGE_LOGIN, LOGOUT } from './actionTypes';

//fromJS可以把多层次数据结构都转换成immutable数据类型
const defaultState = fromJS({
  login: false,
});

export default (state=defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return state.set('login',action.login);
    case LOGOUT:
      return state.set('login',false);
    default:
      return state;
  }
}
