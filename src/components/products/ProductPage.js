import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../../services/products-service'
import "react-toastify/dist/ReactToastify.css"
import { useParams } from 'react-router-dom'
import Product from './Product'

function ProductPage({ }) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getSingleProduct(id).then(setProduct);
  }, [])
  return (
    <Product product={product}/>
  )
}

export default ProductPage