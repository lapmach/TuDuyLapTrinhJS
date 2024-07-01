import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Field, Formik ,Form} from "formik";
export default function Register() {
    let navigate = useNavigate();
    return (
        <>
            <label>Register</label>
            <Formik
                initialValues={{
                    name: "",
                    username: "",
                    password: "",
                    dob: ""
                }}
                onSubmit={(values) => {
                    axios.post("http://localhost:3000/users/register", values).then(x => {
                        alert("Đăng kí thành công");
                    }).catch(e => {
                        alert("username hoặc password đã tồn tại !!!");
                    })
                }}
            >
                <Form>
                    <Field name={"name"} placeholder={"name"}/>
                    <Field name={"username"} placeholder={"username"}/>
                    <Field name={"password"} placeholder={"password"}/>
                    <Field name={"dob"} placeholder={"dob"}/>
                    <button>Login</button>
                </Form>
            </Formik>

            <button onClick={() => {
                navigate("/");
            }}>Login</button>
        </>
    )
}