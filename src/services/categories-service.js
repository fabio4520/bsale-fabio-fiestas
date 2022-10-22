import collectionClient from './collection-client'

export function getCategories() {
  return collectionClient('/categories')
}

export function getCategory(category) {
  return collectionClient(`/categories/${category}`)
}
