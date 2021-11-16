import React from 'react';
import Navbar from './components/Navbar';
import HeroComponent from './components/HeroComponent';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroComponent />
        
        
        <Routes>
          <Route path='/' exact  />
         
        </Routes>
      </Router>
    </>
  );
}

export default App;
