import { random } from 'mathjs'
import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { FiStar, } from 'react-icons/fi'

function Product({ product }) {
  const numberStars = random(3, 5);
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className='flex flex-col w-80 bg-white p-8 rounded-xl gap-y-4'>
      <figure className='flex items-center justify-center'>
        <img src={product.image} alt={product.title }  className='w-44'/>
      </figure>
      <div className='flex flex-col gap-y-2'>
        <p className='text-slate-400'>{ product.category.toUpperCase() }</p>
        <p className='mb-5'>{product.title}</p>
        <p className='text-slate-400'>S/{product.price}</p>
        <div className='p-2 bg-slate-300 text-white w-32 rounded-md'>ENVÍO RÁPIDO</div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-row gap-4 items-center'>
            <AiOutlineCheck />
            <p>Retiro en tienda</p>
          </div>
          <div className='flex flex-row gap-4'>
            <AiOutlineCheck />
            <p>Retiro en tienda</p>
          </div>
        </div>
        <div className='flex flex-row'>
          {stars.slice(0, numberStars).map(() => (
              <FiStar className='fill-yellow-300'/>
            ))
          }
          {stars.slice(numberStars, 5).map(() => (
              <FiStar className='fill-white'/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Product