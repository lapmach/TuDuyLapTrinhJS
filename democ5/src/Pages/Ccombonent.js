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
                },
                {
                    id: 3 , name: 'Com', price: 100
                },
                {
                    id: 4 , name: 'Bun', price: 900
                }
            ],
            inputId: '',
            inputName: '',
            inputPrice: '',
            inputSearch: '',
            ListSearch: [],
            ListSort: [],
        }
    }
    // upX=() => {
    //     x++;
    // };
    // upY=() => {
    //    this.setState({y : this.state.y + 1});
    // };
    add = () =>{
        this.state.list.push({
            id: this.state.inputId,
            name: this.state.inputName,
            price: this.state.inputPrice
        })
        this.setState({
            list: this.state.list
        });
        this.state.inputId= "";
        this.state.inputName = "";
        this.state.inputPrice = "";
    }
    search = () =>{
        let rs = this.state.list.filter(e => e.name.includes(this.state.inputSearch));
        this.setState({ListSearch:rs})
        this.state.inputSearch = "";
    }

    up = () => {
        let rs = [...this.state.list];
        rs.sort((a,b) => a.price - b.price);
        this.setState({ListSort:rs});
    }

    down = () => {
        let rs = [...this.state.list];
        rs.sort((a,b) => b.price - a.price);
        this.setState({ListSort:rs});
    }

    inpChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    render(){
        return(
            <>
            {this.state.list.map((item, index) => (
                <h2 key = {index}> {item.id}, {item.name}, {item.price}</h2> 
            ))}
            <label>ID</label>
            <input type="text" onChange={this.inpChange} name="inputId" value={this.state.inputId}></input>
            <label>Name</label>
            <input type="text" onChange={this.inpChange} name="inputName" value={this.state.inputName}></input>
            <label>Price</label>
            <input type="text" onChange={this.inpChange} name="inputPrice" value={this.state.inputPrice}></input>
            <button onClick={this.add}>Add</button>
            <hr></hr>
            <input type="text" onChange={this.inpChange} name="inputSearch" value={this.state.inputSearch}></input>
            <button onClick={this.search}>Search</button>
            {this.state.ListSearch.map((item, index) => (
                <h2 key = {index}> {item.id}, {item.name}, {item.price}</h2> 
            ))}
            <hr></hr>
            <button onClick={this.up}>Up</button>
            <button onClick={this.down}>Down</button>
            {this.state.ListSort.map((item, index) => (
                <h2 key = {index}> {item.id}, {item.name}, {item.price}</h2> 
            ))}
            </>
           
        )
    }
}

export default Ccomponent;