import axios from 'axios';
import { GET_HOME_DATA, GET_MORE_ARTICLE, TOGGLE_BACK_TO_TOP } from './actionTypes';
import { fromJS } from 'immutable';

const innitHomeData = (data) => ({
  type: GET_HOME_DATA,
  data
})

const moreArticle = (article,currentPage) => ({
  type: GET_MORE_ARTICLE,
  article: fromJS(article),
  currentPage
})

export const toggleBackToTop = (toggle) => ({
  type: TOGGLE_BACK_TO_TOP,
  toggle
})

export const getHomeInfo = () => {
  return ( (dispatch) => {
    axios.get('/api/home.json').then( (res) => {
      dispatch(innitHomeData(res.data))
    })
  })
}

export const getMoreArticle = (currentPage,endPage) => {
  return ( (dispatch) => {
    if(currentPage <= endPage){
      axios.get(`/api/moreArticle.json?currentPage=${currentPage}`).then((res) => {
        dispatch(moreArticle(res.data, currentPage+1))
      })
    }

  })
}



