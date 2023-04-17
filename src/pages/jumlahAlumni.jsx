import { Form, Button } from "react-bootstrap";
import "../assets/style.css";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";

import React, { useState } from "react";
import axios from "axios";
import AlumniTabUniv from "../component/alumniTabUniv";
import AlumniTabKerja from "../component/alumnitabKerja";
import AlumniTabUsaha from "../component/alumnitabUsaha";
import Loading from "../component/laoding";
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import "react-confirm-alert/src/react-confirm-alert.css";

export default function Jumlahalumni() {
  const [perusahaan, setPerusahaan] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("page") || 1
  );
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const Nama = "search=" + new URLSearchParams(location.search).get("search");
  const reqSearch = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);

  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
          <div className="d-flex">
            <Sidebar />

            <div className="d-flex1">
              <Navbar title="JumlahAlumni" />
                <div className="d-flex justify-content-center align-items-center p-3">
                  <div className="p-2">
                    <AlumniTabUniv style={{flex:'25%'}}/>
                  </div>
                  <div className="p-2">
                    <AlumniTabKerja style={{flex:'25%'}}/>
                    </div>          
                    <div className="p-2">
                    <AlumniTabUsaha style={{flex:'25%'}}/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
