import React from 'react';
import { Button, Grid, Grid2, TextField, Typography } from '@mui/material';
import { loginUser, loginWithGoogle } from '../../sdk/firebaseAcctions';
import { LoginProps } from './types';

const Login: React.FC<LoginProps> = (props) => {
const { userName, password, dispatch, setIsLoginPage } = props;

  const handleLogin = async (e: React.FormEvent) => {
    const dataForLogin = { userName, password }
    e.preventDefault();
    try {
      loginUser(dataForLogin)
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
          <>
            <Grid item xs={8}>
              <Button variant="contained" onClick={handleLogin}>
                Login
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Button variant="contained" onClick={loginWithGoogle}>
                Login with Google
              </Button>
            </Grid>
          </>
          <Grid item xs={10} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Typography variant="button" color="primary" align="center">if you don't have an account, please</Typography>
            <Button variant='outlined' color="primary" onClick={() => setIsLoginPage(false)}>register</Button>
          </Grid>
        
      </Grid>
    </Grid2>
  );
};

export default Login;