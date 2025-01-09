import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { addNewUser } from '../../sdk/firebaseAcctions';
import { LoginProps } from './types';
import './style.scss'

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
    <div className="register-root">
      <Paper className="register-paper" elevation={3}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className="register-form" onSubmit={handleRegister}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="register-submit"
          >
            Register
          </Button>
        </form>
        <Grid item xs={10} display={'flex'} alignItems={'center'} justifyContent={'center'}>
           <Typography variant="body2" color="textSecondary" align="center">
           if you have an account, please
                    <Button color="primary" onClick={() => setIsLoginPage(false)}>
                    Login
                    </Button>
                  </Typography>
        </Grid>
      </Paper>
    </div>
  );
};

export default Register;