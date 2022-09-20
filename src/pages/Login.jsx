import {Form, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/style.css";

export default function Login() {
    return ( 
        <>
            <div className="background" style={{backgroundColor:"#EEF0FA" }}>
                <div className="container d-flex justify-content-center align-items-center" style={{ height:"100vh" }}>
                    <div className="container-login p-5">
                        <div className="image d-flex align-items-center justify-content-center">
                            <img src={require("../assets/charm_graduate-cap.png")}/>
                        </div>
                        <div className="form-login mt-4">
                            <label htmlFor="">Email</label>
                            <Form.Control style={{ backgroundColor:"#EFF1F9",border:"none" }} />
                            <label htmlFor="">Password</label>
                            <Form.Control type="password" style={{ backgroundColor:"#EFF1F9",border:"none" }}/>
                            <div className="d-flex align-items-right justify-content-end mt-2">
                                <Link style={{ textDecoration:"none"}}>ForgotPassword?</Link>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mt-3">
                                <Button style={{ width:"100%" }}>Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}