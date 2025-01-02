import React, { useEffect, useReducer, useState } from 'react'
import Login from './Login';
import Register from './Register';
import { Action } from './types';
import { EMPTY_STRING } from '../../sdk/constants';
import { getAllUsers } from '../../sdk/firebaseAcctions';

export const LoginPage = () => {
      const initialState = {
        userName: EMPTY_STRING,
        password: EMPTY_STRING,
        email: EMPTY_STRING,
        error: false
      };
      type State = typeof initialState;

      const reducer = (state: State, action: Action): State => {
        switch (action.type) {
          case 'SET_USERNAME':
            return { ...state, userName: action.payload };
          case 'SET_PASSWORD':
            return { ...state, password: action.payload };
          case 'SET_EMAIL':
            return { ...state, email: action.payload };
          case 'SET_ERROR':
            return { ...state, error: action.payload };
          default:
            return state;
        }
      };

      const [isLoginPage, setIsLoginPage] = useState(true);
      const [state, dispatch] = useReducer(reducer, initialState);
       const { userName, password, email } = state;
   
        useEffect(() => {
          const fetchData = async () => {
            try {
              const docs = await getAllUsers();
              console.log('getting docs', docs);
            } catch (error) {
              console.error('Error fetching documents:', error);
            }
          };
          fetchData();
        }, []);

  

  return (
   isLoginPage ?
  <Login 
    userName={userName} 
    password={password} 
    email={email} 
    dispatch={dispatch} 
    setIsLoginPage={setIsLoginPage} 
  /> 
  : 
  <Register 
    userName={userName} 
    password={password} 
    email={email} 
    dispatch={dispatch} 
    setIsLoginPage={setIsLoginPage} 
  />
  )
}
