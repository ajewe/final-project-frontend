/* global ChemDoodle */
import React, { useEffect } from "react";

export const ReactionEntryCard = (props) => {
  useEffect(() => {
    if (props.rxnSketch.fileData) {
      let myCanvas = new ChemDoodle.ViewerCanvas(
        `myCanvas-${props.index}`,
        "200",
        "100"
      );
      if (props.rxnSketch.fileType === "rxn") {
        let rxnData = ChemDoodle.readRXN(props.rxnSketch.fileData);
        myCanvas.loadContent(rxnData.molecules, rxnData.shapes);
      }
      if (props.rxnSketch.fileType === "mol") {
        let molData = ChemDoodle.readMOL(props.rxnSketch.fileData);
        myCanvas.loadMolecule(molData);
      }
    }
  }, [props]);

  const createDateFromLastUpdated = () => {
    //convert from str to int
    let timestamp = parseInt(props.lastUpdated);
    let date = new Date(timestamp);
    //convert to be more legible for humans
    let humanDate = date.toDateString();
    return humanDate;
  };

  return (
    <>
      <div className="py-6 px-4 shadow-lg shadow-slate-800 drop-shadow-md border-solid border rounded border-gray-900 border-opacity-10">
        <h3 className="text-xl font-bold">
          {props.bookName + " - Entry " + props.bookEntryNumber}
        </h3>
        <h4 className="text-gray-600 font-light pb-4">
          {createDateFromLastUpdated()}
        </h4>
        <div className="flex justify-center border-solid border rounded border-gray-900 border-opacity-10">
          {props.rxnSketch.fileData ? (
            <canvas id={`myCanvas-${props.index}`} />
          ) : (
            <div className="entry-card-no-canvas">
              <p>No Reaction Scheme</p>
            </div>
          )}
        </div>
        <p className="text-sm text-gray-600 font-light py-4">
          {props.quickInfo}
        </p>
      </div>
    </>
  );
};
