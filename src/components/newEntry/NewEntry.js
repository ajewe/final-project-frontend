import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
  //make dynamic state.entries.{props.selectedbook} or something
  // const specifiedBook = useSelector(state => state.logs.book2)
  const dispatch = useDispatch();
  const history = useHistory()

  const [ newEntry, setNewEntry ] = React.useState({
    bookName: props.match.params.id,
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
        {procedures.map((procedure, i) => {
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
      </form>

  )
}