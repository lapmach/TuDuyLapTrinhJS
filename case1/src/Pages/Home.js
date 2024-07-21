import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Field, Formik ,Form} from "formik";
import { MyContext } from "../MyContext";
import ListPro from "./ListPro";
import DetailProDuct from "./DetailProDuct";
import ListCategory from "./ListCategory";
import ListCart from "./ListCart";
import Dashboard from "../DashboardAdmin/Dashboard";
export default function Home() {
    
    return (
        <>
          {/* <Link to={"/home/add"}>Add</Link> | 
          <Link to={"/home/addcates"}> AddCategory</Link> */}
          {/* <Outlet></Outlet>
          <ListCategory></ListCategory>
          <ListCart></ListCart> */}
          <Dashboard></Dashboard>
        </>
    )
}