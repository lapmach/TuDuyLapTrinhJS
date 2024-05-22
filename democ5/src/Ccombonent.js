import React , {Component} from "react";
// let x = 10;
class Ccomponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: [
                {
                    id: 1 , name: 'Mi', price: 500
                },
                {
                    id: 2 , name: 'Pho', price: 600
                }
            ],
            inputId: '',
            inputName: '',
            inputPrice: ''
        }
    }
    // upX=() => {
    //     x++;
    // };
    // upY=() => {
    //    this.setState({y : this.state.y + 1});
    // };
    add = () =>{
        this.setState((state) =>{
            return{
                list: [...state.list, {id: state.inputId , name: state.inputName , price: state.inputPrice}]
            }
        })
    }
    render(){
        return(
            <>
            {this.state.list.map((item, index) => (
                <h2 key = {index}> {item.id}, {item.name}, {item.price}</h2> 
            ))}
            <label>ID</label>
            <input type="text" onChange={(e) => {
                this.setState({
                    inputId: e.target.value
                })
            }}></input>
            <label>Name</label>
            <input type="text" onChange={(e) => {
                this.setState({
                    inputName: e.target.value
                })
            }}></input>
            <label>Price</label>
            <input type="text" onChange={(e) => {
                this.setState({
                    inputPrice: e.target.value
                })
            }}></input>

            <button onClick={this.add}>Add</button>
            </>
           
        )
    }
}

export default Ccomponent;