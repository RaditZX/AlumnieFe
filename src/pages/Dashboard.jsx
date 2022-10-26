import { Form, Button } from "react-bootstrap";
import "../assets/style.css";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
                <div className="d-flex">
                    <Sidebar />

                    <div className="d-flex1">
                        <Navbar />
                        <div className="container-jumlah">
                            <div className="container-jumlah-component">
                                <div className="container-jumlah-component-kelas">
                                    <div className="jumlah-alumni">
                                        <h3 className="jumlah">Jumlah Alumni</h3>
                                        <h2 className="orang">90</h2>
                                    </div>
                                    <div className="orang-alumni">
                                        <h2 className="alumni">Alumni</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-bawah">
                            <div className="container-diagram">
                                <div className="container-diagram-bulat">

                                </div>
                                <div className="container-diagram-batang">

                                </div>
                            </div>
                            <div className="container-keterserapan-alumni">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}