import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MenuPopUp } from './MenuPopUp'
import { addBook } from '../../redux/actions'
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const useStyles = makeStyles(() => ({
  labelField: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

export const LeftNavigation = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allBooks = useSelector( state => state.books )
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const [ bookInput, setBookInput ] = React.useState({
    bookName: "",
    displayInput: false,
  })

  const handleBookChange = e => {
    setBookInput({
      ...bookInput,
      bookName: e.target.value
    })
  }

  const handleBookStateSubmit = e => {
    e.preventDefault()
    dispatch(addBook(bookInput.bookName))
    setBookInput({
      bookName: "",
      displayInput: false,
    })
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget.getAttribute("bookname"))
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
          <form onSubmit={ handleBookStateSubmit }>
            <input 
              autoFocus="autofocus" 
              className="left-nav-input"
              onChange={ handleBookChange }/>
          </form>}
      <List>
        {allBooks.map((text) => (
          <ListItem 
            button 
            key={ text }
            onClick={ handleClick }
            aria-describedby={ id }
            bookName = { text }
          >
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
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