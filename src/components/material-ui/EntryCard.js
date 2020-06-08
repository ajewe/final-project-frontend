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
  const firstProcedure = props.procedures[0]

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`Title ` + (props.index + 1)}
        subheader={firstProcedure.date}
      />
      <CardMedia
        className={classes.media}
        // image="/static/imagesblahblah/bleh.jpg"
        // title="Reaction"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{`Date Created ` + (props.dateCreated)}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">{`Time Created ` + (props.timeCreated)}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.quickInfo}
        </Typography>
      </CardContent>
    </Card>
  );
}