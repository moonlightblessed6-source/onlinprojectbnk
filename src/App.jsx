import { useState } from 'react'
import './App.css'
import Homepage from './Componient/Homepage/Homepage.jsx'
import Navbar from './Componient/Navbar/Navbar.jsx'
import Footer from './Componient/Footer/Footer.jsx'
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './Componient/About/About.jsx'
import Login from './Componient/Login/Login.jsx'
import Openaccunt from './Componient/Openaccount/Openaccunt.jsx'
import Contact from './Componient/Contact/Contact.jsx'
import Dashbaord from './Componient/Dashboard/Dashboard.jsx'
import ProfileNav from './Componient/Dashboard/ProfileNav.jsx'
import Directdeposit from './Componient/Dashboard/Directdeposit.jsx'
import Cardlock from './Componient/Dashboard/Cardlock.jsx'
import ProtectedRoute from './Componient/ProtectedRoute.jsx'
import Contactus from './Componient/Dashboard/Contactus.jsx'
import FindAtm from './Componient/Dashboard/Findatmlocation.jsx'
import Transferlist from './Componient/Dashboard/Transferlist.jsx'
import Overdraftprotection from './Componient/Dashboard/Overdraftprotection.jsx'
import Transaction from './Componient/Dashboard/Transaction.jsx'
import Accountprofile from './Componient/Dashboard/Accountprofile.jsx'
import Wiretransfer from './Componient/Dashboard/Wiretransfer.jsx'



function App() {

  const token = localStorage.getItem("authToken")

  return (
    <>
    {/* <Navbar/> */}
    {/* <ProfileNav/> */}
    {token ? <ProfileNav/> :  <Navbar/>}
    
    <Routes>
      <Route path='/' element={!token ? <Homepage /> : <Navigate to="/profile" replace />}/>
      <Route path='/login' element={!token ? <Login/> : <Navigate to="/profile" replace />}/>
      <Route path='/profile' element={<ProtectedRoute><Dashbaord/></ProtectedRoute>}/>
      <Route path='/direct-deposit' element={<ProtectedRoute><Directdeposit/></ProtectedRoute>}/>
      <Route path='/card-lock' element={<ProtectedRoute><Cardlock/></ProtectedRoute>}/>
      <Route path='/transaction' element={<ProtectedRoute><Transaction/></ProtectedRoute>}/>
      <Route path='/contactus' element={<ProtectedRoute><Contactus/></ProtectedRoute>}/>
      <Route path='/account' element={<ProtectedRoute><Accountprofile/></ProtectedRoute>}/>
      <Route path='/find-atm' element={<ProtectedRoute><FindAtm/></ProtectedRoute>}/>
      <Route path='/overdraft-protection' element={<ProtectedRoute><Overdraftprotection/></ProtectedRoute>}/>
      <Route path='/transfer-list' element={<ProtectedRoute><Transferlist/></ProtectedRoute>}/>
      <Route path='/wire-transfer' element={<ProtectedRoute><Wiretransfer/></ProtectedRoute>}/>
      <Route path='/about-us' element={<About/>}/>
      <Route path='/open-account' element={!token ? <Openaccunt/> : <Navigate to="/profile" replace />}/>
      <Route path='/contact-us' element={<Contact/>}/>
      </Routes>
      {!token && <Footer />}

      {/* <Footer/> */}
    </>
  )
}

export default App
