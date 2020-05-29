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

const entries = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ENTRY':
      return [...state, action.value]
    default:
      return state
  }
}

export default combineReducers({user, entries})