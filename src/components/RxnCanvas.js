import React, { useEffect } from 'react'
/* global ChemDoodle */

export const RxnCanvas = () => {
  useEffect(() => {
    new ChemDoodle.SketcherCanvas("canvas-id", "500px", "300px", {
      useServices: false,
      oneMolecule: false,
      isMobile: false,
      includeToolbar: true
    });
  }, [])
  
  return (
    <>
      <canvas id="canvas-id" />
    </>
  )
}

