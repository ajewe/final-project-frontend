import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddProcedure } from './AddProcedure';
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core';
import { addLog } from '../../redux/actions';
import { useHistory } from 'react-router-dom';
/* global ChemDoodle */

const useStyles = makeStyles({
  formField: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '20px',
  }
})

export const NewEntry = (props) => {
  const classes = useStyles();
  const allLogs = useSelector(state => state.logs)
  const dispatch = useDispatch();
  const history = useHistory()
  const [ sketcher, setSketcher ] = React.useState(null);
  
  const [ newEntry, setNewEntry ] = React.useState({
    bookName: props.match.params.id,
    bookEntryNumber: 1,
    rxnSketch: {
      fileData: null,
      fileType: null,
    },
    quickInfo: "",
    results: "",
    yield: "",
    lastUpdated: "",
    logId: 0,
  })

  const [ procedures, setProcedures ] = React.useState([
      {
        date: "",
        entry: ""
      }
    ]
  )

  useEffect(() => {
    
     //make sketcher responsive*****
    let newSketcher = new ChemDoodle.SketcherCanvas("canvas-id", "850", "350", {
      useServices: false,
      oneMolecule: false,
      isMobile: false,
    });
    setSketcher(newSketcher)
    findBookEntryNumber()
    generateLogId()
  }, [])

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
    let updatedNewEntry = newEntry
    let newBookEntryNumber = logsinCurrentBookArr[0].bookEntryNumber + 1
    updatedNewEntry.bookEntryNumber = newBookEntryNumber
    setNewEntry(updatedNewEntry)
  }

  //going to need to generate unique logId, but for the time being...
  const generateLogId = () => {
    let logsSortedArr = allLogs.sort((a, b) => b.logId - a.logId)
    let newId = logsSortedArr[0].logId + 1
    setNewEntry({
      ...newEntry,
      logId: newId
    })
  }

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

  const setSketchData = () => {
    let newEntryObject = newEntry
    let molecules = sketcher.molecules
    let shapes = sketcher.shapes
    if (shapes.length) {
      let sketchDataRxnFile = ChemDoodle.writeRXN(molecules, shapes)
      newEntryObject.rxnSketch.fileData = sketchDataRxnFile
      newEntryObject.rxnSketch.fileType = "rxn"
      setNewEntry({newEntryObject})
    } else if (molecules.length) {
        let mol = sketcher.getMolecule()
        let sketchDataMolFile = ChemDoodle.writeMOL(mol)
        newEntryObject.rxnSketch.fileData = sketchDataMolFile
        newEntryObject.rxnSketch.fileType = "mol"
        setNewEntry({newEntryObject})
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setDateAndTimeCreated()
    setSketchData()
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
        <canvas id="canvas-id" />
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