import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { getSingleProduct, updateProduct } from '../../services/products-service';
import { toast, ToastContainer } from 'react-toastify';
import ProductForm from './ProductForm';
import { useParams } from 'react-router-dom'

function EditProduct() {
  const { id } = useParams();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [product, setProduct] = useState([])
  useEffect(() => {
    getSingleProduct(id).then(setProduct)
  }, [])
  const onSubmit = data => {
    console.log(data)
    updateProduct(id, data).then((response) => {
      console.log(response)
      if (response) {
        toast.success('Product updated!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    })
    
  };

  return (
    <div className='flex gap-8 flex-col'>
      <h1 className='text-center font-bold tracking-[15px] uppercase'>Edit Product</h1>
      <div className='flex gap-x-10'>
        <div className='rounded-md'>
          <img src={product?.image} alt={ product?.title } className='w-80'/>
        </div>
        <ProductForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          product={product}
          newProduct = {false}
        />
      </div>
      <ToastContainer/>
    </div>
  )
}

export default EditProduct
