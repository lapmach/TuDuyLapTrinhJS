import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { MyContext } from "../MyContext";
export default function AddCategogy() {
 
    let navigate = useNavigate();
    let [cates, setCates] = useState([]);
    let [selected, setSelected] = useState();
    useEffect(()=>{
        axios.get("http://localhost:3000/categories/").then((res) => {
            setCates(res.data);
        });
    },[]);
    return (
        <>
            <div className="row col-2 mb-4">
                <button onClick={() => { navigate("/home") }}>Back to list</button>
            </div>
            <Formik
                initialValues={{
                    name:'',
                }}
                onSubmit={(value) => {
                    axios.post('http://localhost:3000/categories', value).then(() => {
                        alert("thanh cong");
                        navigate("/home");
                    });
                }}
            >
                <Form>
                    <Field name={'name'} placeholder={"name"}/>
                    <button>ADD</button>
                </Form>
            </Formik>
        </>
    )
}