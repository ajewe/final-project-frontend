import { combineReducers } from 'redux'

// const users = (state = [], action) => {
//   switch(action.type) {
//     case 'FETCH_USERS':
//       return action.value
//     default:
//       return state
//   }
// }

const books = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_BOOKS':
      return action.value
    case 'ADD_BOOK':
      return [ action.value, ...state ]
    default:
      return state
  }
}

const user = (state = { token: '', isLoggedIn: false}, action) => {
  switch(action.type) {
    // case 'VERIFY_USER':
    //   const user = { ...state }
    //   user.isLoggedIn = true
    //   return user
    case 'CREATE_SESSION':
      console.log('state', { ...state, token: action.value })
      return { ...state, isLoggedIn: true, token: action.value }
    default:
      return state
  }
}

const logs = (state = [], action) => {
  switch(action.type) {
    case 'ADD_LOG':
      return [ action.value, ...state ]
    case 'CHANGE_LOG':
      console.log(action, state)
      let index;
      for (let i = 0; i < state.length; i++) {
        if (action.logId == state[i].logId) {
          index = i
        }
      }
      let newState = state.slice()
      newState.splice(index, 1, action.payload)
      return newState
    default:
      return state
  }
}

export default combineReducers({ user, logs, books })