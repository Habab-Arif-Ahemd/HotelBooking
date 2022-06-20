import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Homepage';
import HotelView from './components/HotelView/Hotel-view'
import Header from './Page/Header/Header'
import About from './components/About/About';

function App() {
  return (
 
    <Router>
                <Header></Header>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Hotels" element={<HotelView/>}/>
          <Route exact path="/About" element={<About/>}/>

        </Routes>
    </Router>
  );
}

export default App;
