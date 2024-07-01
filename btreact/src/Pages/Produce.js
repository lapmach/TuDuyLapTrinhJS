import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Produce() {
    let navigate = useNavigate();
    let [list, setList] = useState([]);
    let [listShow, setListShow] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/products').then((res) => {
            console.log(res.data)
            setList(res.data)
        });
    }, []);
    let getList = () => {
        axios.get('http://localhost:3000/products').then((res) => {
            setList(res.data);
        });
    }

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(e => (
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
                            <td>{e.quantity}</td>
                            <td> <button onClick={() => {
                                if (window.confirm('Bạn có muốn xóa ko?')) {
                                    axios.delete('http://localhost:3000/products/' + e.id).then((res) => {
                                        alert("Xoa thanh cong");
                                        getList();
                                    });
                                }
                            }}>Delete</button>
                                <button onClick={() => {
                                    navigate("/admin/produce/edit/" + e.id)
                                }}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}