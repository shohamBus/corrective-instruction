import React from 'react';
import { Button, Grid, Grid2, TextField, Typography } from '@mui/material';
import { addNewUser } from '../../sdk/firebaseAcctions';
import { LoginProps } from './types';

const Register: React.FC<LoginProps> = (props) => {
  const { userName, password, email, dispatch, setIsLoginPage } = props;
  
  const handleRegister = async (e: React.FormEvent) => {
    const dataForRegister = { userName, password, email }
    e.preventDefault();
    try {
      addNewUser(dataForRegister)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Grid2 container alignItems="center" justifyContent="center" display={'flex'} spacing={2} direction={'column'}>
      <Grid item xs={8}>
        <TextField
          helperText="Please enter your user name"
          id="Username"
          type='username'
          label="Username"
          onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          helperText="Please enter your Password"
          id="Password"
          type='password'
          label="Password"
          onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
        />
      </Grid>
     
        <Grid item xs={8}>
          <TextField
            helperText="Please enter your Email"
            id="Email"
            type='email'
            label="Email"
            onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
          />
        </Grid>
      <Grid item xs={8}>
          <Button variant="contained" onClick={handleRegister}>
            Register
          </Button>
          <Grid item xs={10} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Typography variant="button" color="primary" align="center">if you have an account, please</Typography>
            <Button variant='outlined' color="primary" onClick={() => setIsLoginPage(true)}>Login</Button>
          </Grid>
      </Grid>
    </Grid2>
  );
};

export default Register;