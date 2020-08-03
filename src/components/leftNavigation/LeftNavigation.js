import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useOutsideClick } from "./useOutsideClick";
import { MenuPopUp } from './MenuPopUp'
import { addBook } from '../../redux/actions/booksActions'
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const useStyles = makeStyles(() => ({
  labelField: {
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

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  const handleBookStateSubmit = e => {
    e.preventDefault()
    let bookSubmitObject = {
      bookName: bookInput.bookName
    }
    dispatch(addBook(bookSubmitObject, props.userToken))
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
      <Divider />
      <List>
        {['Inventory', 'Members', 'Announcements'].map((text) => (
          <ListItem
            button
            key={ text }
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className={classes.labelField}>
        <Typography
          className={classes.label}>
          Books
        </Typography>
        <AddCircleOutlineOutlinedIcon 
          className={classes.icon}
          onClick={() => {
            setBookInput({
              ...bookInput, 
              displayInput: !bookInput.displayInput,
            })
          }}
        />
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
            onClick={ handleClick }
            bookId = { b.id }
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={ b.book } />
          </ListItem>
        ))}
      </List>
      <MenuPopUp 
        open={ open }
        handleClose={ handleClose }
        anchorEl={ anchorEl }
      />
    </Drawer>
  )
}