import mongoose, { Schema } from 'mongoose'
const collectionName = 'Product'
const schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required'] },
    price: {type: Number, required: [true, 'Price is required']},
    
    img: { type: String, default: 'no-image' },
    
  },
  {
    timestamps: true,
  }
)

export const ProductModel = mongoose.model(collectionName, schema)
