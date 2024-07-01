import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Field, Formik ,Form} from "formik";


export default function EditProduce() {
    let navigate = useNavigate();
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
                    navigate("/admin");
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