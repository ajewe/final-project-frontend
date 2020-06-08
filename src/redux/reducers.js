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

const logs = (state = [], action) => {
  switch(action.type) {
    case 'ADD_LOG':
      return { book2: [ ...state.book2, action.value ], book1: [...state.book1]}
    default:
      return state
  }
}

export default combineReducers({ user, logs })