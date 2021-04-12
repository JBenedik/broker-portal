import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top: '10%',
    left: '30%',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '70%',
    },
  },
}));

export default function NewModal({ data, tab }) {
  const classes = useStyles();
  const [checked, setChecked] = useState({
    insurance: false,
    medicare: false,
    ancillary: false,
    shortTerm: false,
  });

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };


  return (
    <div className={classes.paper} >
      <Typography variant='h2'>{tab === 'client' ? 'Edit Client Referral' : 'Edit Broker Referral'}</Typography>
      <Divider style={{ marginBottom: '20px' }} />
      <Typography variant='h3'>Referral Info</Typography>
      <form className={classes.root}>
        <TextField label='First Name' defaultValue={data.firstName} />
        <TextField label='Last Name' defaultValue={data.lastName} />
        <TextField label='Phone' defaultValue={data.phone} />
        <TextField label='Email' defaultValue={data.email} />
        <TextField label='Zip' />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.insurance}
              onChange={handleChange}
              name='insurance'
              color='primary'
            />
          }
          label='Health Insurance'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.medicare}
              onChange={handleChange}
              name='medicare'
              color='primary'
            />
          }
          label='Medicare'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.ancillary}
              onChange={handleChange}
              name='ancillary'
              color='primary'
            />
          }
          label='Ancillary Products'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checked.shortTerm}
              onChange={handleChange}
              name='shortTerm'
              color='primary'
            />
          }
          label='Short Term Medical'
        />
        <TextField
          label='Notes'
          multiline
          rows={4}
          placeholder='Add Notes'
          variant='outlined'
        />
      </form>
    </div >
  )
}

NewModal.propTypes = {
  data: PropTypes.object,
  tab: PropTypes.string
}