import { useContext } from "react";
import { MyContext } from "../MyContext";

export default function Search(){
    let [cxt, setCXT] = useContext(MyContext);
    return(
        <>
        <input onChange={(e) => {
            setCXT({name: e.target.value});
        }}></input>
        </>
    )
}