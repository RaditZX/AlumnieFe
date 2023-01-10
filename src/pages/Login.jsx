import { Form, Button } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"
import { useState,useEffect } from "react";
import "../assets/style.css";


export default function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_LINK+'api/auth/signin',{
            email,
            password
        })
        .then(res => {
            console.log(res.data);
            localStorage.setItem('id',res.data.data.id)
            localStorage.setItem('token',res.data.accessToken);
            navigate("/dashboard")
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <div className="background" style={{ backgroundColor: "#EEF0FA" }}>
                <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                    <div className="container-login p-5">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={require("../assets/toga.png")} />
                        </div>
                        <div className="form-login mt-4">
                            <Form onSubmit={handleSubmit}>
                                <label htmlFor="">Email</label>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} style={{ backgroundColor: "#EFF1F9", border: "none" }} />
                                <label htmlFor="">Password</label>
                                <Form.Control type="password"  value={password} onChange={(e) => setPassword(e.target.value)} style={{ backgroundColor: "#EFF1F9", border: "none" }} />
                                <div className="d-flex align-items-right justify-content-end mt-2">
                                    <Link style={{ textDecoration: "none" }}>ForgotPassword?</Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-center mt-3">
                                    <Button type="submit" style={{ width: "100%" }}>Login</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}