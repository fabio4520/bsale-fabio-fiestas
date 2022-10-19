import collectionClient from "./collection-client";

export function getCarts() {
  return collectionClient('/carts')
}

export function getSingleCart(idCart) {
  return collectionClient(`/carts/${idCart}`)
}

export function getCartsByUser(userId) {  
  return collectionClient(`/carts/user/${userId}`)
}

export function newCart( infoProduct) {
  return collectionClient('/carts', {body: infoProduct})
}

export function updateCart(idCart, infoProduct) {
  return collectionClient(`/carts/${idCart}`, {method: "PUT", body: infoProduct})
}

export function deleteCart(idCart) {
  return collectionClient(`/carts/${idCart}`, { method: "DELETE" } )
}

export function limitCarts(limit) {
  return collectionClient(`/carts?limit=${limit}`)
}

export function sortCarts(sort) {
  return collectionClient(`/carts?sort=${sort}`)
}