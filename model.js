 const mongoose = require('mongoose')
const ProductSchema =  new mongoose.Schema({
  title : {
    type: String,
    text: true
  },
  description : {
    type : String,
    text: true
  },

  price : {
    type: Number
  },
  sold :{
      type : Number,
      default : 0,
  },
  quantity : {
    type: Number
  },
  images : {
    type : Array
  }   
},
{timestamps : true}
)

module.exports = Product = mongoose.model('products', ProductSchema)