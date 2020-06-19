import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddProcedure } from './AddProcedure'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core';
import { addLog } from '../../redux/actions';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  formField: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    margin: '0 10%'
  }
})

export const NewEntry = (props) => {
  const classes = useStyles();
  const allLogs = useSelector(state => state.logs)
  const dispatch = useDispatch();
  const history = useHistory()
  let currentBookEntryNumber = 0;

  const [ newEntry, setNewEntry ] = React.useState({
    bookName: props.match.params.id,
    bookEntryNumber: 1,
    quickInfo: "",
    results: "",
    yield: "",
    lastUpdated: "",
  })

  const [ procedures, setProcedures ] = React.useState([
      {
        date: "",
        entry: ""
      }
    ]
  )

  const findBookEntryNumber = () => {
    const logsinCurrentBookArr = [];
    //search allLogs for bookName that matches props.match.params.id, add these to array
    for ( let i = 0; i < allLogs.length; i++ ) {
      if ( allLogs[i].bookName === props.match.params.id ) {
        logsinCurrentBookArr.push(allLogs[i])
      }
    }
    if ( logsinCurrentBookArr.length === 0 ) {
      return
    }
    //sort array by biggest to smallest bookEntryNumber
    logsinCurrentBookArr.sort((a, b) => b.bookEntryNumber - a.bookEntryNumber)
    //add 1 to biggest bookEntryNumber, return this currentBookEntryNumber
    currentBookEntryNumber = logsinCurrentBookArr[0].bookEntryNumber + 1
    setNewEntry({
      ...newEntry,
      bookEntryNumber: currentBookEntryNumber
    })
  }
  useEffect(() => findBookEntryNumber(), [])

  const handleEntryChange = e => {
    setNewEntry({
      ...newEntry,
      [e.target.name]: e.target.value
    })
  }

  const handleProcedureChange = (e, i) => {
    const newProceduresArray = procedures.slice()
    const propertyName = e.target.name
    newProceduresArray[i][propertyName]= e.target.value
    setProcedures(newProceduresArray)
  }

  const addProcedure = () => {
    setProcedures([
      ...procedures,
        {
          date: "",
          entry: ""
        }
    ])
  }

  const setDateAndTimeCreated = () => {
    let newEntryObject = newEntry
    const today = Date.now();
    newEntryObject.lastUpdated = today
    setNewEntry({newEntryObject})
  }

  const handleSubmit = e => {
    e.preventDefault()
    setDateAndTimeCreated()
    const payload = { ...newEntry, procedures }

    // newEntry = { a: 'a' }
    // payload = { newEntry } -> { newEntry: { a: 'a'} } 
    // payload = { ...newEntry } -> { a: 'a' }

    dispatch(addLog(payload))
    alert('Entry added!')
    history.push("/")
  }

  return (
      <form className={ classes.formField } onSubmit={ handleSubmit }>
        <TextField
          id="standard-basic"
          label="Quick Info (<10 words)"
          name="quickInfo"
          value={ newEntry.quickInfo }
          onChange={ handleEntryChange }
        />
        <label>Procedure:</label>
        {procedures.map((_, i) => {
          return (
            <AddProcedure
              key={i}
              index={i}
              handleProcedureChange={ handleProcedureChange }
              procedures={ procedures } 
            />
          )
        })}
        
        <Button
          variant="contained"
          onClick={addProcedure}>
          Add a new Day
        </Button>
        <TextField
          id="standard-basic"
          label="Results"
          name="results"
          value={ newEntry.results }
          onChange={ handleEntryChange }
        />
        <TextField
          id="standard-basic"
          label="Yield (%)"
          name="yield"
          value={ newEntry.yield }
          onChange={ handleEntryChange }
        />
        <Button
          type="submit"
          variant="contained">
          Save
        </Button>
        <h3>Entry {newEntry.bookEntryNumber}</h3>
      </form>
  )
}