import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddStudent(){
    let [data, setData] = useState({
        name: '',
        score: '',
    })

    let navigate = useNavigate();

    let changee = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    let add = () => {
        axios.post('http://localhost:3000/students', data).then(() => {
            alert("thanh cong");
            setData({
                name: "",
                score: "",
            })
            navigate("/students");
        });
    }
    return(
        <>
        <label>Name</label>
            <input type="text" name="name" value={data.name} onChange={(e) => changee(e)} />
            <label>Score</label>
            <input type="text" name="score" value={data.score} onChange={(e) => changee(e)} />
            <button onClick={() => add()}>ADD</button>
        </>
    )
}