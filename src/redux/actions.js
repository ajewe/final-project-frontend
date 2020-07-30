// import history from '../history'
// export const fetchUsers = () => {
//   return (dispatch) => {
//     //adding env variables in .env
//     fetch('http://localhost:4001/users')
//       .then(res => res.json())
//       .then(response => {
//         const action = {
//           type: 'FETCH_USERS',
//           value: response
//         }
//         dispatch(action)
//       })
//   }
// }

// export const verifyUser = () => {
//   return {
//     type: 'VERIFY_USER',
//   }
// }

export const createSession = userLoginInfo => {
  return (dispatch) => {
    fetch('http://localhost:4001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLoginInfo)
    })
      .then(res => res.json())
      .then(json => {
        const action = {
          type: 'CREATE_SESSION',
          value: json.token
        }
        dispatch(action)
        // history.push('/')
        console.log('heyyyy')
      }).catch((e) => {
        console.log("issues", e)
      })
      // put a .catch here
  }
}

export const fetchBooks = () => {
  return (dispatch) => {
    fetch('http://localhost:4001/books')
      .then(res => res.json())
      .then(response => {
        const action = {
          type: 'FETCH_BOOKS',
          value: response
        }
        dispatch(action)
      })

  }
}

export const addBook = (book) => {
  return {
    type: 'ADD_BOOK',
    value: book
  }
}

export const addLog = (log) => {
  return {
    type: 'ADD_LOG',
    value: log
  }
}

export const changeLog = (logId, payload) => {
  return {
    type: 'CHANGE_LOG',
    logId,
    payload
  }
}