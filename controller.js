
const Product = require('./model')


exports.listProducts = async(req, res)=>{
  try {
    const products = await Product.find().exec()
    res.send(products)
  } catch (error) {
    console.log(error)
    res.status(500).send("Server error")
  }
}
