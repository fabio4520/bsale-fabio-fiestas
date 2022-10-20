import { random } from 'mathjs'
import React from 'react'
import { AiOutlineCheck, AiFillEdit } from 'react-icons/ai'
import { FiStar } from 'react-icons/fi'
import { BsFillTrashFill } from 'react-icons/bs'
import { deleteProduct } from '../../services/products-service'
import { toast , ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Link } from 'react-router-dom'

function Product({ product }) {
  const numberStars = random(3, 5);
  const stars = [1, 2, 3, 4, 5];
  function handleEdit() {
    console.log('This is edit')
  }
  function handleDelete() {
    deleteProduct(product.id).then(response => {
      console.log(response);
      if (response) {
        toast.success('Product deleted!', {
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
  }
  return (
    <div className='flex flex-col w-80 h-full bg-white p-8 rounded-xl gap-y-4'>
      <div className='flex justify-between'>
        <Link to={`/products/${product?.id}`}>
          <button onClick={handleEdit}>
            <AiFillEdit className='fill-[#326273] text-lg semibold cursor-pointer hover:bg-[#326273] hover:fill-white hover:duration-100 rounded-sm'/>
          </button>
        </Link>
        <button onClick={handleDelete}>
          <BsFillTrashFill className='fill-red-500 text-lg semibold cursor-pointer hover:bg-red-500 hover:fill-white hover:duration-100 rounded-sm'/>
        </button>
      </div>
      <figure className='flex items-center justify-center'>
        <img src={product?.image} alt={product?.title }  className='w-44'/>
      </figure>
      <div className='flex flex-col gap-y-2'>
        <p className='text-slate-400'>{ product?.category?.toUpperCase() }</p>
        <p className='mb-5'>{product?.title}</p>
        <p className='text-slate-400'>S/{product?.price}</p>
        <div className='p-2 bg-slate-400 text-white w-32 rounded-md'>ENVÍO RÁPIDO</div>
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
          {stars.slice(0, numberStars).map((i) => (
              <FiStar key={i} className='fill-yellow-300'/>
            ))
          }
          {stars.slice(numberStars, 5).map((i) => (
              <FiStar key={i} className='fill-white'/>
            ))
          }
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Product