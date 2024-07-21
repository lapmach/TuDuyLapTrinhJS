import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import { useContext } from 'react';
import { MyContext } from './MyContext';
import Home from './Pages/Home';
import ListPro from './Pages/ListPro';
import DetailProDuct from './User/DetailProduct';
import LoginAdmin from './DashboardAdmin/LoginAdmin';
import AddPro from './Pages/AddPro';
import EditPro from './Pages/EditPro';
import AddCategogy from './Pages/AddCategory';
import EditCategory from './Pages/EditCategory';
import LoginUser from './User/LoginUser';
import RegisterUser from './User/RegisterUser';
import HomePages from './User/HomePages';
import ProductPage from './User/ProductPage';
function App() {
  const ct = useContext(MyContext);
  return (
    <>
      <div className='container-fluid p-0'>
        <Routes>
          <Route path="/" element={<LoginAdmin/>}></Route>
          <Route path="register" element={<RegisterUser />}></Route>
          <Route path="home" element={<Home />}>  
            <Route path="" element={<ListPro />}></Route> 
          </Route>
          <Route path="homepages" element={<ProductPage/>}>  
            
            <Route path="register" element={<ProductPage/>}></Route>
          </Route>
          <Route path="homepages/login" element={<LoginUser/>}></Route>
          <Route path="homepages/detailPro/:id" element={<DetailProDuct/>}></Route>
          <Route path="home/add" element={<AddPro />}></Route>
          <Route path="home/addcates" element={<AddCategogy />}></Route>
          <Route path="home/detail/:id" element={<DetailProDuct />}></Route>
          <Route path="home/edit/:id" element={<EditPro />}></Route>
          <Route path="home/editcates/:id" element={<EditCategory />}></Route>
          
         
          {/* <Route path="admin" element={<Admin />}>
            <Route path="" element={<Home />}></Route>     
          </Route> */}
          
        </Routes>
      </div>
    </>
  );
}

export default App;
