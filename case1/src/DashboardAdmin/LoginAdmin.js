import React from 'react';
import './Dashboard.css';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginAdmin() {
    let [data, setData] = useState({ user: '', pass: '' });
    let navigate = useNavigate();

    return (
        <>
            <div className="bg-gradient-primary" style={{ height: 100 + "vh" }}>
                <div className="container">

                    {/* <!-- Outer Row --> */}
                    <div className="row justify-content-center">

                        <div className="col-xl-6 col-lg-12 col-md-9">

                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* <!-- Nested Row within Card Body --> */}
                                    <div className="row">
                                        {/* <div className="col-lg-6 d-none d-lg-block bg-login-image"></div> */}
                                        <div className="col-lg-12">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">LOGIN ADMIN</h1>
                                                </div>
                                                <form className="user">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control form-control-user"
                                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                                            placeholder="User name" name="name" onChange={(e) => {
                                                                setData({ ...data, user: e.target.value });
                                                            }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="password" class="form-control form-control-user"
                                                            id="exampleInputPassword" placeholder="Password" name="score" onChange={(e) => {
                                                                setData({ ...data, pass: e.target.value });
                                                            }} />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                            <label className="custom-control-label" style={{marginBottom:-33+"px",marginTop:42+"px"}} for="customCheck">Remember
                                                                Me</label>
                                                        </div>
                                                    </div>
                                                    
                                                    <button className="btn btn-primary btn-user btn-block" onClick={() => {
                                                        if (data.user == 'admin' && data.pass == 'admin') {
                                                            navigate("/home");
                                                        }
                                                        // else if(data.user == 'user' && data.pass == 'user'){
                                                        //     navigate("/home");
                                                        // }
                                                        else {
                                                            alert("Sai pass!!!")
                                                        }
                                                    }}>Login</button>


                                                </form>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}


export default LoginAdmin;