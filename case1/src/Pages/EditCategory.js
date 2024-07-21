import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Field, Formik ,Form} from "formik";


export default function EditCategory() {
    let navigate = useNavigate();
    
    let {id} = useParams();
    let [data, setData] = useState({
        name: "",
    })
    useEffect(()=>{
        axios.get("http://localhost:3000/categories/" + id).then((res) => {
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
                axios.put("http://localhost:3000/categories/"+ id,values).then(() => {
                    alert("Sửa thành công");
                    navigate("/home");
                });
            }}
            >
                <Form>
                    <Field name={"id"}  placeholder={"id"}/>
                    <Field name={"name"}  placeholder={"name"}/>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}