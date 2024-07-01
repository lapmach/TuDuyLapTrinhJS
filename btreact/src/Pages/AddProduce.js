import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
export default function AddProduce() {
    
    let navigate = useNavigate();


    return (
        <>
            <div className="row col-2 mb-4">
                <button onClick={() => { navigate("/admin/produce/add") }}>Back to list</button>
            </div>
            <Formik
                initialValues={{
                    name: '',
                    price:'',
                    quantity:''
                }}
                onSubmit={value => {
                    axios.post('http://localhost:3000/products', value).then(() => {
                        alert("thanh cong");
                        navigate("/admin");
                    });
                }}
            >
                <Form>
                    <Field name={'name'} placeholder={"name"}/>
                    <Field name={'price'} placeholder={"price"}/>
                    <Field name={'quantity'} placeholder={"quantity"}/>
                    <button>ADD</button>
                </Form>
            </Formik>
        </>
    )
}