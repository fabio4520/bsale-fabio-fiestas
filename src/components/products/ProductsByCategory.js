import React, { useEffect, useState } from 'react'
import Product from './Product';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Link, useParams } from 'react-router-dom'
import { getCategory } from '../../services/categories-service';

function ProductsByCategory() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getCategory(categoryName).then(setProducts);
  }, []);
  return (
    <div className='flex flex-col gap-y-8'>
      <h1 className='text-center text-5xl tracking-[15px] uppercase font-bold'>{ categoryName }</h1>
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

export default ProductsByCategory