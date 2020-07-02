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

const books = (state = [], action) => {
  switch(action.type) {
    case 'ADD_BOOK':
      return [ action.value, ...state ]
    default:
      return state
  }
}

const logs = (state = [], action) => {
  switch(action.type) {
    case 'ADD_LOG':
      return [ action.value, ...state ]
    case 'CHANGE_LOG':
      let newState = state.slice()
      newState.splice(action.index, 1, action.payload)
      return newState
    default:
      return state
  }
}

export default combineReducers({ user, logs, books })