"use client";
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';

function Dashboard() {
  const [userSearchInput, setuserSearchInput]=useState<string>()
  return (
    <div className=' bg-slate-50 '>
        
     {/* Search Section */}
     <SearchSection onSearchInput={(value:string)=>setuserSearchInput(value)} />

     {/* Template List Section */}
     <div>
      
     <TemplateListSection userSearchInput={userSearchInput}/>
     </div>
    </div>
  )
}
 
export default Dashboard
