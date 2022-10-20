import React from 'react'
import { useForm } from "react-hook-form";

function EditProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className=' flex gap-x-10'>
      <div className='rounded-md'>
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className='w-80'/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-5 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Title</label>
          <input 
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type="text" {...register('title', {
            required: true,
            maxLength: 15
          })} />
          {errors.title?.type === 'required' &&
            <p className='text-red-500 text-xs italic tracking-widest'>Title required</p>
          }
          {errors.title?.type === 'maxLength' &&
            <p className='text-red-500 text-xs italic tracking-widest'>Max length: 15 characters</p>
          }
        </div>

        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Category</label>
          <input 
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type="text" {...register('category', {
            required: true,
            maxLength: 10
          })} />
          {errors.category?.type === 'required' &&
            <p className='text-red-500 text-xs italic tracking-widest'>Category required</p>
          }
          {errors.category?.type === 'maxLength' &&
            <p className='text-red-500 text-xs italic tracking-widest'>Max length: 10 characters</p>
          }
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2 tracking-[4px]'>Price</label>
          <input 
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type="text" {...register('price', {
            required: true,
            pattern: /^\d+$/i
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
