import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Carousel from './Pages/Carousel';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Detail from './Pages/Detail';
import Web from './Pages/Web';
function App() {
  return (
    <>
    <div className='container-fluid'>
      <Routes>
        <Route path="/" element={<Web />}>
          <Route path="" element={<Home />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="carousel" element={<Carousel />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="detail" element={<Detail />}></Route>
        </Route>
      </Routes>
    </div>
  </>
  );
}

export default App;
