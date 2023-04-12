import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './login/login';

const App = () => {
  console.log('app')
  return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
