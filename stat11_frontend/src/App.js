import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Help from "./pages/help";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/auth`} element={<Auth />} />
        <Route path={`/help`} element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
