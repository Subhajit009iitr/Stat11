import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Auth from './pages/auth';
import MainScorecard from './pages/mainScorecard';
import Help from "./pages/help";
import Home2 from './pages/home2'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/scoreboard`} element={<MainScorecard />} />
        <Route path={`/auth`} element={<Auth />} />
        <Route path={`/help`} element={<Help />} />
        <Route 
        path={`/home`}
        element={<Home2 />}
        />
        <Route 
        path={`/scorecard`}
        element={<MainScorecard/>}
        />
        <Route 
        path={`/scorecard`}
        element={<MainScorecard/>}
        />
      </Routes>
    </div>
  );
}

export default App;
