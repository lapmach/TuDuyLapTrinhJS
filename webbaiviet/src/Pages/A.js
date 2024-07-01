import { useContext } from "react";
import { MyContext } from "../MyContext";


export default function A(){
    let [cxt, setCxt] = useContext(MyContext);
    return(
        <>{cxt.name}</>
    )
}