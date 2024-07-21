import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate ,useLocation, useParams} from "react-router-dom";


export default function DetailProDuct() {
    let {id} = useParams();
    return (
        <>
           <h1>xinchao {id}</h1>
        </>
    )
}