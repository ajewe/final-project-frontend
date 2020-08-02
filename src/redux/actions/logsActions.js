export const fetchLogs = (userToken) => {
  return (dispatch) => {
    fetch('http://localhost:4001/logs', {
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
        console.log(response)
        dispatch(action)
      }).catch(e => {
        console.log(e)
      })
  }
}

export const addLog = (log, userToken) => {
  return (dispatch) => {
    fetch('http://localhost:4001/logs/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: userToken
      },
      body: JSON.stringify(log)
    })
      .then(res => res.json())
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
    fetch(`http://localhost:4001/logs/${logId}`, {
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

export const changeLog = (logId, payload) => {
  return {
    type: 'CHANGE_LOG',
    logId,
    payload
  }
}