import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchSelectedLog, changeLog } from "../redux/actions/logsActions";
import { fetchBooks } from "../redux/actions/booksActions";
import { MainContainer } from "./common/MainContainer";
/* global ChemDoodle */

export const ViewEntry = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedLogId = props.match.params.id;
  const user = useSelector((state) => state.user);
  const userToken = user.token;
  const [sketcher, setSketcher] = React.useState(null);
  const selectedLog = useSelector((state) => state.selectedLog.log);

  const [editableLog, setEditableLog] = React.useState({ ...selectedLog });

  const [editEntry, setEditEntry] = React.useState({
    changesMade: false,
    quickInfoShowInput: false,
    procedureShowInput: false,
    resultsShowInput: false,
    yieldShowInput: false,
    procedures: [],
  });

  useEffect(() => {
    dispatch(fetchSelectedLog(selectedLogId, userToken));
    dispatch(fetchBooks(userToken));
  }, []);

  useEffect(() => {
    setEditEntry({
      ...editEntry,
      procedures: selectedLog?.procedures?.map(() => ({
        dateShowInput: false,
        entryShowInput: false,
      })),
    });
    setEditableLog({ ...selectedLog });

    if (!sketcher) {
      // todo make responsive
      let myCanvas = new ChemDoodle.SketcherCanvas("canvas-id", "600", "350", {
        useServices: false,
        oneMolecule: false,
        isMobile: false,
      });
      setSketcher(myCanvas);
      // Make new sketcher
      return;
    }

    if (selectedLog?.rxn_sketch?.fileType === "rxn") {
      let rxnData = ChemDoodle.readRXN(selectedLog.rxn_sketch.fileData);
      sketcher.loadContent(rxnData.molecules, rxnData.shapes);
    }
    if (selectedLog?.rxn_sketch?.fileType === "mol") {
      let molData = ChemDoodle.readMOL(selectedLog.rxn_sketch.fileData);
      sketcher.loadMolecule(molData);
    }
  }, [selectedLog]);

  const handleInputChange = (e) => {
    setEditableLog({
      ...editableLog,
      [e.target.name]: e.target.value,
    });
  };

  const handleProcedureChange = (e, i) => {
    setEditableLog({
      ...editableLog,
      procedures: [
        ...editableLog.procedures.slice(0, i),
        {
          ...editableLog.procedures[i],
          [e.target.name]: e.target.value,
        },
        ...editableLog.procedures.slice(i + 1),
      ],
    });
  };

  //'save changes' or 'discard changes' buttons appear when clicking on canvas
  let canvasClicked = () => {
    let newEditEntry = { ...editEntry, changesMade: true };
    setEditEntry(newEditEntry);
  };

  const changeDateAndTimeLastUpdated = () => {
    let newEditableLog = editableLog;
    const today = Date.now();
    newEditableLog.last_updated = today.toString();
    setEditableLog(newEditableLog);
  };

  const setSketchData = () => {
    let newEditableLog = editableLog;
    let molecules = sketcher.molecules;
    let shapes = sketcher.shapes;
    if (shapes.length) {
      let sketchDataRxnFile = ChemDoodle.writeRXN(molecules, shapes);
      newEditableLog.rxn_sketch.fileData = sketchDataRxnFile;
      newEditableLog.rxn_sketch.fileType = "rxn";
      setEditableLog(newEditableLog);
    } else if (molecules.length) {
      let mol = sketcher.getMolecule();
      let sketchDataMolFile = ChemDoodle.writeMOL(mol);
      newEditableLog.rxn_sketch.fileData = sketchDataMolFile;
      newEditableLog.rxn_sketch.fileType = "mol";
      setEditableLog(newEditableLog);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeDateAndTimeLastUpdated();
    // setSketchData()
    const payload = { ...editableLog };
    dispatch(changeLog(selectedLogId, payload, userToken));
    history.push("/");
  };

  return (
    <MainContainer userToken={userToken} user={user}>
      <div className="h-full w-full bg-paper-pattern">
        <div className="p-4 pt-2 pl-[16%]">
          <h1 className="text-3xl tracking-wide my-2">
            {selectedLog.book}: Entry {selectedLog.book_entry_number}{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <div
              className="mb-2 text-2xl tracking-wide"
              onClick={() => {
                setEditEntry({
                  ...editEntry,
                  quickInfoShowInput: true,
                  changesMade: true,
                });
              }}
            >
              <h2 className="inline">Quick Info: </h2>
              {editEntry.quickInfoShowInput ? (
                <input
                  className="w-full border border-gray-300"
                  value={editableLog.quick_info}
                  name="quick_info"
                  onChange={(e) => handleInputChange(e)}
                />
              ) : (
                <h2 className="inline">{selectedLog.quick_info} </h2>
              )}
            </div>
            <canvas id="canvas-id" onMouseDown={() => canvasClicked()} />
            <h3 className="my-2 text-xl tracking-wide">Procedure: </h3>
            <ul>
              {editableLog.procedures.map((p, i) => {
                return (
                  <li className="my-1">
                    {editEntry.procedures[i]?.dateShowInput ? (
                      <input
                        className="w-full border border-gray-300"
                        value={p.date}
                        name="date"
                        onChange={(e) => handleProcedureChange(e, i)}
                      />
                    ) : (
                      <p
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
                              ...editEntry.procedures.slice(i + 1),
                            ],
                          });
                        }}
                      >
                        {p.date}
                      </p>
                    )}
                    {editEntry.procedures[i]?.entryShowInput ? (
                      <input
                        className="w-full border border-gray-300"
                        value={p.entry}
                        name="entry"
                        onChange={(e) => handleProcedureChange(e, i)}
                      />
                    ) : (
                      <h2
                        className="ml-4"
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
                              ...editEntry.procedures.slice(i + 1),
                            ],
                          });
                        }}
                      >
                        {p.entry}
                      </h2>
                    )}
                  </li>
                );
              })}
            </ul>
            <div
              onClick={() => {
                setEditEntry({
                  ...editEntry,
                  resultsShowInput: true,
                  changesMade: true,
                });
              }}
            >
              <h3 className="my-2 text-xl tracking-wide">Results: </h3>
              {editEntry.resultsShowInput ? (
                <input
                  className="w-full border border-gray-300"
                  value={editableLog.results}
                  name="results"
                  onChange={(e) => handleInputChange(e)}
                />
              ) : (
                <h3 className="ml-4">{selectedLog.results}</h3>
              )}
            </div>
            <div
              onClick={() => {
                setEditEntry({
                  ...editEntry,
                  yieldShowInput: true,
                  changesMade: true,
                });
              }}
            >
              <h3 className="my-2 text-xl tracking-wide">Yield: </h3>
              {editEntry.yieldShowInput ? (
                <input
                  className="border border-gray-300"
                  value={editableLog.yield}
                  name="yield"
                  onChange={(e) => handleInputChange(e)}
                />
              ) : (
                <h2 className="ml-4">{selectedLog.yield}</h2>
              )}
            </div>
            {editEntry.changesMade ? (
              <div className="w-full flex justify-center mt-6">
                <button
                  className="w-4/12 py-2 mr-2 border border-solid bg-indigo-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Save Changes
                </button>
                <button
                  className="w-4/12 py-2 border border-solid bg-red-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to discard changes?"
                      )
                    ) {
                      history.push("/");
                    }
                  }}
                >
                  Discard Changes
                </button>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </MainContainer>
  );
};
