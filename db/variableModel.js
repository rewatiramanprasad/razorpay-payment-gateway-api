import { db } from './db.js'
export const getVariableByName = (variable) => {
  return db('variable').select('value').where('variable', variable)
}
export const createVariable = (variable, value) => {
  return db('variable').insert({ variable, value })
}

export const setVariable = (variable, value) => {
  return db('variable').update({ value: value }).where("variable",variable)
}
