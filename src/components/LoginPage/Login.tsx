import React from 'react';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { loginUser, loginWithGoogle } from '../../sdk/firebaseAcctions';
import { LoginProps } from './types';
import './style.scss';
import { useTranslation } from 'react-i18next';


const Login: React.FC<LoginProps> = (props) => {
const { userName, password, dispatch, setIsLoginPage } = props;
const { t } = useTranslation();
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
        {t('loginPage.login')}
        </Typography>
        <form className="login-form" onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label={t('loginPage.userName')}
            name="username"
            autoComplete="username"
            autoFocus
            dir='rtl'
            onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={t('loginPage.password')}
            type="password"
            id="password"
            dir='rtl'
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
            {t('loginPage.login')}
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className="login-submit"
            onClick={loginWithGoogle}
          >
            {t('loginPage.loginWithGoogle')}
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" align="center">
          <Button color="primary" onClick={() => setIsLoginPage(false)}>
            {t('loginPage.register')}
          </Button>
        {t('loginPage.youDontHaveAUserYet')}
        </Typography>
      </Paper>
    </div>
  );
};


export default Login;