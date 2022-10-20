import React from 'react'

function Option({ children }) {
  return (
    <li className='cursor-pointer p-2 hover:bg-[#326273] hover:rounded-full hover:transition-all hover:ease-in-out hover:duration-300'>{ children }</li>
  )
}
export default Option;