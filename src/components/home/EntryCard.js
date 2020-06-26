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

  useEffect(() => {
    if (props.rxnSketch) {
      let myCanvas = new ChemDoodle.ViewerCanvas(`myCanvas-${props.index}`, '200', '100');
      let rxnData = ChemDoodle.readRXN(props.rxnSketch);
      myCanvas.loadContent(rxnData.molecules, rxnData.shapes)
    }
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.bookName + ' - Entry ' + props.bookEntryNumber}
        titleTypographyProps={{ variant:'h6' }}
        subheader={props.procedures[0].date}
      />
      <div className="entry-card-canvas-div">
        {props.rxnSketch ? 
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
        <Typography variant="body2" color="textSecondary" component="p">{`Last Updated (ms) ` + (props.lastUpdated)}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.quickInfo}
        </Typography>
      </CardContent>
    </Card>
  );
}