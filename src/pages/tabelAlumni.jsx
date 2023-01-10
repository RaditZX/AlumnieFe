import { Form, Button } from "react-bootstrap";
import "../assets/style.css";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import App from "../App";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import AlumniSlider from "../component/alumniSlider";
import axios from "axios";
import { useEffect } from "react";
import { useLocation,useNavigate,Link, } from "react-router-dom";
import { FaEye, FaPen, FaTrash, FaUser } from "react-icons/fa";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function Tabelalumni() {
  const [alumni, setAlumni] = useState([]);
  const [search,setSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(
    parseInt("1") || sessionStorage.getItem("page")
  );
  const location = useLocation();
  const navigate = useNavigate();
  const Nama = "nama="+new URLSearchParams(location.search).get('search');

  const getAlumni = () => {
    if ( new URLSearchParams(location.search).get('search') === null ) {
      axios
      .get(process.env.REACT_APP_API_LINK + `api/alumni/alumniData`, {
        headers: { "Authorization": "JWT" + " " + localStorage.getItem('token') }
        
      })
      .then((res) => {
        console.log(res.data);
        setAlumni(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }else{
      axios
      .get(process.env.REACT_APP_API_LINK + `api/alumni/alumniData?${Nama}`, {
        headers: { "Authorization": "JWT" + " " + localStorage.getItem('token') }
        
      })
      .then((res) => {
        console.log(res.data);
        setAlumni(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  const getAlumniPagination = () => {
    if (search === ''){
        navigate(`/alumni/tabel`)
    }
    else{
         navigate(`/alumni/tabel?search=${search}`)
    }
    window.location.reload();
  }

const deleteAlumni = (id) => {
  confirmAlert({
      title: 'Delete',
      message: 'Anda yakin ingin menghapus data ini?',
      buttons: [
          {
              label: 'Yes',
              onClick: () => {
                  axios.delete(process.env.REACT_APP_API_LINK+`api/alumni/deleteAlumni/${id}`,{
                    headers: { "Authorization": "JWT" + " " + localStorage.getItem('token') }
                    
                  })
                  .then(res => {
                      console.log(res.data);
                      getAlumni()
                  })
                  .catch(err => {
                      console.log(err);
                  })
              }      
          },
          {
              label: 'No'
          }
      ]});
}





  useEffect(() => {
    getAlumni();
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
        <div className="d-flex">
          <Sidebar />

          <div className="d-flex1">
            <Navbar title="Alumni"/>
            <AlumniSlider />

            <div className="container-bawah-between">
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
                      <input
                        value={search}
                        type="text"
                        style={{
                          marginTop: "0px",
                          width: "200px",
                          height: "30px",
                        }}
                        placeholder="Search.."
                        onChange={(e)=> setSearch(e.target.value)}
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
                        height: "30px",
                      }}
                    >
                      Filter
                    </Button>{" "}
                  </div>
                </div>
                <div className="container-table-item">
                  <Table>
                    <thead>
                      <tr>
                        <th>NISN</th>
                        <th>Nama Alumni</th>
                        <th>Kelas</th>
                        <th>Angkatan</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alumni.map((alumni,index) => {
                        return(
                          <tr key={index}>
                            <td>{alumni.nisn}</td>
                            <td>{alumni.nama}</td>
                            {alumni.Kelas.map((kelas) => {
                              return(
                                <td>{kelas.nama_kelas}</td>
                              )
                            })}
                            <td>{alumni.angkatan}</td>
                            {alumni.universitas.map((status) => {
                              return(
                                <td>{status.universitas}</td>
                              )
                            })}
                            <td><Link to={`/alumni/detail/${alumni._id}`}><FaEye className="action-1"/></Link>
                            <Link to={`/alumni/edit/${alumni._id}`}><FaPen className="action-2" /></Link>
                            <Link onClick={() => deleteAlumni(alumni._id)}><FaTrash className="action-3" /></Link></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </Table>
                </div>
                <div className="d-flex justify-content-center p-3">
                  <div className="btn-group">
                    <button className="btn">
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
                    <button className="btn">{currentPage}</button>
                    <button className="btn">
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
    </>
  );
}
