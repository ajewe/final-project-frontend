import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeftNavigation } from './navigation/LeftNavigation'
import { fetchSelectedLog } from '../redux/actions/logsActions'
import { changeLog } from '../redux/actions/logsActions'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
/* global ChemDoodle */

export const ViewEntry = (props) => {
  const history = useHistory()
  const dispatch = useDispatch();
  const selectedLogId = props.match.params.id
  const user = useSelector( state => state.user )
  const userToken = user.token
  const [ sketcher, setSketcher ] = React.useState(null);
  const selectedLog = useSelector( state => state.selectedLog )
  const [ isLoading, setIsLoading ] = React.useState(true)
  
  const updateLoading = () => {
    if (selectedLog) {
      setIsLoading(false)
    }
  }
  const [ editableLog, setEditableLog ] = React.useState({...selectedLog})
  // const findSelectedLog = state => {
  //   return state.logs.find(l => l.id == selectedLogId)
  // }
  // const selectedLog = useSelector(state => findSelectedLog(state))

  const [ editEntry, setEditEntry ] = React.useState({
    changesMade: false,
    quickInfoShowInput: false,
    procedureShowInput: false,
    resultsShowInput: false,
    yieldShowInput: false,
    procedures: []
  })

  useEffect(() => {
    dispatch(fetchSelectedLog(selectedLogId, userToken))
  }, [])

  useEffect(() => {
    updateLoading()
    setEditEntry({
      ...editEntry,
      procedures: selectedLog?.procedures?.map(() => ({
        dateShowInput: false,
        entryShowInput: false,
      }))
    })
    setEditableLog({...selectedLog})

    if (!sketcher) {
      //make responsive
      let myCanvas = new ChemDoodle.SketcherCanvas("canvas-id", "600", "350", {
        useServices: false,
        oneMolecule: false,
        isMobile: false,
      });
      setSketcher(myCanvas)
      // Make new sketcher
      return 
    }
    
    if (selectedLog?.rxn_sketch?.fileType === "rxn") {
      let rxnData = ChemDoodle.readRXN(selectedLog.rxn_sketch.fileData);
      sketcher.loadContent(rxnData.molecules, rxnData.shapes)
    }
    if (selectedLog?.rxn_sketch?.fileType === "mol") {
      let molData = ChemDoodle.readMOL(selectedLog.rxn_sketch.fileData)
      sketcher.loadMolecule(molData)
    }
  }, [selectedLog])

  const handleInputChange = e => {
    setEditableLog({
      ...editableLog,
      [e.target.name]: e.target.value
    })
  }

  const handleProcedureChange = (e, i) => {
      setEditableLog({
        ...editableLog,
        procedures: [
          ...editableLog.procedures.slice(0, i),
          {
            ...editableLog.procedures[i],
            [e.target.name]: e.target.value
          },
          ...editableLog.procedures.slice(i + 1)
        ]
      })
  }

  //'save changes' or 'discard changes' buttons appear when clicking on canvas
  let canvasClicked = () => {
    let newEditEntry = { ...editEntry, changesMade: true }
    setEditEntry(newEditEntry)
  }

  const changeDateAndTimeLastUpdated = () => {
    let newEditableLog = editableLog
    const today = Date.now();
    newEditableLog.last_updated = today.toString()
    setEditableLog(newEditableLog)
  }

  const setSketchData = () => {
    let newEditableLog = editableLog
    let molecules = sketcher.molecules
    let shapes = sketcher.shapes
    if (shapes.length) {
      let sketchDataRxnFile = ChemDoodle.writeRXN(molecules, shapes)
      newEditableLog.rxn_sketch.fileData = sketchDataRxnFile
      newEditableLog.rxn_sketch.fileType = "rxn"
      setEditableLog(newEditableLog)
    } else if (molecules.length) {
        let mol = sketcher.getMolecule()
        let sketchDataMolFile = ChemDoodle.writeMOL(mol)
        newEditableLog.rxn_sketch.fileData = sketchDataMolFile
        newEditableLog.rxn_sketch.fileType = "mol"
        setEditableLog(newEditableLog)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    changeDateAndTimeLastUpdated()
    setSketchData()
    const payload = { ...editableLog }
    dispatch(changeLog(selectedLogId, payload, userToken))
    history.push("/")
  }

  return (
    <>
      <LeftNavigation userToken={ userToken }
                      user={ user }
      />
        <div id="view-entry-paper">
          <div id="view-entry-pattern">
            {isLoading && 
              <h1> Loading...</h1>}


              <div id="view-entry-content">
                <h1>{selectedLog.book}: Entry {selectedLog.book_entry_number} </h1 >
                <form onSubmit={ handleSubmit }>
                  <div onClick={() => {
                    setEditEntry({
                      ...editEntry, 
                      quickInfoShowInput: true, 
                      changesMade: true,
                    })
                  }}>
                    <h2 className="view-entry-text">Quick Info: </h2>
                    {editEntry.quickInfoShowInput ? 
                      <input 
                        value={editableLog.quick_info} 
                        name="quick_info"
                        onChange={ e => handleInputChange(e) }
                      />
                      :
                      <h2 className="view-entry-text">{selectedLog.quick_info} </h2>
                    }
                  </div>
                  <canvas id="canvas-id" onMouseDown={() => canvasClicked()} />
                  <br />
                  <h2 className="view-entry-text">Procedure: </h2>
                    {editableLog.procedures.map((p, i) => {
                      return (
                        <div className="view-entry-procedure-div">
                          {editEntry.procedures[i] && editEntry.procedures[i].dateShowInput ?
                            <input 
                              value={p.date} 
                              name="date"
                              onChange={ e => handleProcedureChange(e, i) }
                            />
                          :
                            <h2 className="view-entry-procedure-date" 
                                onClick={() => {
                                  setEditEntry({
                                    ...editEntry,
                                    changesMade: true,
                                    procedures: [
                                      ...editEntry.procedures.slice(0, i),
                                      {
                                        ...editEntry.procedures[i],
                                        dateShowInput: true,
                                      },
                                      ...editEntry.procedures.slice(i + 1)
                                    ]
                                  })
                                }}
                            >
                              {p.date} 
                            </h2>
                          }
                          {editEntry.procedures[i] && editEntry.procedures[i].entryShowInput ?
                            <input 
                              value={p.entry} 
                              name="entry"
                              onChange={ e => handleProcedureChange(e, i) }
                            />
                          :
                            <h2 className="view-entry-procedure-entry"
                                onClick={() => {
                                  setEditEntry({
                                    ...editEntry,
                                    changesMade: true,
                                    procedures: [
                                      ...editEntry.procedures.slice(0, i),
                                      {
                                        ...editEntry.procedures[i],
                                        entryShowInput: true,
                                      },
                                      ...editEntry.procedures.slice(i + 1)
                                    ]
                                  })
                                }}
                            >
                              {p.entry}
                            </h2>
                          }
                        </div>
                      )
                    })}
                  <div onClick={() => {
                    setEditEntry({
                      ...editEntry, 
                      resultsShowInput: true, 
                      changesMade: true,
                    })
                  }}>
                    <h2 className="view-entry-text">Results: </h2>
                    {editEntry.resultsShowInput ?
                      <input 
                        value={editableLog.results}
                        name="results"
                        onChange={ e => handleInputChange(e) }
                      />
                      :
                      <h2 className="view-entry-text">{selectedLog.results}</h2>
                    }
                  </div>
                  <div onClick={() => {
                    setEditEntry({
                      ...editEntry, 
                      yieldShowInput: true, 
                      changesMade: true,
                    })
                  }}>
                    <h2 className="view-entry-text">Yield: </h2>
                    {editEntry.yieldShowInput ?
                      <input 
                        value={editableLog.yield} 
                        name="yield"
                        onChange={ e => handleInputChange(e) }
                      />
                      :
                      <h2 className="view-entry-text">{selectedLog.yield}</h2>
                    }
                  </div>
                  {/* Need to update lastUpdated when click 'Save Changes' */}
                  { editEntry.changesMade && 
                    <div id="view-entry-div-buttons">
                      <Button color="primary" 
                              variant="contained" 
                              type='submit'
                      >
                        Save Changes
                      </Button>
                      <Button color="secondary" 
                              variant="contained" 
                              onClick={() => {
                                if (window.confirm('Are you sure you want to discard changes?')) {
                                  history.push("/")
                                }
                              }}
                      >
                        Discard Changes
                      </Button>
                    </div>
                  }
                </form>
              </div>


            {/* } */}
          </div>
        </div>

    </>
  )
}