import express from 'express'
import { payment, getKey, getProductDetails } from './controller.js'
const paymentRouter = express.Router()

paymentRouter.post('/v1/api/payment/order', payment)
paymentRouter.get('/v1/api/product/getProducts', getProductDetails)
paymentRouter.get('/v1/api/payment/getkey', getKey)
paymentRouter.get('/v1/api/health', (req, res) => {
  res.status(200).json({ message: 'server is healthy' })
})

export { paymentRouter }
