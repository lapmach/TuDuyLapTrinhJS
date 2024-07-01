import { Link, useNavigate } from "react-router-dom";
import Produce from "../Pages/Produce";
import Order from "../Pages/Order";

export default function SideBar() {
    let navigate = useNavigate();
    return (
        <>
           <div className="row">
            <h6>Admin side Bar</h6>
            <Link to={''}> List produce</Link>
            <Link to={'order'}> List order</Link>
            <Link to={'student'}> Student</Link>
           </div>
           
        </>
    )
}