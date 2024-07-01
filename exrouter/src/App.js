import logo from './logo.svg';
import './App.css';
import User from './Pages/User/User';
import ListHotPro from './Pages/User/produce/ListHotPro';
import Caterory from './Pages/User/caterory/Listcaterory';
import DetailPro from './Pages/User/produce/DetailPro';
import { Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path="" element={<User/>}>
          <Route path="" element={<ListHotPro/>}></Route>
          <Route path="user/caterory" element={<Caterory/>}></Route>
          <Route path="user/detail-product" element={<DetailPro/>}></Route>
        </Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
