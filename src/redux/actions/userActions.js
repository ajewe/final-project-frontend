export const createUser = userData => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/user/create`, {
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
    fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userLoginInfo)
    })
      .then(res => res.json())
      .then(userObj => {
        const action = {
          type: 'CREATE_SESSION',
          value: userObj
        }
        localStorage.setItem('user', JSON.stringify(userObj))
        dispatch(action)
      }).catch((e) => {
        console.log("issues", e)
      })
  }
}

export const endSession = () => {
  return {
      type: 'END_SESSION'
    }
}