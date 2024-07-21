import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Field, Formik ,Form} from "formik";
import { MyContext } from "../MyContext";
import ListPro from "../Pages/ListPro";

export default function HomePages() {
    let navigate = useNavigate();
    let [cxt, setCXT] = useContext(MyContext);
    return (
        <>
          {/* <Link to={"/home/add"}>Add</Link> | 
          <Link to={"/home/addcates"}> AddCategory</Link> */}
          {/* <Outlet></Outlet>
          <ListCategory></ListCategory>
          <ListCart></ListCart> */}
          <Outlet></Outlet>
        </>
    )
}