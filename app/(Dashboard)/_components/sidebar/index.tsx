import React from 'react'
import NewButton from './NewButton'
import List from './List'

function Sidebar
() {
  return (
    <div className='w-[80px] bg-gray-50  border-r-2 border-r-gray-50  h-full  p-5 space-y-4'>
      <List></List>
      <NewButton></NewButton>

    </div>
  )
}

export default Sidebar
