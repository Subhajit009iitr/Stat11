import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Auth from './pages/auth';
import UpdateScore from './pages/updateScore';
import MainScorecard from './pages/mainScorecard';
import DisplayTeams from './pages/displayTeams';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route 
        path={`/`} 
        element={<Auth />} 
        />
        <Route 
        path={`/`}
        element={<Auth />}
        />
        <Route 
        path={`/displayTeams`}
        element={<DisplayTeams />}
        />
        <Route
        path={`/home`} 
        element={<Home />} 
        />
        <Route 
        path={`/auth`} 
        element={<Auth />} 
        />
        <Route 
        path={`/updateScore`}
        element={<UpdateScore />}
        />
        {/* <Route 
        path={`/high`}
        element={<Highlights/>}
        /> */}
        <Route 
        path={`/scorecard`}
        element={<MainScorecard/>}
        />
      </Routes>
    </div>
  );
}

export default App;
