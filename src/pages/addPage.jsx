import {Button, Form} from 'react-bootstrap';
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import "../assets/addPage.css";


export default function AddPage() {
    return (
        <>
        <div className="flex-container">
            <div className="flex-item image">
                <img src={require("../assets/addprof.jpg")}/>
            </div>
            <div className="flex-item form">
        <Form>
            <Form.Group className="mb-3" controlId="formBasicNISN">
                <Form.Label>NISN</Form.Label>
                <Form.Control type="text" placeholder="Masukkan NISN" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNama">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nama" />
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
                <Form.Control type="text" placeholder="Masukkan No HP" />
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