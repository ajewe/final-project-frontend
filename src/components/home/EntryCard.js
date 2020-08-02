import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core/';
/* global ChemDoodle */

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: "20%",
  //   minWidth: 200,
  // },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export const EntryCard = (props) => {
  const classes = useStyles();

  const createDateFromLastUpdated = () => {
    //convert from str to int 
     let timestamp = parseInt(props.lastUpdated)
     let date = new Date(timestamp)
     //convert to be more legible for humans
     let humanDate = date.toDateString()
     return humanDate
  }

  useEffect(() => {
    if (props.rxnSketch.fileData) {
      let myCanvas = new ChemDoodle.ViewerCanvas(`myCanvas-${props.index}`, '200', '100');
      if (props.rxnSketch.fileType === "rxn") {
        let rxnData = ChemDoodle.readRXN(props.rxnSketch.fileData);
        myCanvas.loadContent(rxnData.molecules, rxnData.shapes)
      }
      if (props.rxnSketch.fileType === "mol") {
        let molData = ChemDoodle.readMOL(props.rxnSketch.fileData)
        myCanvas.loadMolecule(molData)
      }
    }
  }, [props]);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.bookName + ' - Entry ' + props.bookEntryNumber}
        titleTypographyProps={{ variant:'h6' }}
        subheader={createDateFromLastUpdated()}
      />
      <div className="entry-card-canvas-div">
        {props.rxnSketch.fileData ? 
          <canvas id={`myCanvas-${props.index}`} /> 
        : 
          <div className="entry-card-no-canvas">
            <Typography>
              No Reaction Scheme
            </Typography>
          </div>
        }
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.quickInfo}
        </Typography>
      </CardContent>
    </Card>
  );
}