import React from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { loginUser, loginWithGoogle } from '../../sdk/firebaseAcctions';
import { LoginProps } from './types';
import './style.scss';


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
    <div className="login-root">
      <Paper className="login-paper" elevation={3}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className="login-form" onSubmit={handleLogin}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="login-submit"
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className="login-submit"
            onClick={loginWithGoogle}
          >
            Login with Google
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" align="center">
          Don't have an account?{' '}
          <Button color="primary" onClick={() => setIsLoginPage(false)}>
            Register
          </Button>
        </Typography>
      </Paper>
    </div>
  );
};


export default Login;