import React from 'react'
import Sidenav from './sidenav';
import HeadNav from './header';
import PageRoutes from '../routes';

const Layout = () => {
  return (
    <div  className='w-full max-w-full flex items-start justify-start'>
        <Sidenav/>
        <div className="w-full">
         <HeadNav/>
           <PageRoutes/>
        </div>
    </div>
  )
}

export default Layout;