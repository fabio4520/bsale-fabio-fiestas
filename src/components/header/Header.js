
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Option from './Option'

function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center'>
      <ul className='flex flex-row gap-5 items-center'>
        <Option>Products</Option>
        <Option>Categories</Option>
      </ul>
      <ul className='flex flex-row gap-5 items-center'>
        <Option>Login</Option>
        <Option>Signup</Option>
        <Option><AiOutlineShoppingCart/></Option>
      </ul>
    </header>
  )
}

export default Header
