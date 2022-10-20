
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../services/products-service'
import Product from './Product';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className='flex flex-wrap gap-10 justify-center'>
      {products.map((product) => (
        <Product product={ product}/>
      )) }
    </div>
  )
}

export default Products
