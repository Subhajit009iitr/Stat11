import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Auth from './pages/auth';
import UpdateScore from './pages/updateScore';
import MainScorecard from './pages/mainScorecard';
import Help from './pages/help';
import Home2 from './pages/home2'
import DisplayTeams from './pages/displayTeams';
import Highlights from './pages/highlights'

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
        path={`/displayTeams`}
        element={<DisplayTeams />}
        />
        <Route 
        path={`/updateScore`}
        element={<UpdateScore />}
        />
        <Route 
        path={`/high`}
        element={<Highlights/>}
        />
      </Routes>
    </div>
  );
}

export default App;
