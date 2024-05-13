import logo from './logo.svg';
import './App.css';
let names = ['abc', 'bf' , 'ff'];
let listProduct = [
  {
      id: 1,
      name: 'A',
      price: 10,
      quantity: 5
  },
  {
      id: 2,
      name: 'AB',
      price: 12,
      quantity: 2
  },
  {
      id: 3,
      name: 'C',
      price: 15,
      quantity: 3
  }
]
function App() {
  return (
    <>
    {listProduct.map(item =>(
      <h2>ID = {item.id} , Ten = {item.name} ,  Gia = {item.price} , SL = {item.quantity}</h2>
    ))}
    </>
  );
}

export default App;
