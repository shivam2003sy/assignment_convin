import axios from 'axios'
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from "./actionType"

const SERVER ="https://reqres.in"
export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest())
    axios
      .get(`${SERVER}/api/users?page`)
      .then(response => {
        const users = response.data.data
        setTimeout(() => {  // to emulate some network delay
          dispatch(fetchUserSuccess(users))
        }, 2000)
      })
      .catch(error => {
        console.log("api end point error")
      })
  }
}

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetchUserSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}