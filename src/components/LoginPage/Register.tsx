import React from 'react';
import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { addNewUser } from '../../sdk/firebaseAcctions';
import { LoginProps } from './types';
import './style.scss'
import { useTranslation } from 'react-i18next';

const Register: React.FC<LoginProps> = (props) => {
  const { userName, password, email, dispatch, setIsLoginPage } = props;
  const { t } = useTranslation();
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
        {t('loginPage.register')}
        </Typography>
        <form className="register-form" onSubmit={handleRegister}>
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
            onChange={(e) => dispatch({ type: 'SET_USERNAME', payload: e.target.value })}
            dir='rtl'
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
            autoComplete="current-password"
            onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
             dir='rtl'
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={t('loginPage.email')}
            name="email"
            autoComplete="email"
            onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
             dir='rtl'
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="register-submit"
          >
          {t('loginPage.register')}
          </Button>
        </form>
        <Grid item xs={10} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Button color="primary" onClick={() => setIsLoginPage(true)}>
                    {t('loginPage.login')}
                    </Button>
           <Typography variant="body2" color="textSecondary" align="center">
           {t('loginPage.ifYouHaveAnAccount')}
                  </Typography>
        </Grid>
      </Paper>
    </div>
  );
};

export default Register;