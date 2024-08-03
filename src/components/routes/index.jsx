import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'
import Analytics from '../pages/Analytics'
import Account from '../pages/Account'
import Orders from '../pages/Orders'

const PageRoutes = () => {
  return (
    
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/analytics' element={<Analytics/>}/>
     <Route path='/account' element={<Account/>}/>
     <Route path='/orders' element={<Orders/>}/>
    </Routes>

  )
}

export default PageRoutes