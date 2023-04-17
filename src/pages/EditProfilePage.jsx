import { Button, Form } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../auth";
import "../assets/Profile.css";

export default function AddPage() {
  const [nip, setNIP] = useState("");
  const [nama, setNama] = useState("");
  const [no_hp, setNo_telp] = useState();
  const [jenis_kelamin, setJenis_kelamin] = useState("");
  const [jabatan, setJabatan] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const id  = localStorage.getItem("id");

  currentUser ? console.log("online") : navigate("/login");

  const getUser = () => {
    axios
      .get(process.env.REACT_APP_API_LINK + `api/user/userSearchData/${id}`, {
        headers: { Authorization: "JWT" + " " + localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
        setNIP(res.data.data.nip);
        setNama(res.data.data.nama);
        setJabatan(res.data.data.jabatan);
        setNo_telp(res.data.data.no_hp);
        setJenis_kelamin(res.data.data.jenis_kelamin);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        process.env.REACT_APP_API_LINK + `api/user/updateUser/${id}`,
        {
          nip,
          nama,
          jabatan,
          no_hp,
          jenis_kelamin,
        },
        {
          headers: {
            Authorization: "JWT" + " " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <body>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <Sidebar />
        <Navbar />
        <div className="flex-container">
          <div className="container-gambar-circle"></div>
          <div className="form-edit">
            <div className="flex-item form">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicNISN">
                  <Form.Label>NIP/NUPTK</Form.Label>
                  <div className="inputWithIcon">
                    <Form.Control
                      value={nip}
                      onChange={(e) => setNIP(e.target.value)}
                      type="text"
                      placeholder="Masukkan NIP"
                    />
                    <i
                      className="fa fa-user fa-lg fa-fw"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNama">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <div className="inputWithIcon">
                    <Form.Control
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      type="text"
                      placeholder="Masukkan Nama"
                    />
                    <i
                      className="fa fa-user fa-lg fa-fw"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Jabatan</Form.Label>
                  <Form.Select
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
                  >
                    <option>Pilih Jabatan</option>
                    <option value={"Guru"}>Guru</option>
                    <option value={"Staff Tata Usaha"}>Staff Tata Usaha</option>
                    <option value={"Hubin"}>Hubin</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Select
                    value={jenis_kelamin}
                    onChange={(e) => setJenis_kelamin(e.target.value)}
                  >
                    <option value={"P"}>Perempuan</option>
                    <option value={"L"}>Laki - Laki</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicHP">
                  <Form.Label>No HP</Form.Label>
                  <div className="inputWithIcon">
                    <Form.Control
                      value={no_hp}
                      onChange={(e) => setNo_telp(e.target.value)}
                      type="text"
                      placeholder="Masukkan No HP"
                    />
                    <i
                      className="fa fa-phone fa-lg fa-fw"
                      aria-hidden="true"
                    ></i>
                  </div>
                </Form.Group>
                <Button variant="primary" className="w-100" type="submit">
                  Simpan
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
