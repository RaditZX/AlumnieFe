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
  const [image,setImage] = useState('')
  const [detail_status, setDetailStatus] = useState();
  const [jenis_kelamin, setJenis_kelamin] = useState("");
  const [kelas, setJurusan] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [status, setStatus] = useState([]);
  const [status2,setStatus2] = useState("")
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
        setDetailStatus(res.data.data.detail_status);
        setStatus(res.data.statusAlumni);
        setStatus2(res.data.data.status)
        setImage(res.data.data.image)
        console.log(res.data.statusAlumni);
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
      <Sidebar alumni='active' />
      <Navbar title={`Alumni/detail/${nama}`} />
      <div className="d-flex justify-content-center">
        <div className=" w-50 d-flex justify-content-center" >
          <img src={"http://localhost:4000/images/"+image} style={{maxWidth:'100%',height:'100vh'}} />
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
                disabled
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
                disabled
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
                disabled
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
              {status2 =="Masa Tunggu" ? 
                           <Form.Control
                            type="text"
                            value={status2 == "Masa Tunggu" ? 
                            "Masa Tunggu" :null}
                            readOnly
                          />:null}
              {status.map((status1) => {
                return (
                  <div>

                    
                  
                    {status1.universitas.map((univ) => {
                      console.log(univ.universitas);
                      return (
                        <div>
                          
                           <Form.Control
                            type="text"
                            value={'Kuliah'}
                            readOnly
                          />
                          <Form.Label>Universitas</Form.Label>
                          <Form.Control
                            type="text"
                            value={univ.universitas}
                            readOnly
                          />
                          <Form.Label>Alamat</Form.Label>
                          <Form.Control
                            type="text"
                            value={univ.alamat}
                            readOnly
                          />
                        </div>
                      );
                    })}
                    {status1.perusahaan.map((perusahaan) => {
                      return (
                        <div>

                           <Form.Control
                            type="text"
                            value={'Bekerja'}
                            readOnly
                          />
                             <Form.Label>Perusahaan</Form.Label>
                          <Form.Control
                            type="text"
                            value={perusahaan.perusahaan}
                            readOnly
                          />
                          <Form.Label>Alamat</Form.Label>
                          <Form.Control
                            type="text"
                            value={perusahaan.alamat}
                            readOnly
                          />
                        </div>
                      );
                    })}
                    {status1.wirausaha.map((wirausaha) => {
                      return (
                        <div>

                           <Form.Control
                            type="text"
                            value={'Berwirausaha'}
                            readOnly
                          />
                           <Form.Label>Wirausaha</Form.Label>
                          <Form.Control
                            type="text"
                            value={wirausaha.wirausaha}
                            readOnly
                          />
                          <Form.Label>Alamat</Form.Label>
                          <Form.Control
                            type="text"
                            value={wirausaha.alamat}
                            readOnly
                          />
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicHP">
              {detail_status ? <Form.Label>Jurusan/posisi</Form.Label> :  null}
              {detail_status ?
              <div>
                <Form.Control
                  type="text"
                  value={detail_status}
                  onChange={(e) => setDetailStatus(e.target.value)}
                  readOnly
                />
              </div> : null}
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}
