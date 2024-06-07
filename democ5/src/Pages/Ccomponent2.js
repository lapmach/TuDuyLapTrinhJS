import React , {Component} from "react";
import axios from "axios";
// let x = 10;
class Ccomponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            // x:10,
            list: [],
            ListSearch:[],
        }
    }

    getAll() {
        axios.get('https://restcountries.com/v3.1/all?fields=name,area,population,flags').then((res)=>{
            this.setState({list:res.data});
        });
    }
    componentDidMount(){
       this.getAll();
    }

    inpChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    search = () =>{
        let rs = this.state.list.filter(e => e.name.common.toUpperCase().includes(this.state.inputSearch.toUpperCase()));
        this.setState({list:rs})
        this.state.inputSearch = "";
    }
    
    render(){
        return(
            <>
            <input type="text" onChange={this.inpChange} name="inputSearch" value={this.state.inputSearch}></input>
            <button onClick={this.search}>Search</button>
            <h2>Flag-Name-Area-Population</h2>
            {this.state.list.map(item => (
                <h3>
                    <img alt='' style={{width: 50 + 'px'}} src={item.flags.png}></img> ,{item.name.common} , {item.area}  , {item.population} 
                    {/* <button 
                        onClick={()=> {
                            axios.delete('http://localhost:3000/students/' + e.id).then((res)=>{
                                alert("Xoa Thanh Cong");
                                this.getAll();
                            });
                        }}
                    >Delete</button> */}
                </h3>
            ))}

            
            </>
           
        )
    }
}

export default Ccomponent;