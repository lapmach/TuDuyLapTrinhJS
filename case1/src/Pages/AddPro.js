import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { MyContext } from "../MyContext";
export default function AddPro() {
 
    let navigate = useNavigate();
    let [cates, setCates] = useState([]);
    let [selected, setSelected] = useState();
    let [images, setImages] = useState([]);
    let onFileUpLoadHandler = (e) => {
        setImages(e.target.files);
    }
    let printImage = () => {
        return images && [...images].map(anh => (
            <div>
                <img src={URL.createObjectURL(anh)} width={200+"px"} style={{margin:10+"px"}}></img>
            </div>
        ))
    }
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
                    name: '',
                    price:'',
                    quantity:'',
                    images:[],
                }}
                onSubmit={(value) => {
                    let category = cates.find(e=> e.id == selected);
                    // let hinh = [...images];
                    
                    if(category === undefined ){
                        category = cates[0];
                    }
                    value = {...value, category};
                    // let hinh = images.map(e=>e.images == selected);
                    // value = {...value, hinh};
                    axios.post('http://localhost:3000/products', value).then(() => {
                        alert("thanh cong");
                        navigate("/home");
                    });
                }}
            >
                <Form>
                    <Field name={'name'} placeholder={"name"}/>
                    <Field name={'price'} placeholder={"price"}/>
                    <Field name={'quantity'} placeholder={"quantity"}/>
                    <Field name={'images'} placeholder={"Link images"}/>
                    {/* <Field name={'images'} type="file" multiple accept="image/*" onChange={onFileUpLoadHandler}/> */}
                   
                    <select onChange={(e) => {
                        setSelected(e.target.value);
                    }}>
                        {cates.map(e=> (<option value={e.id}>{e.name}</option>))}
                    </select>
                    {/* <input name={'images'} type="file" multiple accept="image/*" onChange={onFileUpLoadHandler}></input> */}
                    <button style={{padding:"2px 20px", borderRadius:5+"px", marginLeft:10+"px"}}>ADD</button>
                    <div className="d-flex">
                        {printImage()}
                    </div>
                    

                </Form>
            </Formik>
            
        </>
    )
}