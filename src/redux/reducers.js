import { combineReducers } from 'redux'

const user = (state = { token: '', isLoggedIn: false}, action) => {
  switch(action.type) {
    case 'CREATE_SESSION':
      return { ...state, isLoggedIn: true, token: action.value }
    // case 'CREATE_USER'
    default:
      return state
  }
}

const books = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_BOOKS':
      return action.value
    case 'ADD_BOOK':
      return [ 
        ...state,
        {
          book: action.value.book, 
          id: action.value.id 
        }
      ]
    default:
      return state
  }
}

const logs = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_LOGS':
      return action.value
    case 'ADD_LOG':
      return state
    case 'CHANGE_LOG':
      // let index;
      // for (let i = 0; i < state.length; i++) {
      //   if (action.logId == state[i].logId) {
      //     index = i
      return state
      //   }
      // }
      // let newState = state.slice()
      // newState.splice(index, 1, action.payload)
      // return newState
    default:
      return state
  }
}

const selectedLog = (state = {
  procedures: [],
  book_entry_number: null,
  book_name: "",
  id: null,
  last_updated: "",
  quick_info: "",
  results: "",
  rxn_sketch: { fileType: "", fileData: ""},
  user_id: null, 
  yield: ""
  }, action) => {
    switch(action.type) {
      case 'FETCH_SELECTED_LOG':
        return action.value
      default:
        return state
    }
  }

export default combineReducers({ user, books, logs, selectedLog })