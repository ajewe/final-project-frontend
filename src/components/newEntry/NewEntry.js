import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { LeftNavigationContainer } from "../navigation/LeftNavigation.container";
import { AddProcedure } from "./AddProcedure";
import { fetchLogs, addLog } from "../../redux/actions/logsActions";
import { fetchBooks } from "../../redux/actions/booksActions";
/* global ChemDoodle */

export const NewEntry = (props) => {
  const user = useSelector((state) => state.user);
  const userToken = user.token;
  const allLogs = useSelector((state) => state.logs);
  const dispatch = useDispatch();
  const history = useHistory();
  const [sketcher, setSketcher] = React.useState(null);
  const [newEntry, setNewEntry] = React.useState({
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
  });

  const [procedures, setProcedures] = React.useState([
    {
      date: "",
      entry: "",
    },
  ]);

  useEffect(() => {
    dispatch(fetchBooks(userToken));
    dispatch(fetchLogs(userToken));
    //need to make sketcher responsive*****
    let newSketcher = new ChemDoodle.SketcherCanvas("canvas-id", "850", "350", {
      useServices: false,
      oneMolecule: false,
      isMobile: false,
    });
    setSketcher(newSketcher);
  }, []);

  useEffect(() => {
    findBookEntryNumber();
  }, [allLogs]);

  const findBookEntryNumber = () => {
    const logsinCurrentBookArr = [];
    //search allLogs for book_id that matches props.match.params.id, add these to array
    for (let i = 0; i < allLogs.length; i++) {
      if (allLogs[i].book_id === parseInt(props.match.params.id)) {
        logsinCurrentBookArr.push(allLogs[i]);
      }
    }
    //if there aren't any, entry is already set to one so return
    if (logsinCurrentBookArr.length === 0) {
      return;
    }
    //sort array by bookEntryNumber in descending order
    logsinCurrentBookArr.sort(
      (a, b) => b.book_entry_number - a.book_entry_number
    );
    //add 1 to biggest bookEntryNumber, return this currentBookEntryNumber
    let updatedNewEntry = { ...newEntry };
    let newBookEntryNumber = logsinCurrentBookArr[0].book_entry_number + 1;
    updatedNewEntry.bookEntryNumber = newBookEntryNumber;
    setNewEntry(updatedNewEntry);
  };

  const handleEntryChange = (e) => {
    setNewEntry({
      ...newEntry,
      [e.target.name]: e.target.value,
    });
  };

  const handleProcedureChange = (e, i) => {
    const newProceduresArray = procedures.slice();
    const propertyName = e.target.name;
    newProceduresArray[i][propertyName] = e.target.value;
    setProcedures(newProceduresArray);
  };

  const addProcedure = () => {
    setProcedures([
      ...procedures,
      {
        date: "",
        entry: "",
      },
    ]);
  };

  const setDateAndTimeCreated = () => {
    let newEntryObject = newEntry;
    const today = Date.now();
    newEntryObject.lastUpdated = today;
    setNewEntry({ newEntryObject });
  };

  const setSketchData = () => {
    let newEntryObject = newEntry;
    let molecules = sketcher.molecules;
    let shapes = sketcher.shapes;
    if (shapes.length) {
      let sketchDataRxnFile = ChemDoodle.writeRXN(molecules, shapes);
      newEntryObject.rxnSketch.fileData = sketchDataRxnFile;
      newEntryObject.rxnSketch.fileType = "rxn";
      setNewEntry({ newEntryObject });
    } else if (molecules.length) {
      let mol = sketcher.getMolecule();
      let sketchDataMolFile = ChemDoodle.writeMOL(mol);
      newEntryObject.rxnSketch.fileData = sketchDataMolFile;
      newEntryObject.rxnSketch.fileType = "mol";
      setNewEntry({ newEntryObject });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDateAndTimeCreated();
    setSketchData();
    const payload = { ...newEntry, procedures };
    dispatch(addLog(payload, userToken));
    alert("Entry added!");
    history.push("/");
  };
  // todo put input as a new component and reuse, and buttons
  return (
    // this should probably be called main container tbh
    <LeftNavigationContainer userToken={userToken} user={user}>
      <div className="max-w-4xl">
        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col bg-white p-5 ml-5"
        >
          <div className="pb-4">
            <label htmlFor="quick-entry-info" className="sr-only">
              Quick Info
            </label>
            <input
              id="quick-entry-info"
              name="quickInfo"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Quick Info (<10 words)"
              value={newEntry.quickInfo}
              onChange={handleEntryChange}
              autoFocus
            />
          </div>
          <canvas
            id="canvas-id"
            className="flex border border-solid border-black"
          />
          <div className="flex flex-col items-center my-4">
            <label className="self-start my-2">Procedure:</label>
            {procedures.map((_, i) => {
              return (
                <AddProcedure
                  key={i}
                  index={i}
                  handleProcedureChange={handleProcedureChange}
                  procedures={procedures}
                />
              );
            })}
            <button
              type="button"
              onClick={addProcedure}
              className="w-3/12 py-1 mt-2 border border-solid bg-indigo-500 text-white"
            >
              Add a new Day
            </button>
          </div>
          <div className="my-4 flex flex-col items-center">
            <input
              id="results"
              name="results"
              value={newEntry.results}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
              placeholder="Results"
              onChange={handleEntryChange}
            />
            <input
              id="yield"
              name="yield"
              value={newEntry.yield}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-3"
              placeholder="Yield (%)"
              onChange={handleEntryChange}
            />
            <button
              className="w-4/12 py-2 mt-6 border border-solid bg-indigo-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Save
            </button>
          </div>
          <div className="w-full text-right font-bold">
            <h3>Entry {newEntry.bookEntryNumber}</h3>
          </div>
        </form>
      </div>
    </LeftNavigationContainer>
  );
};
