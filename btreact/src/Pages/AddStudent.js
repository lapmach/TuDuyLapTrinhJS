import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
export default function AddStudent() {
    let [data, setData] = useState({
        name: '',
        score: '',
    })

    let navigate = useNavigate();

    let changee = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    let add = () => {
        axios.post('http://localhost:3000/students', data).then(() => {
            alert("thanh cong");
            setData({
                name: "",
                score: "",
            })
            navigate("");
        });
    }
    return (
        <>
            <div className="row col-2 mb-4">
                <button onClick={() => { navigate("/admin/student") }}>Back to list</button>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    score: '',
                }}
                onSubmit={value => {
                    axios.post('http://localhost:3000/students', value).then(() => {
                        alert("thanh cong");
                        navigate("/admin/student");
                    });
                }}
            >
                <Form>
                    <Field name={'name'} />
                    <Field name={'score'} />
                    <button>ADD</button>
                </Form>
            </Formik>
        </>
    )
}