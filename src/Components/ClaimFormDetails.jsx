import React from 'react';
import { TextField, Grid } from '@mui/material';
import { Form, useForm } from './useForm';
import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, Checkbox } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
]

const theme = createTheme();
const useStyles = makeStyles({
  root: {
    '& .Button-root': {
      margin: theme.spacing(1, 'auto'),
      textTransform: 'none'
    }
  }

});

const initialFValues = {
  
  firstname: '',
  lastname: '',
  email: '',
  gender: '',
  dob: new Date(),
  isPermanent: ''
}

const ClaimFormDetails = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => {
    localStorage.setItem('claimformdata',);

    setValue(event.target.value);
  };
  const classes = useStyles();

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues);

  const handleSubmit = e => {
    e.preventDefault()
    window.alert(JSON.stringify(values));
    resetForm()

  }

  return (

    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label="Firstname"
            name="firstname"
            value={values.firstname}
            onChange={handleInputChange}

          />
          <TextField
            variant="outlined"
            label="Lastname"
            name="lastname"
            value={values.lastname}
            onChange={handleInputChange}

          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}

          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="DateOfBirth"
              name="dob"
              value={values.dob}
              // onChange={date => onChange(convertToDefEventPara(dob, date))}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <FormControl >
            <FormLabel>Gender</FormLabel>
            <RadioGroup row
              name="radio"
              value={values.radio}
              onChange={onChange}
              label="Gender">
              {
                genderItems.map(
                  item => (
                    <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.title} />
                  )
                )
              }
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormControlLabel
              control={<Checkbox
                name="checkbox"
                color="primary"
                checked={value}
              // onChange={e => onChange(convertToDefEventPara(checkbox, e.target.checked))}
              />}
              label="Perminent Employee"
            />
          </FormControl>

          <Stack direction="row" spacing={2}>
            <Button
              classes={{ root: classes.root }}
              type="submit" variant="contained" color="primary">
              SUBMIT
            </Button>
            <Button
              classes={{ root: classes.root }}
              type="submit" variant="contained" color="primary">
              RESET
            </Button>
          </Stack>



        </Grid>
      </Grid>
    </Form>
  )
};

export default ClaimFormDetails;