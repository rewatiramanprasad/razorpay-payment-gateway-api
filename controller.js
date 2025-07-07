import { instance } from './app.js'
import { getProductById, getProduct } from './db/productModel.js'

export const payment = async (req, res) => {
  const { id } = req.body

  try {
    const product = await getProductById(id)
    console.log(Math.round(product[0].price))

    let options = {
      amount: Math.round(product[0].price),
      currency: 'INR',
    }
    console.log(options)

    const receipt = await instance.orders.create(options)
    console.log(JSON.stringify(receipt))
    res.status(200).json({ receipt: receipt, message: 'working' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

export const getKey = async (req, res) => {
  const key = process.env.RAZORPAY_KEY_ID
  res.status(200).json({ key: key, message: 'extracted successfully' })
}

export const getProductDetails = async (req, res) => {
  try {
    const products = await getProduct()
    console.log(products);
    
    res.status(200).json({
      data: products,
      message: `${products.length} rows fetched successfully`,
    })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }
}
