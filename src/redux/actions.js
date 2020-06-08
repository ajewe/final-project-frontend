export const verifyUser = () => {
  return {
    type: 'VERIFY_USER',
  }
}

export const addLog = (log) => {
  return {
    type: 'ADD_LOG',
    value: log
  }
}