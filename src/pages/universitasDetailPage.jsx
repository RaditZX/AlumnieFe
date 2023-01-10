import { Button, Form } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../assets/addPage.css";

export default function Universitasdetail() {
  const [universitas, setUniversitas] = useState("");
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getUniversitas = () => {
    axios
      .get(
        process.env.REACT_APP_API_LINK + `api/kuliah/kuliahSearchData/${id}`,
        {
          headers: {
            Authorization: "JWT" + " " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setUniversitas(res.data.data.universitas);
        setAlamat(res.data.data.alamat);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUniversitas();
  }, []);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <Sidebar />
      <Navbar title={`Universitas/detail/${universitas}`} />
      <div className="d-flex justify-content-center align-items-center " >
        <div className="d-flex justify-content-center align-items-center " style={{width:"700px",height:'70vh'}}>
            <div className="p-5" style={{flexBasis:"50%"}}  >
                <img src={require("../assets/logoUnpad.png")}  style={{maxWidth:"100%"}}/>
            </div>
            <div className="" style={{flexBasis:"50%"}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicNISN">
                <Form.Label>Universitas</Form.Label>
                <div className="inputWithIcon">
                    <Form.Control
                    type="text"
                    placeholder="Masukkan NISN"
                    value={universitas}
                    onChange={(e) => setUniversitas(e.target.value)}
                    readOnly
                    />
                    <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNama">
                <Form.Label>Alamat</Form.Label>
                <div className="inputWithIcon">
                    <Form.Control
                    type="text"
                    placeholder="Masukkan Nama"
                    value={alamat}
                    onChange={(e) => setUniversitas(e.target.value)}
                    readOnly
                    />
                    <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                </div>
                </Form.Group>
            </Form>
            </div>
            </div>
      </div>
    </>
  );
}
