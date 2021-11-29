import React from "react";
import { useForm, Controller } from "react-hook-form";
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import { Grid, TextField, Button, Select, MenuItem, Badge, InputLabel } from '@mui/material';

export default function Test() {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = data => alert(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>


      <FormControl variant="outlined" style={{ width: "400px" }}>

        <Controller
          name="dob"
          control={control}
          defaultValue={new Date}

          render={({ ref, ...field }) => {

            return (
              <TextField
                variant="outlined"
                {...field}
                inputRef={ref}
                type="date"
              />
            );
          }}
        />

      </FormControl>




      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}