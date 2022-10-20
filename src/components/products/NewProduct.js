import React from 'react'
import { useForm } from "react-hook-form";
import { createProduct } from '../../services/products-service';
import { toast, ToastContainer } from 'react-toastify';
import ProductForm from './ProductForm';

function NewProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    createProduct(data).then((response) => {
      console.log(response)
      if (response) {
        toast.success('Product created!', {
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
      <h1 className='text-center font-bold tracking-[15px] uppercase text-3xl'>New Product</h1>
      <div className='flex gap-x-10'>
        <div className='rounded-md'>
          <img src='' alt='' className='w-80'/>
        </div>
        <ProductForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmit={onSubmit}
          newProduct={ true }
        />
      </div>
      <ToastContainer/>
    </div>
  )
}

export default NewProduct