import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Field, Formik ,Form} from "formik";


export default function EditPost() {
    let navigate = useNavigate();
    let {id} = useParams();
    let [data, setData] = useState({
        id: "",
        title: "",
        content: "",
        image: ""
    })
    useEffect(()=>{
        axios.get("http://localhost:3000/posts/"+ id).then((res) => {
            setData(res.data);
        });
    },[]);
    return (
        <>
            <Formik
            initialValues={data}
            enableReinitialize={true}
            onSubmit={(values) =>{
                axios.put("http://localhost:3000/posts/"+ id,values).then(() => {
                    alert("Sửa thành công");
                    navigate("/post");
                });
            }}
            >
                <Form>
                    <Field name={"id"}  placeholder={"id"}/>
                    <Field name={"title"}  placeholder={"title"}/>
                    <Field name={"content"}  placeholder={"content"}/>
                    <Field name={"image"}  placeholder={"image"}/>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}