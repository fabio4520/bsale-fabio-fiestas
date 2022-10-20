import React from 'react'

function CategoryCard({ categoryCard }) {
  return (
    <div className='flex justify-center items-center w-[290px] h-[290px] bg-[#5c9ead] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-center cursor-pointer hover:bg-[#5c9ead]/30'>
      <h2 className='italic font-semibold tracking-[15px] uppercase break-words'>{ categoryCard }</h2>
    </div>
  )
}

export default CategoryCard