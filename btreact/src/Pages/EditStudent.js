import { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { Field, Formik ,Form} from "formik";


export default function EditStudent() {
    let navigate = useNavigate();
    let {id} = useParams();
    let [data, setData] = useState({
        id: "",
        name: "",
        description: "",
        action: "",
        score: "",
    })
    useEffect(()=>{
        axios.get("http://localhost:3000/students/"+ id).then((res) => {
            setData(res.data);
        });
    },[]);
    return (
        <>
            <Formik
            initialValues={data}
            enableReinitialize={true}
            onSubmit={(values) =>{
                axios.put("http://localhost:3000/students/"+ id,values).then(() => {
                    alert("Sửa thành công");
                    navigate("/admin/student");
                });
            }}
            >
                <Form>
                    <Field name={"id"}/>
                    <Field name={"name"}/>
                    <Field name={"description"}/>
                    <Field name={"action"}/>
                    <Field name={"score"}/>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )
}