
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
      }).catch((e) => {
        console.log("issues", e)
      })
  }
}