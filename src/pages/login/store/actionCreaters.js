import axios from 'axios';
import { CHANGE_LOGIN, LOGOUT } from './actionTypes'

const loginAction = (login) => ({
  type: CHANGE_LOGIN,
  login
})

export const logoutAction = () => ({
  type: LOGOUT
})

export const login = (account, password) => {
  return (
    (dispatch) => {
      axios.get(`/api/login.json?account=${account}&password=${password}`).then((res) => {
        dispatch(loginAction(res.data.login))
      }).catch((err) => {
        console.log(err)
      })
    }
  )
}



