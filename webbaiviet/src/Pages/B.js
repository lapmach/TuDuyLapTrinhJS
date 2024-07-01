import { useContext } from "react";
import { MyContext } from "../MyContext";


export default function B(){
    let [cxt, setCxt] = useContext(MyContext);
    return(
        <>
        {cxt.name}
        <button onClick={()=>setCxt({name: 'NA', age: 26})}>change context</button>
        </>
        
    )
}