import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, CHANGE_MOUSE_IN, CHANGE_MOUSE_LEAVE, NEXT_PAGE} from './actionTypes';
import { fromJS } from 'immutable';

//fromJS方法把普通数据类型转成immutable不可更改数据类型
const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn: false,
  page: 1,
  totalPage: 1
});

//reducer返回一个纯函数：有固定输入和输出的的函数，不能有副作用
export default (state=defaultState, action) => {

  const changeList = (state,action) => (
    state.merge({
      list: action.data,
      totalPage: Math.ceil(action.totalPage/10)
    })
  )

  //immutable对象的set方法 会在内部使用结构共享 设置新的数据 并返回新的对象
  //一个case执行完后 没有加break终止，是因为return也终止了代码运行
  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set('focused', true);
    case SEARCH_BLUR:
      return state.set('focused', false);
    case CHANGE_LIST:
      return changeList(state,action);
    case CHANGE_MOUSE_IN:
      return state.set('mouseIn', true);
    case CHANGE_MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case NEXT_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }


}