export const verifyUser = () => {
  return {
    type: 'VERIFY_USER',
  }
}

export const addEntry = (entry) => {
  return {
    type: 'ADD_ENTRY',
    value: entry
  }
}