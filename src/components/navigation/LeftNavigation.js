import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { ThemeProvider } from '@material-ui/styles'
import theme from '../../styles/theme'
import { useOutsideClick } from "./useOutsideClick";
import { MenuPopUp } from './MenuPopUp'
import { endSession } from '../../redux/actions/userActions'
import { addBook } from '../../redux/actions/booksActions'


const useStyles = makeStyles(() => ({
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
  // const id = open ? 'simple-popover' : undefined;

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
    //dispatch action that clears isloggedin and stuff from redux store
    dispatch(endSession())
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
      variant="permanent"
      anchor="left"
    >
      {/* <List>
        {['Inventory', 'Members', 'Announcements'].map((text) => (
          <ListItem
            button
            key={ text }
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      <ThemeProvider theme={ theme }>
        <Link to='/' className="link" >
          <ListItem>
            <FontAwesomeIcon icon={faHome} 
                            style={{ padding: '10px 20px', boxSizing: "content-box" }}
                            className="home-icon"/>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <ListItem onClick={ handleTextClick }>
          <FontAwesomeIcon icon={ faUser } 
                          style={{ padding: '10px 20px', cursor: "pointer", boxSizing: "content-box" }}/>
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
      <Divider />
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
            bookId = { b.id }>
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
              handleClick: null
            },
            // {
            //   text: "Table Of Contents",
            //   linkTo: "",
            // },
            // {
            //   text: "View All",
            //   linkTo: "",
            // }
          ]}
        extraLinkAttribute={ anchorBookEl ? anchorBookEl.getAttribute("bookId"): "" }/>
    </Drawer>
  )
}