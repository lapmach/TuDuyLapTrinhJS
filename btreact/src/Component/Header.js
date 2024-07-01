import { useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    return (
        <>
           <div className="col-3">Logo</div>
           <div className="col-9">Banner</div>
        </>
    )
}