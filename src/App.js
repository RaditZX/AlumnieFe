import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/landingPage';
import AddPage from './pages/addPage';
import EditPage from './pages/EditPage';
import DetailPage from './pages/DetailPage';
import EditProfilePage from './pages/EditProfilePage';
import Tabelalumni from './pages/tabelAlumni';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"
import TabelAlumni from './pages/tabelAlumni';
import Tabeluniversitas from './pages/tabelUniversitas';
import Formkerja from './pages/formKerja';
import Tabelperusahaan from './pages/tabelPerusahaan';
import Tabelwirausaha from './pages/tabelWirausaha';
import Universitasdetail from './pages/universitasDetailPage';
import Universitasadd from './pages/universitasAddPage';
import Universitasedit from './pages/universitasEditPage';
import Perusahaansdetail from './pages/perusahaanDetailPage';
import Perusahaanadd from './pages/perusahaanAddPage';
import Perusahaanedit from './pages/perusahaanEditPage';
import Wirausahaadd from './pages/wirausahaAdd';
import Wirausahadetail from './pages/wirausahaDetail';
import Wirausahaedit from './pages/wirausahaEdit';
import Formalumni from './pages/formPage';
import Formkuliah from './pages/formKuliah';


function App() {      
  return (
   <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/alumni/Add" element={<AddPage/>}/>
          <Route path="/alumni/Edit/:id" element={<EditPage/>}/>
          <Route path="/alumni/Detail/:id" element={<DetailPage/>}/>
          <Route path="/EditProfile" element={<EditProfilePage/>}/>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/alumni/tabel" element={<TabelAlumni/>}/>
          <Route path="/universitas/tabel" element={<Tabeluniversitas/>}/>
          <Route path="/universitas/Detail/:id" element={<Universitasdetail/>}/>
          <Route path="/universitas/Add" element={<Universitasadd/>}/>
          <Route path="/universitas/edit/:id" element={<Universitasedit/>}/>
          <Route path="/perusahaan/tabel" element={<Tabelperusahaan/>}/>
          <Route path="/perusahaan/Detail/:id" element={<Perusahaansdetail/>}/>
          <Route path="/perusahaan/Add" element={<Perusahaanadd/>}/>
          <Route path="/perusahaan/edit/:id" element={<Perusahaanedit/>}/>
          <Route path="/wirausaha/tabel" element={<Tabelwirausaha/>}/>
          <Route path="/wirausaha/Detail/:id" element={<Wirausahadetail/>}/>
          <Route path="/wirausaha/Add" element={<Wirausahaadd/>}/>
          <Route path="/wirausaha/edit/:id" element={<Wirausahaedit/>}/>
          <Route path="/form/kerja" element={<Formkerja/>}/>
          <Route path="/form/alumni" element={<Formalumni/>}/>
          <Route path="/form/universitas" element={<Formkuliah/>}/>
        </Routes>
      </Router>
   </>
  );
  }

export default App;
      

