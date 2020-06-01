import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
        title={`Title ` + (props.index + 1)}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        // image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.quickInfo}
        </Typography>
      </CardContent>
    </Card>
  );
}