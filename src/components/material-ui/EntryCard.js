import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "20%",
    minWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export const EntryCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.bookName + ' - Entry ' + props.bookEntryNumber}
        titleTypographyProps={{variant:'h6' }}
        subheader={props.procedures[0].date}
      />
      <CardMedia
        className={classes.media}
        // image="/static/imagesblahblah/bleh.jpg"
        // title="Reaction"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{`Last Udpated (ms) ` + (props.lastUpdated)}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.quickInfo}
        </Typography>
      </CardContent>
    </Card>
  );
}