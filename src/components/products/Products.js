
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/products-service'
import Product from './Product';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { BsFillPlusCircleFill } from 'react-icons/bs'

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className='flex flex-col gap-y-5'>
      <button className='bg-[#326273] w-44 p-2 rounded-md flex items-center justify-center gap-x-5 hover:bg-[#326273]/90'>
        <BsFillPlusCircleFill className='fill-white text-lg' />
        <span className='uppercase text-white tracking-wide'>Add product</span>
      </button>
      <div className='flex flex-wrap gap-10 justify-center'>
        {products.map((product) => (
          <Product key={product.id} product={ product}/>
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Products
