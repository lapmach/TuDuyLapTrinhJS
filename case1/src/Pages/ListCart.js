import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Field, Formik ,Form} from "formik";
import { MyContext } from "../MyContext";
export default function ListCart() {
    let navigate = useNavigate();
    let [cxt, setCXT] = useContext(MyContext);
    let [list, setList] = useState([]);
    useEffect(() => {
       getList();
    },[]);

    let getList = () => {
        axios.get("http://localhost:3000/carts").then((res) => {
            setList(res.data);
        });
    }
    return (
        <>
            {/* <h2>List Cart: {cxt.user && cxt.user.username}</h2> */}
            {/* <Link to={"add"}>Add new post</Link> */}
            <div className="text-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Product</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(e => (
                            <tr>
                                <td>{e.user.username}</td>
                                <td>{e.total}</td>
                                <td>{e.date}</td>
                                <td>{e.products.map(e => e.name+ " - SL: "+ e.quantity+ " / ")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}