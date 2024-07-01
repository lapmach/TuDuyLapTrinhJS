import { Outlet, useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import ListPro from "./ListPro";
import Header from "../Component/Header";
import Menu from "../Component/Menu";
import SidebarLeft from "../Component/SidebarLeft";
import SidebarRight from "../Component/SidebarRight";
import Home from "./Home";
export default function Web() {
    let navigate = useNavigate();
    return (
        <>
            <div className="row">
                <Header></Header>
            </div>
            <div className="row">
                <Menu></Menu>
            </div>
            <div className="row">
                <SidebarLeft></SidebarLeft>
                <div className="col-7">
                    <Outlet></Outlet>
                </div>
                <SidebarRight></SidebarRight>
            </div>
        </>
    )
}