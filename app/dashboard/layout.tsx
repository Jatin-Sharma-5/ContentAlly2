import React from 'react'
import Header from './_components/Header';
import SideNav from './_components/SideNav';


function layout({  children,
}: Readonly< {
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen bg-slate-200' >
        <div className='md:w-64 hidden md:block fixed bg-white'>
            <SideNav/> 
        </div>
        <div className='md:ml-64  bg-slate-200'>
            <Header/>
            {children}
        </div>
    </div>
  )
}

export default layout
