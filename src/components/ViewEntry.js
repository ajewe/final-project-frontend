import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
/* global ChemDoodle */

export const ViewEntry = (props) => {
  const selectedLogId = props.match.params.id
  const [ sketcher, setSketcher ] = React.useState(null);

  const findSelectedLog = state => {
    return state.logs.find(l => l.logId == selectedLogId)
  }
  const selectedLog = useSelector(state => findSelectedLog(state))

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
  //need a 'save changes' button to appear somehow with changes to canvas
  
  return (
    <div id="view-entry-paper">
      <div id="view-entry-pattern">
        <div id="view-entry-content">
          <h1>{selectedLog.bookName}: Entry {selectedLog.bookEntryNumber} </h1>
          <h2>Quick Info: {selectedLog.quickInfo} </h2>
          <canvas id="canvas-id" />
          <h2>Procedure: </h2>
            {selectedLog.procedures.map(p => {
              return (
                <div className="view-entry-procedure-div">
                  <h2 className="view-entry-procedure-date">{p.date} </h2>
                  <h2 className="view-entry-procedure-entry">{p.entry}</h2>
                </div>
              )
            })}
          <h2>Results: {selectedLog.results} </h2>
          <h2>Yield: {selectedLog.yield} </h2>
        </div>
      </div>
    </div>
  )
}