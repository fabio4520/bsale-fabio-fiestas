import collectionClient from './collection-client'

export function getCategories() {
  return collectionClient('/products/categories')
}

export function getCategory(category) {
  return collectionClient(`/products/categories/${category}`)
}
