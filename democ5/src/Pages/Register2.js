import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register2() {
    let navigate = useNavigate();
    return (
        <>
            <label>Register</label>      
            <button onClick={() => {  
                    navigate("/");
            }}>Login</button>
        </>
    )
}