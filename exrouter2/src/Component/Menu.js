import { Link, useNavigate } from "react-router-dom";

export default function Menu() {
    let navigate = useNavigate();
    return (
        <>
            <div className="col-12">
                <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="javascript:void(0)">Logo</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="mynavbar">
                            <ul class="navbar-nav me-auto">
                                <li class="nav-item">
                                    <Link className="nav-link" to={"cart"}>Cart</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to={"login"}>Login</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to={"register"}>Register</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className="nav-link" to={"detail"}>Produce</Link>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="text" placeholder="Search"/>
                                    <button class="btn btn-primary" type="button">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}