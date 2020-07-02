import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
/* global ChemDoodle */

export const ViewEntry = (props) => {
  const selectedLogId = props.match.params.id
  const [ sketcher, setSketcher ] = React.useState(null);

  const findSelectedLog = state => {
    return state.logs.find(l => l.logId == selectedLogId)
  }
  const selectedLog = useSelector(state => findSelectedLog(state))

  const [ editEntry, setEditEntry ] = React.useState({
    changesMade: false,
    quickInfoShowInput: false,
    procedureShowInput: false,
    resultsShowInput: false,
    yieldShowInput: false,
    procedures: selectedLog.procedures.map(() => ({
      dateShowInput: false,
      entryShowInput: false,
    }))
  })
  const [ editableLog, setEditableLog ] = React.useState(selectedLog)

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

  useEffect(() => {

    //make sketcher responsive***
    let myCanvas = new ChemDoodle.SketcherCanvas("canvas-id", "600", "350", {
      useServices: false,
      oneMolecule: false,
      isMobile: false,
    });
    if (selectedLog.rxnSketch.fileType === "rxn") {
      let rxnData = ChemDoodle.readRXN(selectedLog.rxnSketch.fileData);
      myCanvas.loadContent(rxnData.molecules, rxnData.shapes)
    }
    if (selectedLog.rxnSketch.fileType === "mol") {
      let molData = ChemDoodle.readMOL(selectedLog.rxnSketch.fileData)
      myCanvas.loadMolecule(molData)
    }
    setSketcher(myCanvas)
  }, [])

  //'save changes' or 'discard changes' buttons appear when clicking on canvas
  let canvasClicked = () => {
    let newEditEntry = { ...editEntry, changesMade: true }
    setEditEntry(newEditEntry)
  }

  return (
    <div id="view-entry-paper">
      <div id="view-entry-pattern">
        <div id="view-entry-content">
          <h1>{selectedLog.bookName}: Entry {selectedLog.bookEntryNumber} </h1 >
          <form>
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
                  value={editableLog.quickInfo} 
                  name="quickInfo"
                  onChange={ e => handleInputChange(e) }
                />
                :
                <h2 className="view-entry-text">{selectedLog.quickInfo} </h2>
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
                <Button color="primary" variant="contained" >Save Changes</Button>
                <Button color="secondary" variant="contained" >Discard Changes</Button>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  )
}