import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/landingPage';
import AddPage from './pages/addPage';
import EditPage from './pages/EditPage';



import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"

function App() {      
  return (
   <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Add" element={<AddPage/>}/>
          <Route path="/Edit" element={<EditPage/>}/>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Router>
   </>
  );
  }

export default App;
      

