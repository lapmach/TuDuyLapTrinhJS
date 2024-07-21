import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Field, Formik ,Form} from "formik";
import { MyContext } from "../MyContext";
export default function Home() {
    let navigate = useNavigate();
    let [cxt, setCXT] = useContext(MyContext);
    let [list, setList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/posts/").then((res) => {
            let list = res.data.filter(e => e.title.toLowerCase().includes(cxt.key));
            setList(list);
        });
    //    getList();
    }, [cxt]);
    let getList = () => {
        axios.get('http://localhost:3000/posts').then((res) => {
            setList(res.data);
        });
    }

    return (
        <>
            <h2>User: {cxt.user && cxt.user.username}</h2>
            <Link to={"add"}>Add new post</Link>
            <div className="text-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(e => (
                            <tr>
                                <td>{e.title}</td>
                                <td><img src={e.image} style={{ width: 200 + "px" }}></img></td>
                                <td>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        navigate("/post/detail", { state: { obj: e } });
                                    }}>Detail</button>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        if (window.confirm('Bạn có muốn xóa ko?')) {
                                            axios.delete('http://localhost:3000/posts/' + e.id).then((res) => {
                                                alert("Xoa thanh cong");
                                                getList();
                                            });
                                        }
                                    }}>Delete</button>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        navigate("/post/edit/" + e.id)
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