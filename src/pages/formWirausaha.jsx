import { Button, Form } from "react-bootstrap";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import "../assets/addPage.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Formwirausaha() {
  const { token } = useParams();
  const [error, setError] = useState("");
  const [wirausaha, setWirausaha] = useState("");
  const [bidang,setBidang] = useState('')
  const [alamat, setAlamat] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        process.env.REACT_APP_API_LINK + "api/wirausaha/addWirausaha",
        {
          wirausaha,
          alamat,
        },
        {
          headers: {
            Authorization: "JWT" + " " + token,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/form/alumni/" + token);
      })
      .catch((err) => {
        setError(err.response.data.Message);
      });
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      {/* <Sidebar/>
        <Navbar/> */}
      <div className="d-flex justify-content-center align-items-center w-100" >
        <div classNam e="form-mobile w-100">
          <h1
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "2rem",
              padding:'0'
            }}
          >
            Form Wirausaha
          </h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicNISN">
              <Form.Label>Nama Wirausaha</Form.Label>
              <Form.Control
                type="text"
                value={wirausaha}
                onChange={(e) => setWirausaha(e.target.value.toUpperCase())}
                className="w-100"
                placeholder="Masukkan nama perusahaan"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNISN">
              <Form.Label>Bidang Usaha</Form.Label>
              <Form.Control
                type="text"
                value={bidang}
                onChange={(e) => setBidang(e.target.value)}
                className="w-100"
                placeholder="Masukkan nama perusahaan"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNISN">
              <Form.Label>Alamat</Form.Label>
              <Form.Control type="text" placeholder="Masukkan Alamat"
                              className="w-100"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)} />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              style={{ marginBottom: "1rem" }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
