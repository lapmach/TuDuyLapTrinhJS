import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    let [data, setData] = useState({ user: '', pass: '' });
    let navigate = useNavigate();
    return (
        <>
            <label>Username</label>
            <input type="text" name="name" onChange={(e) => {
                setData({ ...data, user: e.target.value });
            }} />
            <label>Password</label>
            <input type="text" name="score" onChange={(e) => {
                setData({ ...data, pass: e.target.value });
            }} />
            <button onClick={() => {
                if (data.user == 'admin' && data.pass == 'admin') {
                    navigate("/admin");
                }else if(data.user == 'user' && data.pass == 'user'){
                    navigate("/home");
                }
                else  {
                    alert("Sai pass!!!")
                }
            }}>Login</button>

            <button onClick={() => {      
                    navigate("/register");
            }}>Register</button>

        </>
    )
}