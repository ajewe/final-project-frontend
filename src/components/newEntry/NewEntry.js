import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddProcedure } from './AddProcedure'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core';
import reducers from '../../redux/reducers';

const useStyles = makeStyles({
  formField: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    margin: '0 10%'
  }
})

export const NewEntry = () => {
  const classes = useStyles();
  // const allEntries = useSelector(state => state.logs.entries)
  const dispatch = useDispatch();

  const [ newEntry, setNewEntry ] = React.useState({
    quickInfo: "",
    results: "",
    yield: ""
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
    // console.log(updateProcedures)
    console.log(newProceduresArray)
  }

  const addProcedure = () => {
    setProcedures([
      ...procedures,
        {
          date: "",
          entry: ""
        }
    ])
    console.log(procedures)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // const payload = { ...newEntry, ...procedures }
    // dispatch(action(payload))
    console.log( procedures[0])
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
          AddProcedure
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