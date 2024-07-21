import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Field, Formik ,Form} from "formik";
import { MyContext } from "../MyContext";
export default function ListCategory() {
    let navigate = useNavigate();
    let [cxt, setCXT] = useContext(MyContext);
    let [list, setList] = useState([]);
    useEffect(() => {
       getList();
    },[]);

    let getList = () => {
        axios.get("http://localhost:3000/categories").then((res) => {
            setList(res.data);
        });
    }
    return (
        <>
            {/* <h2>List Category: {cxt.user && cxt.user.username}</h2> */}
            {/* <Link to={"add"}>Add new post</Link> */}
            <div className="text-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(e => (
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>
                                    {/* <button className="btn btn-outline-primary" onClick={() => {
                                        navigate("/home/detail/"+e.id);
                                    }}>Detail</button> */}
                                    {/* <Link to={"/home/detail/"+e.id}>Detail</Link> */}
                                    <button className="btn btn-outline-primary" style={{marginRight:10+"px"}} onClick={() => {
                                        if (window.confirm('Bạn có muốn xóa ko?')) {
                                            axios.delete('http://localhost:3000/categories/' + e.id).then((res) => {
                                                alert("Xoa thanh cong");
                                                getList();
                                            });
                                        }
                                    }}>Delete</button>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        navigate("/home/editcates/" + e.id)
                                    }}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}