export const createUser = userData => {
  return (dispatch) => {
    // `${process.env.REACT_APP_API_URL}/user/create`
    fetch('https://chem-logger.herokuapp.com/user/create', {
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
    //`${process.env.REACT_APP_API_URL}/login`
    fetch('https://chem-logger.herokuapp.com/login', {
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
        console.log(userObj)
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