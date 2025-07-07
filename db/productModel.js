import { db } from './db.js'

export function createProduct(item) {
  return db('product').insert(item)
}

export const getProduct = () => {
  return db('product').select('*')
}

export const getProductById = (id) => {
  return db('product').where("id",id)
}

export const deleteProduct = (id) => {
  return db('product').delete(id)
}
