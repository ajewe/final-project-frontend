import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { makeStyles, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../styles/theme'
import { useOutsideClick } from "./useOutsideClick";
import { MenuPopUp } from './MenuPopUp'
import { addBook, deleteBook } from '../../redux/actions/booksActions'
import { endSession } from '../../redux/actions/userActions'

const useStyles = makeStyles(() => ({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#eaeaee",
    }
  },
  labelField: {
    width: "175px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
  },
  label: {
    display: "inline-block",
    fontSize: "22px",
  },
  icon: {
    margin: "0 10px",
    cursor: "pointer",
  }
}));

export const LeftNavigation = (props) => {
  const classes = useStyles();
  const ref = useRef();
  const dispatch = useDispatch();
  const allBooks = useSelector( state => state.books )
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const [ anchorBookEl, setAnchorBookEl ] = React.useState(null);
  const open = Boolean(anchorEl);
  const bookOpen = Boolean(anchorBookEl);

  const [ bookInput, setBookInput ] = React.useState({
    bookName: "",
    displayInput: false,
  })
  const [ reversedBooks, setReversedBooks ] = React.useState([])

  const reverseAllBooks = () => {
    let reverseBooksArr = allBooks.sort((a, b) => b.id - a.id)
    setReversedBooks(reverseBooksArr)
  }

  const handleBookChange = e => {
    setBookInput({
      ...bookInput,
      bookName: e.target.value
    })
  }

  useOutsideClick(ref, (e) => {
    //to avoid initial click trigger, before form renders
    if (bookInput.displayInput) {
      //disregard empty, null, space values
      if (bookInput.bookName === "" || bookInput.bookName === " ") {
        setBookInput({
          bookName: "",
          displayInput: false,
        })
      } else {
        handleBookStateSubmit(e)
      }
    }
  });

  const handleTextClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleBookTextClick = (e) => {
    setAnchorBookEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBookClose = () => {
    setAnchorBookEl(null);
  };

  const handleBookStateSubmit = e => {
    e.preventDefault()
    let bookSubmitObject = {
      bookName: bookInput.bookName
    }
    dispatch(addBook(bookSubmitObject, props.userToken))
  }

  const signOut = () => {
    localStorage.removeItem('user')
    //sets isloggedin to false, clears user info from redux store
    dispatch(endSession())
  }

  const handleDeleteBook = bookId => {
    dispatch(deleteBook(bookId, props.userToken))
    handleBookClose()
  }

  useEffect(() => {
    reverseAllBooks()    
    setBookInput({
      bookName: "",
      displayInput: false,
    })
  }, [allBooks])

  return (
    <Drawer
      className={ classes.root }
      variant="permanent"
      anchor="left" >
      <ThemeProvider theme={ theme }>
        <Link to='/' className="link" >
          <ListItem>
            <FontAwesomeIcon icon={faHome} 
                            className="left-nav-icon"/>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <ListItem onClick={ handleTextClick }>
          <FontAwesomeIcon icon={ faUser } 
                           className="left-nav-icon" />
          <ListItemText primary={ props.user.firstName && props.user.lastName 
                                  ?
                                    props.user.firstName + " " + props.user.lastName
                                  :
                                    props.user.email }
                        style={{ cursor: "pointer" }}/>
        </ListItem>
        <MenuPopUp 
          open={ open }
          handleClose={ handleClose }
          anchorEl={ anchorEl }
          menuItemContent={
            [
              {
                text: "Sign Out",
                linkTo: "",
                handleClick: () => signOut()
              }
            ]
          }
          extraLinkAttribute={ "" }/>
      </ThemeProvider>
      <Divider/>
      <div className={classes.labelField}>
        <Typography className={classes.label}>
          Books
        </Typography>
        <AddCircleOutlineOutlinedIcon 
          className={classes.icon}
          onClick={() => {
            setBookInput({
              ...bookInput, 
              displayInput: !bookInput.displayInput,
            })
          }}/>
      </div>
      {bookInput.displayInput
        && 
          <form ref={ref} onSubmit={ handleBookStateSubmit }>
            <input 
              autoFocus="autofocus" 
              className="left-nav-input"
              onChange={ handleBookChange }/>
          </form>}
      <List>
        {reversedBooks.map((b) => (
          <ListItem 
            button 
            key={ b.id }
            onClick={ handleBookTextClick }
            bookid = { b.id }>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={ b.book } />
          </ListItem>
        ))}
      </List>
      <MenuPopUp 
        open={ bookOpen }
        handleClose={ handleBookClose }
        anchorEl={ anchorBookEl }
        menuItemContent={
          [
            {
              text: "New Entry",
              linkTo: "/new-entry/",
              handleClick: () => handleBookClose()
            },
            {
              text: "View All",
              linkTo: "/view-all/",
              handleClick: () => handleBookClose()
            },
            {
              text: "Delete Book",
              handleClick: () => handleDeleteBook(anchorBookEl.getAttribute("bookid"))
            }
          ]}
        extraLinkAttribute={ anchorBookEl ? anchorBookEl.getAttribute("bookid"): "" }/>
    </Drawer>
  )
}