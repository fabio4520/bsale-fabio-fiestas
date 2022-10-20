
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/products-service'
import Product from './Product';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className='flex flex-col gap-y-5'>
      <Link to={ '/new/product' }>
        <button className='bg-[#326273] w-44 p-2 rounded-md flex items-center justify-center gap-x-5 hover:bg-[#326273]/90'>
          <BsFillPlusCircleFill className='fill-white text-lg' />
          <span className='uppercase text-white tracking-wide'>Add product</span>
        </button>
      </Link>
      <div className='flex flex-wrap gap-10 justify-center'>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={ product.id }>
            <Product key={product.id} product={ product} className='cursor-pointer'/>
          </Link>
        ))}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Products
