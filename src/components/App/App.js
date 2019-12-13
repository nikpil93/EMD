// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import { useState, useEffect } from 'react';
import NavBar from "../NavBar/NavBar";
import BottomNav from "../BottomNav/BottomNav";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BottomNav />
    </div>
  );
}

export default App;
