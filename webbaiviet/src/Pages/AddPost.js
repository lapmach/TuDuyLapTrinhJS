import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { MyContext } from "../MyContext";
export default function AddPost() {
    let [cxt, setCxt] = useContext(MyContext);
    let navigate = useNavigate();


    return (
        <>
            <div className="row col-2 mb-4">
                <button onClick={() => { navigate("/") }}>Back to list</button>
            </div>
            <Formik
                initialValues={{
                    title: '',
                    content:'',
                    image:''
                }}
                onSubmit={(value) => {
                    value = {...value, user: cxt.user};
                    axios.post('http://localhost:3000/posts', value).then(() => {
                        alert("thanh cong");
                        navigate("/");
                    });
                }}
            >
                <Form>
                    <Field name={'title'} placeholder={"title"}/>
                    <Field name={'content'} placeholder={"content"}/>
                    <Field name={'image'} placeholder={"image"}/>
                    <button>ADD</button>
                </Form>
            </Formik>
        </>
    )
}