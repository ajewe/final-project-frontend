export const fetchLogs = (userToken) => {
  return (dispatch) => {
    //`${process.env.REACT_APP_API_URL}/logs`
    fetch('https://chem-logger.herokuapp.com/logs', {
      headers: {
        token: userToken
      }
    })
      .then(res => res.json())
      .then(response => {
        const action = {
          type: 'FETCH_LOGS',
          value: response.map(r => {
            return {
              ...r,
              rxn_sketch: JSON.parse(r.rxn_sketch)
            }
          })
        }
        dispatch(action)
      }).catch(e => {
        console.log(e)
      })
  }
}

export const addLog = (log, userToken) => {
  return (dispatch) => {
    // `${process.env.REACT_APP_API_URL}/logs/create`
    fetch('https://chem-logger.herokuapp.com/logs/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: userToken
      },
      body: JSON.stringify(log)
    })
      .then(res => {
        // res.json()
      })
      .then( response => {
        // const action = {
        //   type: 'ADD_LOG',
        //   value: response
        // }
        // dispatch(action)
      }).catch((e) => {
        console.log("issues", e)
      })
  }
}

export const fetchSelectedLog = (logId, userToken) => {
  return (dispatch) => {
//`${process.env.REACT_APP_API_URL}/logs/${logId}`
    fetch(`https://chem-logger.herokuapp.com/logs/${logId}`, {
      headers: {
        token: userToken
      }
    })
      .then(res => res.json())
      .then(response => {
        const action = {
          type: 'FETCH_SELECTED_LOG',
          value: {
            ...response,
            rxn_sketch: JSON.parse(response.rxn_sketch)
          }
        }
        dispatch(action)
      }).catch(e => {
        console.log('issues: ', e)
      })

  }
}

export const changeLog = (logId, payload, userToken) => {
  return (dispatch) => {
    // `${process.env.REACT_APP_API_URL}/logs/update/${logId}`
    fetch(`https://chem-logger.herokuapp.com/logs/update/${logId}`, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          token: userToken
        },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then( response => {
      alert('Log Updated!')
    })
    .catch(e => {
      console.log('issues: ', e)
    })
  }
}