import React from 'react';
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 300,
    backgroundColor: '#31384C',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function InfoBoxes({ emails, conversions }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1">
                Emails Sent
              </Typography>
              <Typography variant="h1">
                {emails}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1">
                Conversions
              </Typography>
              <Typography variant="h1">
                {conversions}
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1">
                Your earnings
              </Typography>
              <Typography variant="h1">
                ${conversions * 50}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

InfoBoxes.propTypes = {
  emails: PropTypes.number,
  conversions: PropTypes.number
}