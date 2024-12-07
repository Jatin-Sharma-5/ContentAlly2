import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div >
    <div className='p-10 bg-gradient-to-r from-[#dfe0e9] via-[#3572EF] via-[#3ABEF9] to-[#A7E6FF] flex flex-col  justify-center items-center'>
      <h2 className='text-white text-3xl font-bold'>Browse All Templates</h2>
      <p className='text-amber-200 font-bold'>What would you like to create today</p>
      <div>
      
      <div className="flex items-center justify-center border border-gray-300 rounded-md 
            gap-3 p-2  shadow-sm  hover:shadow-md transition-shadow duration-200  mt-4">
            <Search className="text-gray-700" />

             <input type="text" placeholder="Search for templates"
             onChange={(event)=>onSearchInput(event.target.value)}
             className="w-auto h-10 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-sm" />
            </div>
      </div>
    </div>
    </div>
  )
}

export default SearchSection
