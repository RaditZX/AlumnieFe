import {  Button } from "react-bootstrap";
import "../assets/style.css";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";

import React, { useState,useRef } from "react";
import Table from "react-bootstrap/Table";
import AlumniSlider from "../component/alumniSlider";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaEye, FaPen, FaTrash, FaUser } from "react-icons/fa";
import Loading from "../component/laoding";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {  useDownloadExcel } from "react-export-table-to-excel";
import * as XLSX from 'xlsx'


export default function Tabelalumni() {
  const [alumni, setAlumni] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("page") || 1
  );
  const [jumlahAlumni, setJumlahAlumni] = useState();
  const [filterTahun, setFilterTahun] = useState();
  const [filterStatus, setFilterStatus] = useState("");
  const [kelas, setDaftarKelas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [excelAlumni,setExcelAlumni]= useState([])
  const location = useLocation();
  const navigate = useNavigate();
  const reqSearch = new URLSearchParams(location.search).get("search");
  const Nama = "&nama=" + new URLSearchParams(location.search).get("search");
  const angkatan =
    "&angkatan=" + new URLSearchParams(location.search).get("angkatan");
  const status =
    "&status=" + new URLSearchParams(location.search).get("status");
  const pagination =
    "?page=" +
    new URLSearchParams(location.search).get("page") +
    "&limit=" +
    new URLSearchParams(location.search).get("limit") ;
  const year = 2023;
  const years = Array.from(new Array(40), (val, index) => index + year);
  const caps = search.split(" ").map(capitalize).join(" ");
  const tableRef = useRef(null);




  

  const onDownload  = () =>{
    var wb = XLSX.utils.book_new()
    var ws = XLSX.utils.json_to_sheet(excelAlumni)
    XLSX.utils.book_append_sheet(wb,ws,"AlumniData")
    XLSX.writeFile(wb,"alumniExcel.xlsx")
  }

  

  const getAlumni = () => {
    axios
      .get(
        process.env.REACT_APP_API_LINK +
          `api/alumni/alumniData${pagination}${
            new URLSearchParams(location.search).get("status")
              ? status
              : "&status=.*"
          }${
            new URLSearchParams(location.search).get("search")
              ? Nama
              : "&nama=.*"
          }${
            new URLSearchParams(location.search).get("angkatan")
              ? angkatan
              : "&angkatan="
          }`,

        {
          headers: {
            Authorization: "JWT" + " " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setAlumni(res.data.data);
        setJumlahAlumni(res.data.jumlah_alumni)
        setExcelAlumni(res.data.excel)

      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getKelas = () => {
    axios
      .get(process.env.REACT_APP_API_LINK + `api/kelas/kelasData`, {
        headers: { Authorization: "JWT" + " " + localStorage.getItem("token") },
      })
      .then((res) => {
        setDaftarKelas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
    getAlumni();
    getKelas();

    new URLSearchParams(location.search).get("status")
      ? setFilterStatus(new URLSearchParams(location.search).get("status"))
      : setFilterStatus(".*");
    new URLSearchParams(location.search).get("search")
      ? setSearch(new URLSearchParams(location.search).get("search"))
      : setSearch("");
    new URLSearchParams(location.search).get("angkatan")
      ? setFilterTahun(new URLSearchParams(location.search).get("angkatan"))
      : setFilterTahun(".*");
  }, []);

  const next = () => {
    navigate(
      reqSearch
        ? "/alumni/tabel?page=" +
            (parseInt(currentPage) + 1) +
            "&limit=" +
            `10` +`
            ${
              search ? "search=" + caps : "search=.*"
            }&${filterStatus ? "status=" + filterStatus : "status=.*"}&${
              filterTahun ? "angkatan=" + filterTahun : "angkatan=.*"
            }`
        : "/alumni/tabel?page=" + (parseInt(  new URLSearchParams(location.search).get("page")) + 1) + "&limit=10"
    );
    window.location.reload();
    sessionStorage.setItem("page", parseInt(  new URLSearchParams(location.search).get("page")) + 1);
  };

  const current = () => {
    navigate(
      reqSearch
        ? "/alumni/tabel?page=" +
            parseInt(currentPage) +
            "&limit=" +
            sessionStorage.getItem("limit") +
            Nama
        : "/alumni/tabel?page=" +
            parseInt(currentPage) +
            "&limit=10" +
            sessionStorage.getItem("limit")
    );
    window.location.reload();
  };

  const prev = () => {
    navigate(
      reqSearch
        ? "/alumni/tabel?page=" + (parseInt(  new URLSearchParams(location.search).get("page")) - 1) + "&limit=" + Nama
        : "/alumni/tabel?page=" + (parseInt(  new URLSearchParams(location.search).get("page")) - 1) + "&limit=10"
    );
    sessionStorage.setItem("page", parseInt(currentPage) - 1);
    window.location.reload();
  };

  function capitalize(search) {
    return search.toUpperCase();
  }

  const getAlumniPagination = () => {
    navigate(
      `/alumni/tabel?page=${1}&limit=10&${
        search ? "search=" + caps : "search=.*"
      }&${filterStatus ? "status=" + filterStatus : "status=.*"}&${
        filterTahun ? "angkatan=" + filterTahun : "angkatan=.*"
      }`
    );
    window.location.reload();
  };

  const deleteAlumni = (id, nama) => {
    confirmAlert({
      title: "Delete" + " " + "`" + nama + "`",
      message: "Anda yakin ingin menghapus data ini?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(
                process.env.REACT_APP_API_LINK +
                  `api/alumni/deleteAlumni/${id}`,
                {
                  headers: {
                    Authorization: "JWT" + " " + localStorage.getItem("token"),
                  },
                }
              )
              .then((res) => {
                getAlumni()
              })
              .catch((err) => {
                console.log(err);
              });
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

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
              <Navbar title="Alumni" />
              <AlumniSlider />

              <div className="d-flex container-bawah-between">
                <button  style={{marginRight:'1rem'}} className='btn btn-success' onClick={onDownload}>
                    Export To Excel
                </button>
                <Link
                to={`/form/alumni/${localStorage.getItem('token')}`}
                style={{marginRight:'1rem'}}
                className='btn btn-primary'>
                Generate Link
                </Link>
                <Link
                  to={"/alumni/add"}
                  size="sm"
                  style={{
                    color: "black",
                    borderColor: "#eef0fa",
                    backgroundColor: "#eef0fa",
                    height: "30px",
                  }}
                >
                  +
                </Link>{" "}
             
              </div>

              <div className="container-tabel-bawah">
                <div className="container-table">
                  <div className="container-table-top">
                    {" "}
                    <h6>Data Alumni</h6>
                    <div className="container-table-top-right">
                      <div>
                        <select
                          className="form-select"
                          id=""
                          style={{
                            marginTop: "0px",
                            width: "130px",
                            height: "35px",
                          }}
                          value={filterStatus}
                          onChange={(e) => setFilterStatus(e.target.value)}
                        >
                          <option value=".*">Semua</option>
                          <option value="univ">Kuliah</option>
                          <option value="perusahaan">Bekerja</option>
                          <option value="wirausaha">Wirausaha</option>
                        </select>
                      </div>
                      {/* <div>
                        <select
                          className="form-select"
                          id=""
                          style={{
                            marginTop: "0px",
                            width: "100px",
                            height: "35px",
                            marginLeft: "1rem",
                          }}
                          value={filterTahun}
                          onChange={(e) => setFilterTahun(e.target.value)}
                        >
                          <option
                            value={null}
                          >
                            Semua
                          </option>
                          {kelas.map((kelas, index) => {
                            return (
                              <option
                                onClick={() => window.location.reload()}
                                value={kelas.nama_kelas}
                              >
                                {kelas.nama_kelas}
                              </option>
                            );
                          })}
                        </select>
                      </div> */}
                      <div>
                        <select
                          className="form-select"
                          id=""
                          style={{
                            marginTop: "0px",
                            width: "100px",
                            height: "35px",
                            marginLeft: "1rem",
                          }}
                          value={filterTahun}
                          onChange={(e) => setFilterTahun(e.target.value)}
                        >
                          <option value=".*">Semua</option>
                          {years.map((year, index) => {
                            return (
                              <option
                                onClick={() => window.location.reload()}
                                value={year}
                              >
                                {year}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        <input
                          value={search == ".*" ? "" : search}
                          type="text"
                          style={{
                            marginTop: "0px",
                            width: "200px",
                            height: "35px",
                            marginLeft: "1rem",
                          }}
                          placeholder="Nama Alumni"
                          onChange={(e) => setSearch(e.target.value)}
                        />
                      </div>
                      <Button
                        onClick={getAlumniPagination}
                        size="sm"
                        style={{
                          color: "black",
                          borderColor: "black",
                          backgroundColor: "white",
                          marginLeft: "1rem",
                          height: "35px",
                        }}
                      >
                        Filter
                      </Button>{" "}
                    </div>
                  </div>
                  <div className="container-table-item">
                    <Table ref={tableRef}>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>NISN</th>
                          <th>Nama Alumni</th>
                          <th>Angkatann</th>
                          <th>prodi</th>
                          <th>kelas</th>
                          <th>status</th>
                          <th>Jurusan/posisi</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {alumni.map((alumni, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{alumni.nisn ? alumni.nisn : "-"}</td>
                              <td>{alumni.nama}</td>
                              <td>{alumni.angkatan}</td>
                              <td>
                                {alumni.prodi ?alumni.prodi : "-" }
                              </td>
                      
                              {alumni.Kelas.map((kelas) => {
                                return <td>{kelas.nama_kelas}</td>;
                              })}
                              <td>
                              {alumni.universitas.map((status) => {
                                return status.universitas || alumni.status;
                              })}
                              {alumni.perusahaan.map((status) => {
                                return status.perusahaan|| alumni.status;
                              })}
                              {alumni.wirausaha.map((status) => {
                                return status.wirausaha || alumni.status;
                              })}
                             {alumni.status == "Masa Tunggu" ? alumni.status : null}</td>
                         
                              <td>{alumni.detail_status ? alumni.detail_status : "-" }</td>
                              <td>
                                
                                <Link to={`/alumni/detail/${alumni._id}`}>
                                  <FaEye className="action-1" />
                                </Link>
                                <Link to={`/alumni/edit/${alumni._id}`}>
                                  <FaPen className="action-2" />
                                </Link>
                                <Link
                                  onClick={() =>
                                    deleteAlumni(alumni._id, alumni.nama)
                                  }
                                >
                                  <FaTrash className="action-3" />
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <div className="btn-group">
                      {parseInt(currentPage) != 1 ? (
                        <button className="btn" onClick={() => prev()}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-caret-left-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                          </svg>
                        </button>
                      ) : null}
                      <button className="btn" onClick={() => current()}>
                        {  new URLSearchParams(location.search).get("page")||currentPage}
                      </button>
                      <button className="btn" onClick={() => next()}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-caret-right-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
