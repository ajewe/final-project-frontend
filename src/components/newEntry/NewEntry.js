import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeftNavigation } from '../navigation/LeftNavigation'
import { AddProcedure } from './AddProcedure';
import { fetchLogs, addLog } from '../../redux/actions/logsActions';
import { fetchBooks } from '../../redux/actions/booksActions'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
/* global ChemDoodle */

const useStyles = makeStyles({
  formField: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '20px',
    marginLeft: '220px',
    alignItems: 'center',
  },
  button: {
    width: '30%',
    margin: '10px'
  },
})

export const NewEntry = (props) => {
  const classes = useStyles();
  const user = useSelector( state => state.user )
  const userToken = user.token
  const allLogs = useSelector(state => state.logs)
  const dispatch = useDispatch();
  const history = useHistory()
  const [ sketcher, setSketcher ] = React.useState(null);
  
  const [ newEntry, setNewEntry ] = React.useState({
    bookId: props.match.params.id,
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
    dispatch(fetchBooks(userToken))
    dispatch(fetchLogs(userToken))
     //need to make sketcher responsive*****
    let newSketcher = new ChemDoodle.SketcherCanvas("canvas-id", "850", "350", {
      useServices: false,
      oneMolecule: false,
      isMobile: false,
    });
    setSketcher(newSketcher)
  }, [])

  useEffect(() => {
    findBookEntryNumber()
  }, [allLogs])

  const findBookEntryNumber = () => {
    const logsinCurrentBookArr = [];
    //search allLogs for book_id that matches props.match.params.id, add these to array
    for ( let i = 0; i < allLogs.length; i++ ) {
      if ( allLogs[i].book_id == props.match.params.id ) {
        logsinCurrentBookArr.push(allLogs[i])
      }
    }
    //if there aren't any, entry is already set to one so return
    if ( logsinCurrentBookArr.length === 0 ) {
      return
    }
    //sort array by bookEntryNumber in descending order 
    logsinCurrentBookArr.sort((a, b) => b.book_entry_number - a.book_entry_number)
    //add 1 to biggest bookEntryNumber, return this currentBookEntryNumber
    let updatedNewEntry = {...newEntry}
    let newBookEntryNumber = logsinCurrentBookArr[0].book_entry_number + 1
    updatedNewEntry.bookEntryNumber = newBookEntryNumber
    setNewEntry(updatedNewEntry)
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
    dispatch(addLog(payload, userToken))
    alert('Entry added!')
    history.push("/")
  }

  return (
    <>
      <LeftNavigation 
        userToken={ userToken }
        user={ user }/>
      <form className={ classes.formField } onSubmit={ handleSubmit }>
        <div>
          <TextField
            label="Quick Info (<10 words)"
            name="quickInfo"
            value={ newEntry.quickInfo }
            onChange={ handleEntryChange }
            fullWidth/>
          <div id="container-canvas">
            <canvas id="canvas-id" />
          </div>
          <label className="body-text" >Procedure:</label>
          <br />
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
        </div>
        <Button
          variant="contained"
          onClick={ addProcedure }
          className={classes.button}>
          Add a new Day
        </Button>
        <div className="new-entry-text-container">
          <TextField
            id="standard-basic"
            label="Results"
            name="results"
            value={ newEntry.results }
            onChange={ handleEntryChange }
            fullWidth/>
        </div>
        <div className="new-entry-text-container">
          <TextField
            id="standard-basic"
            label="Yield (%)"
            name="yield"
            value={ newEntry.yield }
            onChange={ handleEntryChange }
            fullWidth/>
        </div>
        <Button
          type="submit"
          variant="contained"
          className={classes.button}>
          Save
        </Button>
        <div id="new-entry-number-container">
          <h3>Entry {newEntry.bookEntryNumber}</h3>
        </div>
      </form>
    </>
  )
}