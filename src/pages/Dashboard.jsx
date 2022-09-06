import {Form, Button} from "react-bootstrap";
import "../assets/style.css";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid" style={{margin:"0",padding:"0"}}>
                <div className="d-flex">
                    <Sidebar/>
                    <Navbar/>
                </div>
            </div>
        </>
    )
}