export const createUser = userData => {
  return (dispatch) => {
    fetch('http://localhost:4001/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(response => {
      alert('User Created!')
    }).catch(e => {
      console.log('issues: ', e)
    })
  }
}

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
        localStorage.setItem('token', action.value)
        dispatch(action)
      }).catch((e) => {
        console.log("issues", e)
      })
  }
}