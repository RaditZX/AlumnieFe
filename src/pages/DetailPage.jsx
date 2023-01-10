import { Button, Form } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/addPage.css";

export default function AddPage() {
  const [nisn, setNISN] = useState("");
  const [nama, setNama] = useState("");
  const [daftarKelas, setDaftarKelas] = useState([]);
  const [alamat, setAlamat] = useState("");
  const [no_hp, setNo_telp] = useState();
  const [jenis_kelamin, setJenis_kelamin] = useState("");
  const [kelas, setJurusan] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

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
  const getAlumni = () => {
    axios
      .get(
        process.env.REACT_APP_API_LINK + `api/alumni/alumniSearchData/${id}`,
        {
          headers: {
            Authorization: "JWT" + " " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setNISN(res.data.data.nisn);
        setNama(res.data.data.nama);
        setJurusan(res.data.data.kelas);
        setNo_telp(res.data.data.no_hp);
        setAngkatan(res.data.data.angkatan);
        setStatus(res.data.data.status);
        setJenis_kelamin(res.data.data.jenis_kelamin);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAlumni();
    getKelas();
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Sidebar />
      <Navbar title={`Alumni/detail/${nama}`} />
      <div className="d-flex justify-content-center align-items-center">
            <div className="">
          <img src={require("../assets/addprof.jpg")} />
        </div>
        <div className="flex-item form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicNISN">
              <Form.Label>NISN</Form.Label>
              <div className="inputWithIcon">
                <Form.Control
                  type="text"
                  placeholder="Masukkan NISN"
                  value={nisn}
                  onChange={(e) => setNISN(e.target.value)}
                  readOnly
                />
                <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNama">
              <Form.Label>Nama</Form.Label>
              <div className="inputWithIcon">
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  readOnly
                />
                <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kelas</Form.Label>
              <Form.Select
                value={kelas}
                onChange={(e) => setJurusan(e.target.value)}
                readOnly
              >
                <option>Pilih Jurusan</option>
                {daftarKelas?.map((kelas) => {
                  return <option value={kelas._id}>{kelas.nama_kelas}</option>;
                })}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Angkatan</Form.Label>
              <Form.Select
                value={angkatan}
                onChange={(e) => setAngkatan(e.target.value)}
                readOnly
              >
                <option>Pilih Angkatan</option>
                <option>2022</option>
                <option>2023</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Select
                value={jenis_kelamin}
                onChange={(e) => setJenis_kelamin(e.target.value)}
                readOnly
              >
                <option>Pilih Jenis Kelamin</option>
                <option value={"L"}>Laki-laki</option>
                <option value={"P"}>Perempuan</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicHP">
              <Form.Label>No HP</Form.Label>
              <div className="inputWithIcon">
                <Form.Control
                  type="text"
                  value={no_hp}
                  onChange={(e) => setNo_telp(e.target.value)}
                  placeholder="Masukkan No HP"
                  readOnly
                />
                <i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                readOnly
              >
                <option>Pilih Status</option>
                <option>Bekerja</option>
                <option>Wirausaha</option>
                <option value={"6351fd9c0d1c4c2348385649"}>Kuliah</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}
