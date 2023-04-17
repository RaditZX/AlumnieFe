import logo from "./logo.svg";
import "./App.css";
import React, { useState, useContext } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/landingPage";
import AddPage from "./pages/addPage";
import EditPage from "./pages/EditPage";
import DetailPage from "./pages/DetailPage";
import EditProfilePage from "./pages/EditProfilePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TabelAlumni from "./pages/tabelAlumni";
import Formkerja from "./pages/formKerja";
import Formalumni from "./pages/formPage";
import Formkuliah from "./pages/formKuliah";
import Formwirausaha from "./pages/formWirausaha";
import Jumlahalumni from "./pages/jumlahAlumni";
import { AuthContext } from "./auth";
import PrivateRoute from "./privateRoute";

function App() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/Dashboard"
            element={<PrivateRoute isLoggedIn={localStorage.getItem('user')||currentUser} />}
          >
            <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
          <Route
            path="/alumni/Add"
            element={<PrivateRoute isLoggedIn={localStorage.getItem('user')||currentUser} />}
          >
            <Route path="/alumni/Add" element={<AddPage />} />
          </Route>
          <Route
            path="/alumni/Edit/:id"
            element={<PrivateRoute isLoggedIn={localStorage.getItem('user')||currentUser} />}
          >
            <Route path="/alumni/Edit/:id" element={<EditPage />} />
          </Route>
          <Route
            path="/alumni/Detail/:id"
            element={<PrivateRoute isLoggedIn={localStorage.getItem('user')||currentUser} />}
          >
            <Route path="/alumni/Detail/:id" element={<DetailPage />} />
          </Route>
          <Route
            path="/EditProfile"
            element={<PrivateRoute isLoggedIn={localStorage.getItem('user')||currentUser} />}
          >
            <Route path="/EditProfile" element={<EditProfilePage />} />
          </Route>
          <Route
            path="/alumni/tabel"
            element={<PrivateRoute isLoggedIn={localStorage.getItem('user')||currentUser} />}
          >
            <Route path="/alumni/tabel" element={<TabelAlumni />} />
          </Route>
          <Route
            path="/alumni/jumlah"
            element={<PrivateRoute isLoggedIn={currentUser} />}
          >
            <Route path="/alumni/jumlah" element={<Jumlahalumni />} />
          </Route>
          <Route path="/form/kerja/:token" element={<Formkerja />} />
          <Route path="/form/alumni/:token" element={<Formalumni />} />
          <Route path="/form/universitas/:token" element={<Formkuliah />} />
          <Route path="/form/wirausaha/:token" element={<Formwirausaha />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
