import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Main}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp;