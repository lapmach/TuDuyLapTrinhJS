import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import DetailPost from './Pages/DetailPost';
import { useContext } from 'react';
import { MyContext } from './MyContext';
import A from './Pages/A';
import B from './Pages/B';
import EditPost from './Pages/EditPost';
import Search from './Pages/Search';
function App() {
  // const handleEditorDataChange = (event, editor) => {
  //   const data = editor.getData();
  //   console.log(data);
  // };
  const ct = useContext(MyContext);
  return (
    <>
      {ct[0].name}
      <hr/>
      <A></A>
      <hr/>
      <B></B>
      <Search></Search>
      <div className='container-fluid'>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="post" element={<Home />}></Route>
          <Route path="post/detail" element={<DetailPost />}></Route>
          <Route path="post/edit/:id" element={<EditPost />}></Route>
          {/* <Route path="admin" element={<Admin />}>
            <Route path="" element={<Home />}></Route>     
          </Route> */}
          <Route path="register" element={<Register />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
