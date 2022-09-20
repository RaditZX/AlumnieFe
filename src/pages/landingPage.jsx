import {Form, Button} from "react-bootstrap";
import "../assets/landingPage.css";
import Navbar from "../component/landingNavbar";

export default function LandingPage(){
    return (
        <>
            <Navbar/>
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center" style={{margin:"0",padding:"0"}}>
                <div className="d-flex" style={{ backgroundColor:"#25244E",width:"100vw" }}>
                    <div className="image d-flex flex-column justify-content-center align-items-center " style={{ width:"100vw" }}>
                        <img src={require("../assets/College graduates in robes toss up graduate caps against the background of the university building.png")}/>
                    </div>
                    <div className="contents d-flex flex-column align-items-center justify-content-center" style={{ width:"100vw" }}>
                        <div className="title d-flex flex-column align-items-center">
                            <h1 style={{ color: "white" }}>ALUMNIE</h1>
                        </div>
                        < div className="desc d-flex flex-column align-items-center">
                            <h6 style={{ color: "white" }}>Merupakan Website yang digunakan untuk mendata alumni dengan mudah</h6>
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="contents d-flex flex-column  justify-content-center p-4">
                       <div className="d-flex justify=content-between" >
                            <div className="container-content">
                                    <h6>Sarana mempermudah pengaturan dan pengolahan data alumni</h6>
                            </div>
                            <div className="container-content" style={{ backgroundColor:"white",color:"black" }}>
                                    <h6>Sarana mempermudah pengaturan dan pengolahan data alumni</h6>
                            </div>
                       </div>
                       <div className="d-flex mt-5">
                            <div className="container-content">
                                    <h6>Sarana mempermudah pengaturan dan pengolahan data alumni</h6>
                            </div>
                            <div className="container-content">
                                    <h6>Sarana mempermudah pengaturan dan pengolahan data alumni</h6>
                            </div>
                       </div>
                    </div>
                    <div className="image d-flex align-items-center justify-content-center">
                        <img src={require("../assets/Saly-22.png")}/>
                    </div>
                </div>

            </div>
        </>
    )
}