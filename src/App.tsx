import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginPage } from './components/LoginPage/LoginPage';

function App() {

  return (
    <>
    <ToastContainer />
        <LoginPage/>
        </>
  )
}

export default App
