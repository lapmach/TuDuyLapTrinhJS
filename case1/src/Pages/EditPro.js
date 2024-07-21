import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Field, Formik ,Form} from "formik";


export default function EditPro() {
    let navigate = useNavigate();
    let [cates, setCates] = useState([]);
    let [selected, setSelected] = useState();
    useEffect(()=>{
        axios.get("http://localhost:3000/categories/").then((res) => {
            setCates(res.data);
            
        });
    },[]);
    let {id} = useParams();
    let [data, setData] = useState({
        id: "",
        name: "",
        price: "",
        quantity: ""
    })
    useEffect(()=>{
        axios.get("http://localhost:3000/products/"+ id).then((res) => {
            setData(res.data);
            console.log(res.data);
        });
    },[]);
    return (
        <>
            <Formik
            initialValues={data}
            enableReinitialize={true}
            onSubmit={(values) =>{
                axios.put("http://localhost:3000/products/"+ id,values).then(() => {
                    alert("Sửa thành công");
                    navigate("/home");
                });
            }}
            >
                <Form>
                    <Field name={"id"}  placeholder={"id"}/>
                    <Field name={"name"}  placeholder={"name"}/>
                    <Field name={"price"}  placeholder={"price"}/>
                    <Field name={"quantity"}  placeholder={"quantity"}/>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}