import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border flex justify-between bg-white'>
      <div className='flex gap-2 items-center p-2 border rounded-2xl max-w-lg bg-white'>
        <Search/>
        <input type='text' placeholder='Search...'
        className='outline-slate-400 rounded-2xl max-w-lg'/>
      </div>
      <div className='bg-primary text-sm text-white rounded-full p-2'>
        {/* <h2> Watch Adds in order get Tokens</h2> */}
      </div>
    </div>
  )
}

export default Header
