import React from 'react';
import { useSelector } from 'react-redux';

export const ViewEntry = (props) => {
  const selectedLogId = props.match.params.id

  const findSelectedLog = state => {
    return state.logs.find(l => l.logId == selectedLogId)
  }
  const selectedLog = useSelector(state => findSelectedLog(state))

  return (
    <div id="view-entry-paper">
      <div id="view-entry-pattern">
        <div id="view-entry-content">
          <h1>{selectedLog.bookName}: Entry {selectedLog.bookEntryNumber} </h1>
          <h2>Quick Info: {selectedLog.quickInfo} </h2>
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