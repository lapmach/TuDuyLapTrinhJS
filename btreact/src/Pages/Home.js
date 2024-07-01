import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import Nav from "../Component/Nav";
import SideBar from "../Component/SideBar";

export default function Home() {
    let navigate = useNavigate();
    return (
        <>
            <div className="row">
                <Header></Header>
            </div>
            <div className="row">
                <Nav></Nav>
            </div>
            <div className="row">
                <SideBar></SideBar>
                <div className="col-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )
}