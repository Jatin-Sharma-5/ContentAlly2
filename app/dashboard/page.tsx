"use client";
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';

function Dashboard() {
  const [userSearchInput, setuserSearchInput]=useState<string>()
  return (
    <div   style={{
      backgroundImage: `url('/img3.jpg')`,
      backgroundSize:"cover",
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
    }}  >
        
     {/* Search Section */}
     <div> 
     <SearchSection onSearchInput={(value:string)=>setuserSearchInput(value)}  />
      </div>
     {/* Template List Section */}
     <div className='bg-white'>
      
     <TemplateListSection userSearchInput={userSearchInput}/>
     </div>
    </div>
  )
}
 
export default Dashboard
