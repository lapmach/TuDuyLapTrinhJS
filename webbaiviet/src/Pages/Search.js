import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function Search(){
    let [cxt, setCXT] = useContext(MyContext);
    return(
        <>
        <input placeholder="Search" onChange={(e) => {
            setCXT({key: e.target.value});
        }}></input>
        </>
    )
}