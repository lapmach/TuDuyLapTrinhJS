import logo from './logo.svg';
import './App.css';
import Student from "./Pages/Student";
import CComponent from "./Pages/Ccombonent";
import Ccombonent2 from './Pages/Ccomponent2';
import FComponent from './Pages/Fcomponent';
import Country from './Pages/Country';
import { Link, Route, Routes } from 'react-router-dom'
import AddStudent from './Pages/AddStudent';
import Ccomponent from './Pages/Ccombonent';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Register from './Pages/Register2';
import Alert from './Pages/Alert';


// const students = [
//   {
//       id: 1,
//       name: 'Chu Xuân Hiếu',
//       description: 'Đi gội đầu lâu, hay ngủ gật',
//       action: 'Xem xét',
//       score: 6
//   }, {
//       id: 2,
//       name: 'Nguyễn Thị Quỳnh',
//       description: 'Nói chuyện nhiều',
//       action: 'Xem xét',
//       score: 7
//   }, {
//       id: 3,
//       name: 'Trần Văn Hiệp',
//       description: 'Thiếu tập trung, chưa tích cực khi học',
//       action: 'Xem xét',
//       score: 4
//   }, {
//       id: 4,
//       name: 'Bui Huu Nghia',
//       description: 'Thiếu tập trung, chưa tích cực khi học',
//       action: 'Xem xét',
//       score: 5
//   }, {
//       id: 5,
//       name: 'Trương Hoàng Anh',
//       description: 'Đi ra ngoài lâu',
//       action: 'Xem xét',
//       score: 5
//   },
// ];
function App() {
  return (
    <>
    <Alert text='Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại.'></Alert>
      {/* {students.map((e, index) => (
        <p>{index},{e.name}, {e.score}, {e.action}</p>
      ))} */}


      {/* <Ccombonent2></Ccombonent2>
      <FComponent></FComponent> */}
      {/* <Country></Country> */}

      
      <Link to='Students'>student</Link>|
      <Link to='AddStudent'>AddStudent</Link>|
      <Link to='Country'>Country</Link>|
      <Link to='f'>Fcomponent</Link>|
      
      <Routes>
        <Route path='Students' element={<Student />}></Route>
        <Route path='f/:id' element={<FComponent />}></Route>
        <Route path='c' element={<Ccomponent />}></Route>
        <Route path='country' element={<Country />}></Route>
        <Route path="AddStudent" element={<AddStudent />}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="admin" element={<Admin/>}></Route>
        <Route path="register" element={<Register/>}></Route>
      </Routes>

    </>
  );
}

export default App;
