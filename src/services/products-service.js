import collectionClient from './collection-client'

export function getProducts() {
  return collectionClient('/products')
}

export function getSingleProduct(idProduct) {
  return collectionClient(`/products/${idProduct}`)
}

export function createProduct(infoProduct) {
  return collectionClient('/products', {body: infoProduct})
}

export function updateProduct(infoProduct) {
  return collectionClient('/products', {method: "PUT",  body: infoProduct})
}

export function deleteProduct(idProduct) {
  return collectionClient(`/products/${idProduct}`, {method: "DELETE"})
}

export function limitProducts(limit) {
  return collectionClient(`/products?limit=${limit}`)
}

export function sortProducts(sort) {
  return collectionClient(`/products?sort=${sort}`)
}