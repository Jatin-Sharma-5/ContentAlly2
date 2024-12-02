"use client";
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';

function Dashboard() {
  const [userSearchInput, setuserSearchInput]=useState<string>()
  return (
    <div className=' bg-gradient-to-r from-[#050C9C] via-[#3572EF] via-[#3ABEF9] to-[#A7E6FF] '>
          


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
