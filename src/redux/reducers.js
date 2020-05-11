import { combineReducers } from 'redux'

const user = (state = [], action) => {
  switch(action.type) {
    case 'VERIFY_USER':
      const user = { ...state }
      user.isLoggedIn = true
      return user
    default:
      return state
  }
}

export default combineReducers({user})