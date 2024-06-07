import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function FComponent(){
    let [x, setX] = useState(1);
    let [list, setList] = useState([]);
    let [data,setData] = useState({
        name: '',
        score: '',
    })
    let pagams = useParams();
    console.log(pagams);

    let getList = () =>{
        axios.get('http://localhost:3000/students').then((res)=>{
            setList(res.data);
        });
    }

    let changee = (e) =>{
        setData({...data, [e.target.name]: e.target.value}) ;
    }

    let add =() =>{
        axios.post('http://localhost:3000/students',data).then(()=>{
            alert("thanh cong");
            getList();
            setData({
                name: "",
                score: "",
            })
        });
    }

    useEffect(()=>{
        getList();
    },[])
    return(
        <>
        <h1>Xin chao {x}</h1>;
        <button onClick={()=> {setX(x+1)}}>Up</button>
        {
            list.map((e)=>(
                <h2>{e.name}, {e.score}</h2>
            ))
        }
        <input name="name" type="text" value={data.name} onChange={(e) => {changee(e)}}/>
        <input name="score" type="text" value={data.score} onChange={(e) => {changee(e)}}/>
        <button onClick={()=> {add()}}>Add</button>
        </>
    )
}