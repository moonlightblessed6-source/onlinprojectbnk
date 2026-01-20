import { useState } from 'react'
import './App.css'
import Homepage from './Componient/Homepage/Homepage.jsx'
import Navbar from './Componient/Navbar/Navbar.jsx'
import Footer from './Componient/Footer/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './Componient/About/About.jsx'
import Login from './Componient/Login/Login.jsx'
import Openaccunt from './Componient/Openaccount/Openaccunt.jsx'
import Contact from './Componient/Contact/Contact.jsx'
import Dashbaord from './Componient/Dashboard/Dashboard.jsx'
import ProfileNav from './Componient/Dashboard/ProfileNav.jsx'

function App() {

  const token = localStorage.getItem("accessToken")

  return (
    <>
    {/* <Navbar/> */}
    {/* <ProfileNav/> */}
    {token ? <ProfileNav/> :  <Navbar/>}
    
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Dashbaord/>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/open-account' element={<Openaccunt/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
