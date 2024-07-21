import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Field, Formik ,Form} from "formik";
import { MyContext } from "../MyContext";
export default function Login() {
    let navigate = useNavigate();
    let [cxt, setCXT] = useContext(MyContext);
    return (
        <>
            <h1>Login</h1>
            <Formik
            initialValues={{
                username:"",
                password:""
            }}
            onSubmit={(values) =>{
                axios.post("http://localhost:3000/users/login", values).then(x => {
                    alert("Đăng nhập thành công");
                    setCXT({...cxt,user: values});
                    navigate("/home");
                }).catch(e=>{
                    alert("username hoặc password sai !!!");
                })
            }}
            >
                <Form>
                    <Field name={"username"}/>
                    <Field name={"password"}/>
                    <button>Login</button>
                </Form>
            </Formik>

            <button onClick={() => {      
                    navigate("/register");
            }}>Register</button>

        </>
    )
}