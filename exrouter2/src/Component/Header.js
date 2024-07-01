import { useNavigate } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    return (
        <>
           <div className="col-4">Logo</div>
           <div className="col-8">Banner</div>
        </>
    )
}