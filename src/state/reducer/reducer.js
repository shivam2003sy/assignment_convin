import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from "../action/actionType"

const initialState = {
    loading: false,
    users: [],
    }


  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_USER_SUCCESS :
        return {
          loading: false,
          users: action.payload,
        }
      default: return state
    }
  }
  export default reducer