import {Button, Form} from 'react-bootstrap';
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import "../assets/Profile.css";


export default function AddPage() {
    return (
        <>
        <body>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Sidebar/>
        <Navbar/>
        <div className="flex-container">
            <div className="container-gambar-circle">
            </div>
            <div className="form-edit">
            <div className="flex-item form">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicNISN">
                        <Form.Label>NIP/NUPTK</Form.Label>
                        <div className="inputWithIcon">
                            <Form.Control type="text" placeholder="Masukkan NISN" />
                            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                        </div>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicNama">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <div className="inputWithIcon">
                            <Form.Control type="text" placeholder="Masukkan Nama" />
                            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Jabatan</Form.Label>
                        <Form.Select>
                            <option>Pilih Jabatan</option>
                            <option>Guru</option>
                            <option>Staff Tata Usaha</option>
                            <option>Hubin</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Select>
                                <option>Perempuan</option>
                                <option>Laki - Laki</option>
                            </Form.Select>
                    </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicHP">
                            <Form.Label>No HP</Form.Label>
                            <div className="inputWithIcon">
                                <Form.Control type="text" placeholder="Masukkan No HP" />
                                <i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i>
                            </div>
                        </Form.Group>
                        <Button variant="primary" type="submit">
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