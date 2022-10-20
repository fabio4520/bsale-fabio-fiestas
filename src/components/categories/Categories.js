import React, { useEffect, useState } from 'react'
import { getCategories } from '../../services/categories-service'
import CategoryCard from './CategoryCard'

function Categories() {
  const [categoriesNames, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  return (
    <div className='flex flex-row justify-center items-center gap-4'>
      {categoriesNames.map((categoryName, i) => (
        <CategoryCard key={i} categoryCard={ categoryName  } />
      ))}
    </div>
  )
}

export default Categories