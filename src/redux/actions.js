export const verifyUser = () => {
  return {
    type: 'VERIFY_USER',
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