import {Button, Form} from 'react-bootstrap';
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import "../assets/addPage.css";


export default function AddPage() {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Sidebar/>
        <Navbar/>
        <div className="flex-container">
            <div className="flex-item image">
                <img src={require("../assets/addprof.jpg")}/>
            </div>
            <div className="flex-item form">
                <Form>
                    
                    <Form.Group className="mb-3" controlId="formBasicNISN">
                        <Form.Label>NISN</Form.Label>
                        <div className="inputWithIcon">
                            <Form.Control type="text" placeholder="Masukkan NISN" />
                            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                        </div>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicNama">
                        <Form.Label>Nama</Form.Label>
                        <div className="inputWithIcon">
                            <Form.Control type="text" placeholder="Masukkan Nama" />
                            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Kelas</Form.Label>
                        <Form.Select>
                            <option>Pilih Jurusan</option>
                            <option>RPL</option>
                            <option>TKJ</option>
                            <option>RPL</option>
                            <option>TKJ</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Angkatan</Form.Label>
                            <Form.Select>
                                <option>Pilih Angkatan</option>
                                <option>2022</option>
                                <option>2023</option>
                            </Form.Select>
                    </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Select>
                                <option>Pilih Jenis Kelamin</option>
                                <option>Laki-laki</option>
                                <option>Perempuan</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicHP">
                            <Form.Label>No HP</Form.Label>
                            <div className="inputWithIcon">
                                <Form.Control type="text" placeholder="Masukkan No HP" />
                                <i className="fa fa-phone fa-lg fa-fw" aria-hidden="true"></i>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select>
                                <option>Pilih Status</option>
                                <option>Bekerja</option>
                                <option>Wirausaha</option>
                                <option>Kuliah</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
            </div>
        </div>
        </>
    );
}