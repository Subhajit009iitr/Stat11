import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route 
        path={`/`}
        element={<Home />}
        />
        <Route 
        path={`/home`}
        element={<Home />}
        />
        <Route 
        path={`/login`}
        element={<Login />}
        />
      </Routes>
    </div>
  )
}

export default App;
