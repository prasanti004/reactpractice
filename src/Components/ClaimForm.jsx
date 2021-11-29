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


const schema = yup.object().shape({
  title: yup.string().required("Title should be required"),
  firstName: yup.string().required("First Name should be required"),
  lastName: yup.string().required("Last Name should be required"),
  dob: yup.date().required("Date of Birth should be required"),
  email: yup.string().email().required("Email should be required")
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


  },
  textfield: {
    width: "230px",
  }
});

function ClaimForm() {
  debugger;
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });


  // const submitForm = (data) => {
  //   alert('data')
  //   // alert(JSON.stringify(data))
  //   // localStorage.setItem("formdata",data)
  // };
  const submitForm = (data) => {

    alert(JSON.stringify(data))
  };
  const classes = useStyles();

  return (

    <Paper  >

      <Grid item >
        <Typography gutterBottom variant="h4" align="center" color="primary" component="h1">
          ClaimForm
        </Typography>
      </Grid>

      <form name="testform" onSubmit={handleSubmit(submitForm)} onReset={reset}>

      <Grid item >
          <Controller
            name="title"
            control={control}
            defaultValue=""

            render={({ ref, ...field }) => {
              return (
                <TextField style={{ width: "230px" }}
                  select
                  {...field}
                  inputRef={register}
                  label="Title"
                  variant="outlined"
                  error={!!errors?.title?.message}
                  helperText={errors?.title?.message}
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


        <br />
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
        <Grid item  >
          <Controller
            name="dob"
            control={control}
            defaultValue=""

            render={({ ref, ...field }) => {

              return (
                <TextField
                  className={classes.textfield}
                  variant="outlined"
                  {...field}
                  inputRef={ref}
                  type="date"
                  error={!!errors?.dob?.message}
                  helperText={errors?.dob?.message}
                />
              );
            }}
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
        <Grid item >
          <FormControl component="fieldset" >
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row>

              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                name="female"
                inputRef={register} />

              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                name="male"
                inputRef={register}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                name="other"
                inputRef={register} />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item >
          <FormControl component="fieldset" >
            <FormLabel component="legend">Time Period</FormLabel>

            <FormGroup row>
              <FormControlLabel
                control={<Checkbox />}
                label="weeks"
                inputRef={register}
                name="weeks"
              />

              <FormControlLabel
                control={<Checkbox />}
                label="months"
                inputRef={register}
                name="months"
              />

              <FormControlLabel
                control={<Checkbox />}
                label="years"
                inputRef={register}
                name="years"
              />

            </FormGroup>
          </FormControl>
        </Grid>

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
        <Grid container xs={12}>
          <Grid item xs={12} sm={6} justifyContent="flex-end" container>

          </Grid>
          <Grid item xs={12} sm={6} justifyContent="flex-end" container>

          </Grid>
        </Grid>
      </form>

    </Paper >


  );
}

export default ClaimForm;
