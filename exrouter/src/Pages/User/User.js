import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import Menu from "../../Component/Menu";
import Footer from "../../Component/Footer"
export default function User() {
    let navigate = useNavigate();
    return (
        <>
        <hr></hr>
        <Menu></Menu>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}