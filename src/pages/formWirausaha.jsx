import {Button, Form} from 'react-bootstrap';
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import "../assets/addPage.css";


export default function formwirausaha() {
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        {/* <Sidebar/>
        <Navbar/> */}
        <div className="d-flex flex-row">
            {/* <div className="flex-item image">
                <img src={require("../assets/addprof.jpg")}/>
            </div> */}
            <div className="form-mobile">

                <h1 style={{ textAlign: "center", marginBottom: "2rem", marginTop: "2rem" }}>Form Wirausaha</h1>
                <Form>
                    
                    <Form.Group className="mb-3" controlId="formBasicNISN">
                        <Form.Label>Nama Wirausaha</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan Wirausaha" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNISN">
                        <Form.Label>Alamat</Form.Label>
                            <Form.Control type="text" placeholder="Masukkan Alamat" />
                    </Form.Group>

                        <Button variant="primary" type="submit" style={{ marginBottom: "1rem" }}>
                            Submit
                        </Button>
                    </Form>
            </div>
        </div>
        </>
    );
}