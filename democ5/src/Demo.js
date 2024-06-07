import React , {Component} from "react";
import axios from "axios";
// let x = 10;
class Student extends Component{
    constructor(props){
        super(props);
        this.state = {
            x:10,
            list: [],
        }
    }

    getAll() {
        axios.get('http://localhost:3000/students').then((res)=>{
            this.setState({list:res.data});
        });
    }
    componentDidMount(){
       this.getAll();
    }
    
    render(){
        return(
            <>
            <h1>class component {this.state.x}</h1>;
            {this.state.list.map((e) => (
                <h3>
                    {e.name} , {e.score}
                    <button 
                        onClick={()=> {
                            axios.delete('http://localhost:3000/students/' + e.id).then((res)=>{
                                alert("Xoa Thanh Cong");
                                this.getAll();
                            });
                        }}
                    >Delete</button>
                </h3>
            ))}
            </>
           
        )
    }
}

export default Student;