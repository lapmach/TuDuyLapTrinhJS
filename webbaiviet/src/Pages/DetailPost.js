import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate ,useLocation} from "react-router-dom";


export default function DetailPost() {
    let data = useLocation();
    console.log(data.state.obj);
    let st = data.state.obj;
    let navigate = useNavigate();
    let [list, setList] = useState([]);
    return (
        <>
            <div className="text-center">
                <h3>DETAIL POST </h3>
                <h4>{st.title}</h4>
                <h4>Thời Gian Tạo: {st.time}</h4>
                <h4><img src={st.image} style={{ width: 700 + "px" }}></img></h4>
            </div>
        </>
    )
}