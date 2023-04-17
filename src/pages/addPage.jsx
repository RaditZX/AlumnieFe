import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import { AuthContext } from "../auth";
import Alert from "@mui/material/Alert";
import "../assets/addPage.css";

import axios from "axios";

export default function AddPage() {
  const [nisn, setNISN] = useState("");
  const [nama, setNama] = useState("");
  const [daftarKelas, setDaftarKelas] = useState([]);
  const [alamat, setAlamat] = useState("");
  const [no_hp, setNo_telp] = useState();
  const [prodi, setProdi] = useState("");
  const [kelas, setJurusan] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [status, setStatus] = useState("");
  const [detail_status, setDetailStatus] = useState("");
  const [image, saveImage] = useState("");
  const [images, uploadImage] = useState("");
  const [kuliah, setKuliah] = useState([]);
  const [kerja, setKerja] = useState([]);
  const [wirausaha, setWirausaha] = useState([]);
  const [kuliahStatus, setKuliahStatus] = useState(false);
  const [kerjaStatus, setKerjaStatus] = useState(false);
  const [wirausahaStatus, setWirausahaStatus] = useState(false);
  const [error, setError] = useState("");
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const year = 2023;
  const years = Array.from(new Array(40), (val, index) => index + year);

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

  const getKuliah = () => {
    axios
      .get(process.env.REACT_APP_API_LINK + `api/kuliah/kuliahData`, {
        headers: { Authorization: "JWT" + " " + localStorage.getItem("token") },
      })
      .then((res) => {
        setKuliah(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getKerja = () => {
    axios
      .get(process.env.REACT_APP_API_LINK + `api/perusahaan/perusahaanData`, {
        headers: { Authorization: "JWT" + " " + localStorage.getItem("token") },
      })
      .then((res) => {
        setKerja(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWirausaha = () => {
    axios
      .get(process.env.REACT_APP_API_LINK + `api/wirausaha/wirausahaData`, {
        headers: { Authorization: "JWT" + " " + localStorage.getItem("token") },
      })
      .then((res) => {
        setWirausaha(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const kuliahStatusChange = () => {
    kuliahStatus ? setKuliahStatus(false) : setKuliahStatus(true);
    setKerjaStatus(false);
    setWirausahaStatus(false);
  };

  const kerjaStatusChange = () => {
    kerjaStatus ? setKerjaStatus(false) : setKerjaStatus(true);
    setWirausahaStatus(false);
    setKuliahStatus(false);
  };

  const wirausahaStatusChange = () => {
    wirausahaStatus ? setWirausahaStatus(false) : setWirausahaStatus(true);
    setKuliahStatus(false);
    setKerjaStatus(false);
  };

  function handleImage(e) {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];

    saveImage(URL.createObjectURL(uploaded));
    uploadImage(uploaded);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("nisn", nisn);
    formData.append("nama", nama);
    formData.append("kelas", kelas);
    formData.append("image", images);
    formData.append("prodi", prodi)
    formData.append("no_hp",no_hp)
    formData.append("status", status)
    formData.append("detail_status", detail_status)
    formData.append('angkatan',angkatan)

    axios
      .post(process.env.REACT_APP_API_LINK + "api/alumni/addAlumni", formData, {
        headers: {
          Authorization: "JWT" + " " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        if(Array.from(status)[0] == "u"){
          axios
          .put(process.env.REACT_APP_API_LINK + "api/kuliah/updateKuliahbyname/"+status,{
            jumlah:1
          }, {
            headers: {
              Authorization: "JWT" + " " + localStorage.getItem("token"),
            },
          }).then((res)=>{
            navigate("/alumni/tabel?page=1&limit=10");
          })
        }
        else if(Array.from(status)[0] == "p"){
          axios
          .put(process.env.REACT_APP_API_LINK + "api/kuliah/updateKerjabyname/"+status,{
            jumlah:1
          }, {
            headers: {
              Authorization: "JWT" + " " + localStorage.getItem("token"),
            },
          }).then((res)=>{
            navigate("/alumni/tabel?page=1&limit=10");
          })
        }
        else{
          axios
          .put(process.env.REACT_APP_API_LINK + "api/kuliah/updateWirausahahbyname/"+status,{
            jumlah:1
          }, {
            headers: {
              Authorization: "JWT" + " " + localStorage.getItem("token"),
            },
          }).then((res)=>{
            navigate("/alumni/tabel?page=1&limit=10");
          })
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.message);
      });
  };
  useEffect(() => {
    getKelas();
    getKuliah();
    getKerja();
    getWirausaha();
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Sidebar alumni="active" />
      <Navbar title="Alumni/add" />
      {error ? (
        <Alert
          style={{ marginLeft: "5rem", marginBottom: "1rem" }}
          severity="error"
        >
          {error}
        </Alert>
      ) : null}
      <div className="d-flex justify-content-center ">
        <div
          className=" d-flex justify-content-center align-items-center w-50 "
          style={{ height: "100vh" }}
        >
          <img
            src={image ? image : require("../assets/boy.jpg")}
            style={{ maxWidth: "100%", height: "100vh", paddingTop: "2rem" }}
          />
        </div>
        <div className="flex-item form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicNama">
              <Form.Label>Nama Lengkap</Form.Label>
              <div className="inputWithIcon">
                <Form.Control
                  type="text"
                  style={{textTransform:"uppercase"}}
                  placeholder="Masukkan Nama"
                  value={nama}
                  onChange={(e) => setNama(e.target.value.toUpperCase())}
                />
                <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNISN">
              <Form.Label>NISN (optional)</Form.Label>
              <div className="inputWithIcon">
                <Form.Control
                  type="text"
                  placeholder="Masukkan NISN"
                  value={nisn}
                  onChange={(e) => setNISN(e.target.value)}
                />
                <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Angkatan</Form.Label>
              <Form.Select
                value={angkatan}
                onChange={(e) => setAngkatan(e.target.value)}
              >
                <option>Pilih Angkatan</option>
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
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Prodi</Form.Label>
              <Form.Select
                value={prodi}
                onChange={(e) => setProdi(e.target.value)}
              >
                <option>Pilih Prodi</option>
                <option value={"TKI"}>TKI</option>
                <option value={"Listrik"}>Listrik</option>
                <option value={"Elektronika"}>Elektronika</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kelas</Form.Label>
              <Form.Select
                value={kelas}
                onChange={(e) => setJurusan(e.target.value)}
              >
                <option>Pilih Jurusan</option>
                {daftarKelas?.map((kelas) => {
                  return <option value={kelas._id}>{kelas.nama_kelas}</option>;
                })}
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
                />
                <i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicHP">
              <Form.Label>Foto</Form.Label>
              <div>
                <Form.Control
                  type="file"
                  onChange={(e)=>handleImage(e)}
                  placeholder="Masukkan No HP"
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <br />
              <div className="d-flex w-100" style={{}}>
                <Button className="w-100" onClick={() => kuliahStatusChange()}>
                  Kuliah
                </Button>
                <Button className="w-100" onClick={() => kerjaStatusChange()}>
                  Bekerja
                </Button>
                <Button
                  className="w-100"
                  onClick={() => wirausahaStatusChange()}
                >
                  Wirausaha
                </Button>
                <Button
                  className="w-100"
                  onClick={() => setStatus("Masa Tunggu")}
                >
                  Masa Tunggu
                </Button>
              </div>
            </Form.Group>
            {kuliahStatus ? (
              <Form.Group className="mb-3">
                <Form.Label>Universitas</Form.Label>
                <Form.Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Pilih Universitas</option>
                  {kuliah?.map((kuliah) => {
                    return (
                      <option value={kuliah.id_universitas}>
                        {kuliah.universitas}
                      </option>
                    );
                  })}
                </Form.Select>

                <Link to={"/form/universitas"}>
                  tidak menemukan universitas yang sesuai?
                </Link>
                <br />
                <Form.Label>Jurusan</Form.Label>
                <div>
                  <Form.Control
                    type="text"
                    value={detail_status}
                    onChange={(e) => setDetailStatus(e.target.value)}
                    placeholder="Masukkan Jurusan"
                  />
                </div>
              </Form.Group>
            ) : null}
            {kerjaStatus ? (
              <Form.Group className="mb-3">
                <Form.Label>Perusahaan</Form.Label>
                <Form.Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Pilih Perusahaan</option>
                  {kerja?.map((kuliah) => {
                    return (
                      <option value={kuliah.id_perusahaan}>
                        {kuliah.perusahaan}
                      </option>
                    );
                  })}
                </Form.Select>
                <Link to={"/form/universitas"}>
                  tidak menemukan perusahaan yang sesuai?
                </Link>
                <br />
                <Form.Label>posisi</Form.Label>
                <div>
                  <Form.Control
                    type="text"
                    value={detail_status}
                    onChange={(e) => setDetailStatus(e.target.value)}
                    placeholder="Masukkan posisi"
                  />
                </div>
              </Form.Group>
            ) : null}
            {wirausahaStatus ? (
              <Form.Group className="mb-3">
                <Form.Label>Wirausaha</Form.Label>
                <Form.Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Pilih Status</option>
                  {wirausaha?.map((kuliah) => {
                    return (
                      <option value={kuliah.id_wirausaha}>
                        {kuliah.wirausaha}
                      </option>
                    );
                  })}
                </Form.Select>
                <Link to={"/form/universitas"}>
                  tidak menemukan perusahaan yang sesuai?
                </Link>
                <br />
                <Form.Label>posisi</Form.Label>
                <div>
                  <Form.Control
                    type="text"
                    value={detail_status}
                    onChange={(e) => setDetailStatus(e.target.value)}
                    placeholder="Masukkan posisi"
                  />
                </div>
              </Form.Group>
            ) : null}
            <Button className="w-100" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
