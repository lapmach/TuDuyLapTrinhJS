import { useEffect, useState  } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Student() {
    let navigate = useNavigate();
    let [list, setList] = useState([]);
    let [listShow, setListShow] = useState([]);
    let [key, setKey] = useState({ from: 0, to: 0 });
    let [data, setData] = useState({
        name: '',
        score: '',
    })

    let getList = () => {
        axios.get('http://localhost:3000/students').then((res) => {
            setList(res.data);
            setListShow(res.data);
        });
    }

    let changee = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    let add = () => {
        axios.post('http://localhost:3000/students', data).then(() => {
            alert("thanh cong");
            getList();
            setData({
                name: "",
                score: "",
            })
        });
    }

    useEffect(() => {
        getList();
    }, [])
    return (
        <>
            {/* <h1> STUDENT </h1>
            <input type="text" placeholder="Search name" onChange={(e) => {
                let key = e.target.value.toLowerCase();
                let ListSearch = list;
                ListSearch = list.filter(e => e.name.toLowerCase().includes(key));
                setListShow(ListSearch);

            }} />
            <input type="text" placeholder="Search name" value={key.from} onChange={(e) => {
                setKey({ ...key, from: e.target.value });
            }} />
            <input type="text" placeholder="Search name" value={key.to} onChange={(e) => {
                setKey({ ...key, to: e.target.value });
            }} />

            <button onClick={() => {
                axios.get('http://localhost:3000/students').then((res) => {
                    let newList = res.data.filter(e => e.score >= key.from && e.score <= key.to);
                    setListShow(newList);
                    setKey({ from: 0, to: 0 });
                });
            }
            }>tìm kiếm theo điểm</button> */}
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                    {listShow.map(e => (
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.score}</td>
                            <td> <button onClick={() => {
                                if (window.confirm('Bạn có muốn xóa ko?')) {
                                    axios.delete('http://localhost:3000/students/' + e.id).then((res) => {
                                        alert("Xoa thanh cong");
                                        getList();
                                    });
                                }
                            }}>Delete</button>
                                <button onClick={() => {
                                    navigate("/admin/student/edit/" + e.id)
                                }}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <label>Name</label>
            <input type="text" name="name" value={data.name} onChange={(e) => changee(e)} />
            <label>Score</label>
            <input type="text" name="score" value={data.score} onChange={(e) => changee(e)} />
            <button onClick={() => add()}>ADD</button> */}

        </>
    )
}