export const fetchBooks = (userToken) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/books`, {
      headers: {
        token: userToken
      }
    })
      .then(res => res.json())
      .then(response => {
        const action = {
          type: 'FETCH_BOOKS',
          value: response
        }
        dispatch(action)
      }).catch(e => {
        console.log(e)
      })
  }
}

export const addBook = (bookInput, userToken) => {
  return (dispatch) => {
    fetch(`${process.env.REACT_APP_API_URL}/api/books/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        token: userToken
      },
      body: JSON.stringify(bookInput)
    })
      .then(res => res.json())
      .then(json => {
        const action = {
          type: 'ADD_BOOK',
          value: json
        }
        dispatch(action)
      }).catch((e) => {
        console.log(e)
      })
  }
}

export const deleteBook = ( bookId, userToken ) => {
  return (dispatch) => {

    fetch(`${process.env.REACT_APP_API_URL}/api/books/delete/${bookId}`, {
      method: 'DELETE',
      headers: {
        token: userToken
      },
    })
      .then(res => res.json())
      .then(json => {
        if(json.message === "Book has logs") {
          alert("You can't delete a book that contains logs!")
        }
        dispatch(fetchBooks(userToken))
      }).catch((e) => {
        console.log('err:', e)
      })
  }
}