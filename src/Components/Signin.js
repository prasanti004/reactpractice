import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Typography from '@mui/material/Typography';
import { Grid, TextField, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles'

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required"),
  lastName: yup.string().required("Last Name should be required"),
  email: yup.string().email().required("Email should be required")
});

const theme = createTheme();
const useStyles = makeStyles({
  pageContent: {
    marging: theme.spacing(3),
    padding: theme.spacing(3),
  }
});

function Signin() {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });


  const submitForm = (data) => {
    alert(JSON.stringify(data))
    //console.log()
  };
  const classes = useStyles();


  return (
    <Paper className={classes.pageContent}>
      <Grid container >
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" align="center" color="primary" component="h1">
            Sign Up
          </Typography>
        </Grid>

        <form onSubmit={handleSubmit(submitForm)} noValidate>
          <Grid item xs={12}>
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
          <Grid item xs={12}>    

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
          <Grid item xs={12}>
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
          <Grid item xs={12} justifyContent="flex-end" container>
            <Button type="submit" variant="contained" color="primary">
              SUBMIT
            </Button>
          </Grid>
        </form>
      </Grid>
    </Paper>

  );
}

export default Signin;
