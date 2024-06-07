import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    let navigate = useNavigate();
    return (
        <>
            <label>Admin</label>      
            <button onClick={() => {  
                    navigate("/");
            }}>Logout</button>
        </>
    )
}