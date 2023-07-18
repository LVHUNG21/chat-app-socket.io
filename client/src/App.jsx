import { useState } from 'react'
import Chat from "../pages/Chat";
import Register from './pages/register';
import Login from './pages/login';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap";
function App() {

  return (
  <>
  <Routes>
    <Route path='/' element={<Chat/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Register/>}/>
    <Route path='*' element={<Navigator to ='/'/>}/>
  </Routes>
  </> 
  )
}

export default App
