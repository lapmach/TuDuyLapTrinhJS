import { useEffect, useState } from "react";
import axios from "axios";

export default function Country() {

    let [list, setList] = useState([]);
    // let [key, setKey] = useState('');
    let getList = () => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,area,population,flags').then((res) => {
            setList(res.data);
        });
    }

    // let changee = (e) => {
    //     setData({ ...data, [e.target.name]: e.target.value });
    // }


    useEffect(() => {
        getList();
    }, [])

    return (
        <>
            <h1>Coutry component</h1>
            <input type="text" onChange={e => {
                let key = e.target.value.toLowerCase();
                axios.get('https://restcountries.com/v3.1/all?fields=name,area,population,flags').then((res) => {
                    let newList = res.data.filter(e => e.name.common.toLowerCase().includes(key));
                    setList(newList);
                });
            }} />
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Flags</th>
                        <th>Area</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(e => (
                        <tr>
                            <td>{e.name.common}</td>
                            <td><img src={e.flags.png} style={{ width: 100 + "px" }}></img></td>
                            <td>{e.population.toLocaleString()}</td>
                            <td>{e.area.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}