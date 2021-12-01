import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Grid } from '@mui/material';
import { Form, useForm } from './useForm';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import { width } from '@mui/system';



const theme = createTheme();
const useStyles = makeStyles({
    root: {
        '& .Button-root': {
            margin: theme.spacing(1, 'auto'),
            textTransform: 'none',
            width: '2%'
        }
    }

});


const initialFValues = {
    userid: '',
    username: '',
}
export default function Login() {

    const [value, setValue] = React.useState('');

    const onChange = event => {
        localStorage.setItem('claimformdata',);

        setValue(event.target.value);
    };
    const navigate = useNavigate();
   // navigate('/claimform');


    const handleSubmit = () => {        
       
       navigate('/claimform');
    
    }




    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>

                    <TextField
                        variant="outlined"
                        label="UserId"
                        name="userid"
                    // value={values.userid}
                    // onChange={handleInputChange}
                    />

                    <TextField
                        variant="outlined"
                        label="UserName"
                        name="username"
                    // value={values.username}
                    // onChange={handleInputChange}
                    />

                    <Stack direction="row" >
                        <Button type="submit" color="primary" className="px-4"
                            
                        >
                            Login
                        </Button>
                    </Stack>

                </Grid>
            </Grid>
        </Form>
    )
}