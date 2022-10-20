import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { getSingleProduct, updateProduct } from '../../services/products-service';
import { toast } from 'react-toastify';

function EditProduct({ id }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [product, setProduct] = useState([])
  useEffect(() => {
    getSingleProduct(id).then(setProduct)
  }, [])

  const onSubmit = data => {
    console.log(data)
    updateProduct(id, data).then((response) => {
      console.log(response);
      toast.success('Product updated!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    })
  };
  

  return (
    <div className=' flex gap-x-10'>
      <div className='rounded-md'>
        <img src={product?.image} alt={ product?.title } className='w-80'/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Title</label>
          <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            defaultValue={product?.title}
          type="text" {...register('title', {
            required: true,
            maxLength: 70
          })} />
          {errors.title?.type === 'required' &&
            <p className='text-red-500 text-xs italic tracking-widest'>Title required</p>
          }
          {errors.title?.type === 'maxLength' &&
            <p className='text-red-500 text-xs italic tracking-widest'>Max length: 70 characters</p>
          }
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Category</label>
          <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            defaultValue={product?.category}
          type="text" {...register('category', {
            required: true,
            maxLength: 20
          })} />
          {errors.category?.type === 'required' &&
            <p className='text-red-500 text-xs italic tracking-widest'>Category required</p>
          }
          {errors.category?.type === 'maxLength' &&
            <p className='text-red-500 text-xs italic tracking-widest'>Max length: 20 characters</p>
          }
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Price</label>
          <input 
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            defaultValue={ product?.price }
          type="text" {...register('price', {
            required: true,
            pattern: /^[\d+\.]+$/i
          })} />
          {errors.price?.type === 'required' &&
            <p className='text-red-500 text-xs italic tracking-widest'>Price required</p>
          }
          {errors.price?.type === 'pattern' &&
            <p className='text-red-500 text-xs italic tracking-widest'>Only numbers are allowed</p>
          }
        </div>
        <input className='bg-[#326273] hover:bg-[#326273]/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline tracking-widest' type="submit" value="Update Product" />
      </form>
    </div>
  )
}

export default EditProduct
