import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();
    return (
        <>
            <label>Home</label>      
            <button onClick={() => {  
                    navigate("/");
            }}>Logout</button>
        </>
    )
}