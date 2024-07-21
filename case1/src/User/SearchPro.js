import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function SearchPro(){
    let [cxt, setCXT] = useContext(MyContext);
    return(
        <>
        <input placeholder="Tìm theo tên sản phẩm" onChange={(e) => {
            setCXT({key: e.target.value});
        }}></input>
        </>
    )
}