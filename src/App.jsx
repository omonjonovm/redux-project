import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from "./components/Index"
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route  path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
    
  )
}

export default App