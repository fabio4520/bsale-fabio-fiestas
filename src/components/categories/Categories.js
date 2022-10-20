import React, { useEffect, useState } from 'react'
import { getCategories } from '../../services/categories-service'
import CategoryCard from './CategoryCard'
import { Link } from "react-router-dom"

function Categories() {
  const [categoriesNames, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  return (
    <div className='flex flex-row justify-center items-center gap-4 max-w-4xl flex-wrap'>
      {categoriesNames.map((categoryName, i) => (
        <Link to={`/products/category/${categoryName}`} key={ i }>
          <CategoryCard key={i} categoryCard={ categoryName  } />
        </Link>
      ))}
    </div>
  )
}

export default Categories