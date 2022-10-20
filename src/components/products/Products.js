
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/products-service'
import Product from './Product';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className='flex flex-wrap gap-10 justify-center'>
      {products.map((product) => (
        <Product key={product.id} product={ product}/>
      ))}
      <ToastContainer />
    </div>
  )
}

export default Products
