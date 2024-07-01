import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Register from './Pages/Register';
import Produce from './Pages/Produce';
import Order from './Pages/Order';
import Student from './Pages/Student';
import AddStudent from './Pages/AddStudent';
import EditStudent from './Pages/EditStudent';
import AddProduce from './Pages/AddProduce';
import EditProduce from './Pages/EditProduce';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="home" element={<Home />}>
            <Route path="" element={<Produce />}></Route>
            <Route path="order" element={<Order />}></Route>
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="" element={<Produce />}></Route>
            <Route path="order" element={<Order />}></Route>
            <Route path="student" element={<Student />}></Route>
            <Route path="produce/add" element={<AddProduce />}></Route>
            <Route path="produce/edit/:id" element={<EditProduce />}></Route>
            <Route path="student/edit/:id" element={<EditStudent />}></Route>
          </Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
