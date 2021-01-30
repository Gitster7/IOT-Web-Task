import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Foot from './foot.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><img className="footImage" src="https://www.connexionfrance.com/var/connexion/storage/images/_aliases/articleimage/media/images/jogging-4910487_6402/1003359-1-eng-GB/jogging-4910487_640.jpg" alt="Footer Image" /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><Foot /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
