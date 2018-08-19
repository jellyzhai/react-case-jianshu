import { fromJS } from 'immutable';
import { GET_HOME_DATA, GET_MORE_ARTICLE, TOGGLE_BACK_TO_TOP } from './actionTypes';

//fromJS可以把多层次数据结构都转换成immutable数据类型
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  backToTop: false,
  currentPage: 0,
  endPage: 3,
});

const getHomeData = (state,action) => (
  state.merge({
    topicList: action.data.topicList,
    articleList: action.data.articleList,
    recommendList: action.data.recommendList,
  })
);

const getMoreArticle = (state,action) => (
  state.merge({
    'currentPage': action.currentPage,
    'articleList': state.get('articleList').concat(action.article)
  })
);

export default (state=defaultState, action) => {
  switch (action.type) {
    case GET_HOME_DATA:
      return getHomeData(state,action)
    case GET_MORE_ARTICLE:
      return getMoreArticle(state,action)
    case TOGGLE_BACK_TO_TOP:
      return state.set('backToTop', action.toggle);
    default:
      return state;
  }
}
