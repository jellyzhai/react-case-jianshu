import axios from 'axios';
import * as actionTypes from './actionTypes';

const getDetailAction = (title, content) => ({
  type: actionTypes.GET_DETAIL,
  title,
  content
})

export const getDetail = (id) => {
  return (
    (dispatch) => {
      axios.get('/api/detail.json?id='+ id).then((res) => {
        dispatch(getDetailAction(res.data.title,res.data.content))
      }).catch((err) => {
        console.log(err)
      })
    }
  )
}