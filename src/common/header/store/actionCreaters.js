import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

//不导出的放到顶部区分
const changeList = (data, totalPage) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage
})

export const getSearchFocusAction = () => ({
    type: actionTypes.SEARCH_FOCUS
  })

export const getSearchBlurAction = () => ({
    type: actionTypes.SEARCH_BLUR
  })

export const getChangeMouseInAction = () => ({
  type: actionTypes.CHANGE_MOUSE_IN,
})

export const getChangeMouseLeaveAction = () => ({
  type: actionTypes.CHANGE_MOUSE_LEAVE,
})

export const getNextPageAction = (page) => ({
  type: actionTypes.NEXT_PAGE,
  page
})

export const getList = () => {
  return dispatch => {
    axios.get('/api/headerList.json').then( res => {
      const data = res.data;
      dispatch(changeList(data.data, data.data.length));
      }).catch( () => {
        console.log('error')
      })
  }
}