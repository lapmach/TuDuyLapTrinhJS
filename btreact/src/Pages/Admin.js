import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import AdminSideBar from "../Component/AdminSideBar";
import AddStudent from "./AddStudent";
export default function Admin() {
    let navigate = useNavigate();
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <AdminSideBar></AdminSideBar>
                </div>
                <div className="col-9">
                    <div className="row">
                        <h6>Student</h6>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <div className="row col-2 mb-4">
                                <button onClick={()=> {navigate("produce/add")}}>add</button>
                            </div>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}