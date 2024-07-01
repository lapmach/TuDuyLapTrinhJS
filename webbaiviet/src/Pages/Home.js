import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { Field, Formik ,Form} from "formik";

export default function Home() {
    let navigate = useNavigate();
    let [list, setList] = useState([]);
    useEffect(() => {
       getList();
    }, []);
    let getList = () => {
        axios.get('http://localhost:3000/posts').then((res) => {
            setList(res.data);
        });
    }

    return (
        <>
            <Formik
                initialValues={{
                    title: "",
                }}
                onSubmit={(values) => {
                    axios.get("http://localhost:3000/posts/", values).then((res) => {
                        let newList = list;
                        console.log(newList);
                        newList = res.data.filter(e => e.title.toLowerCase().includes(values));
                       
                        setList(newList);
                    });
                }}
            >
                <Form>
                    <Field name={"title"} placeholder={"Search title"} />
                    <button>Search</button>
                </Form>
            </Formik>
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