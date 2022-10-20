import React from 'react'

function CategoryCard({ categoryCard }) {
  return (
    <div className='flex justify-center items-center w-80 h-80 bg-[#5c9ead] bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-center'>
      <h2 className='italic font-semibold tracking-[15px] uppercase break-words'>{ categoryCard }</h2>
    </div>
  )
}

export default CategoryCard