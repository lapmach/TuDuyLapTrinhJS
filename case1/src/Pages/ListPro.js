import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Field, Formik ,Form} from "formik";
import { MyContext } from "../MyContext";
export default function ListPro() {
    let navigate = useNavigate();
    let [cxt, setCXT] = useContext(MyContext);
    let [list, setList] = useState([]);
    useEffect(() => {
       getList();
    },[]);

    let getList = () => {
        axios.get("http://localhost:3000/products").then((res) => {
            setList(res.data);
        });
    }
    return (
        <>
            {/* <h2>List Product: {cxt.user && cxt.user.username}</h2> */}
            {/* <Link to={"add"}>Add new post</Link> */}
            <div className="text-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Images</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(e => (
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                                <td>{e.quantity}</td>
                                <td>{e.category.name}</td>
                                <td>
                                    {e.images && e.images.map && e.images.map((image)=> <img src={image} style={{ width: 50 + "px" }}></img>)}
                                    {/* {<img style={{ width: 50 + "px" }} src={e.images[0]} ></img>} */}
                                    {/* {<img src={e.images} style={{ width: 50 + "px" }}></img>} */}
                                </td>
                                <td>
                                    {/* <button className="btn btn-outline-primary" style={{marginRight:10+"px"}} onClick={() => {
                                        navigate("/home/detail/"+e.id);
                                    }}>Detail</button> */}
                                    {/* <Link to={"/home/detail/"+e.id}>Detail</Link> */}
                                    <button className="btn btn-outline-primary" style={{marginRight:10+"px"}} onClick={() => {
                                        if (window.confirm('Bạn có muốn xóa ko?')) {
                                            axios.delete('http://localhost:3000/products/' + e.id).then((res) => {
                                                alert("Xoa thanh cong");
                                                getList();
                                            });
                                        }
                                    }}>Delete</button>
                                    <button className="btn btn-outline-primary" onClick={() => {
                                        navigate("/home/edit/" + e.id)
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