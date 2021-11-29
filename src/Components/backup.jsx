import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Typography from '@mui/material/Typography';
import { Grid, TextField, Button, Select, MenuItem, Badge } from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import * as States from '../Data/States';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';




const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required"),
  lastName: yup.string().required("Last Name should be required"),
  email: yup.string().email().required("Email should be required"),
  gender: yup.string().required("Gender should be required")
});

const theme = createTheme();
const useStyles = makeStyles({
  pageContent: {
    marging: theme.spacing(3),
    padding: theme.spacing(3),
  },
  chkroot: {
    // '& .Checkbox-root': {
    //   verticalAlign: 'top',
    marginLeft: "1%",


  }
});

function ClaimForm() {

  const { register, handleSubmit, errors, reset, control } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });


  const submitForm = (data) => {
    debugger;
    alert(JSON.stringify(data))
    //console.log()
  };

  const classes = useStyles();

  return (


    <Paper>

      <Grid item xs={12}>
        <Typography gutterBottom variant="h4" align="center" color="primary" component="h1">
          ClaimForm
        </Typography>
      </Grid>

      <form onSubmit={handleSubmit(submitForm)} onReset={reset}>

          <Grid item >
            {/* <select name="gender" ref={register}>
            <option value=""></option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
          </select> */}
            <Controller
              name="gender"
              control={control}
              defaultValue=""

              render={({ ref, ...field }) => {
                return (
                  <TextField style={{width:"222px"}}
                    select
                    {...field}
                    inputRef={ref}                                        
                    label="Gender"
                    variant="outlined"
                  >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="Mr">Mr</MenuItem>
                    <MenuItem value="Mrs">Mrs</MenuItem>
                    <MenuItem value="Miss">Miss</MenuItem>
                    <MenuItem value="Ms">Ms</MenuItem>
                  </TextField>
                );
              }}
            />
          </Grid>
          <br/>
          <Grid item >
            <TextField
              name="firstName"
              inputRef={register}
              type="text"
              error={!!errors?.firstName?.message}
              helperText={errors?.firstName?.message}
              label="First Name"
            />
          </Grid>

          <br />
          <Grid item >

            <TextField
              name="lastName"
              inputRef={register}
              type="text"
              error={!!errors?.lastName?.message}
              helperText={errors?.lastName?.message}
              label="Last Name"
            />

          </Grid>


          <br />
          <Grid item >
            <TextField
              name="email"
              inputRef={register}
              type="text"
              error={!!errors?.email?.message}
              helperText={errors?.email?.message}
              label="Email"
            />
          </Grid>
          <br />
          <Grid item>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="row-radio-buttons-group"

              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                  name="rdo1"
                  inputRef={register} />

                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                  name="rdo2"
                  inputRef={register}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  name="rdo3"
                  inputRef={register} />
              </RadioGroup>
            </FormControl>
          </Grid>





          <Grid item>
            <Typography>Time Period</Typography>
          </Grid>
          <FormControl className={classes.chkroot}>


            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="weeks"
                inputRef={register}
                name="chk1"
              />



              <FormControlLabel
                control={<Checkbox />}
                label="months"
                inputRef={register}
                name="chk2"
              />


              <FormControlLabel
                control={<Checkbox />}
                label="years"
                inputRef={register}
                name="chk3"
              />


              <FormControlLabel
                control={<Checkbox />}
                label="I did not find comparable work"
                inputRef={register}
                name="chk4"
              />
            </FormGroup>
          </FormControl>


          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}


          <br />
          <Grid container >
            <Grid item xs={12} sm={6} justifyContent="flex-end" container>
              <Button type="submit" variant="contained" color="primary">
                SUBMIT
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} justifyContent="flex-end" container>
              <Button type="reset" variant="contained" color="primary">
                RESET
              </Button>
            </Grid>
          </Grid>
    
      </form>

    </Paper>


  );
}

export default ClaimForm;