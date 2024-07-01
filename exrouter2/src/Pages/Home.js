import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import ListPro from "./ListPro";
export default function Home() {
    let navigate = useNavigate();
    return (
        <>
          <Carousel></Carousel>
          <ListPro></ListPro>
        </>
    )
}