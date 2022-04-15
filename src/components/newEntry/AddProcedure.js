import React from "react";

export const AddProcedure = (props) => {
  return (
    <>
      <div id="add-procedure-date-container" className="inline-block w-full">
        <label htmlFor="date" className="sr-only">
          Date
        </label>
        <input
          id={`date-${props.key}`}
          name="date"
          type="date"
          className="appearance-none rounded-none relative block w-3/12 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="mm/dd/yy"
          onChange={(e) => {
            props.handleProcedureChange(e, props.index);
          }}
        />
      </div>
      <div id="add-procedure-entry-container" className="inline-block w-full">
        <label htmlFor="procedure" className="sr-only">
          Procedure
        </label>
        <textarea
          rows="5"
          id={`procedure-${props.key}`}
          name="entry"
          value={props.procedures.entry}
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Procedure"
          onChange={(e) => {
            props.handleProcedureChange(e, props.index);
          }}
        />
      </div>
    </>
  );
};
