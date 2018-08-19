import { combineReducers } from 'redux-immutable';
import { headerReducer } from '../common/header/store';
import { homeReducer } from '../pages/home/store';
import { detailReducer } from '../pages/detail/store';
import { loginReducer } from '../pages/login/store';

//暂时认为combineReducers方法把第一层数据结构转成immutable数据类型
const reducer = combineReducers({
  headerReducer,
  homeReducer,
  detailReducer,
  loginReducer,
});

export default reducer