import mongoose, { Schema } from 'mongoose'
const collectionName = 'Shop'
const schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required'] },
    price: { type: Number, required: [true, 'Price is required'] },
    products: { type: [String], ref: 'Product' },
    img: { type: String, default: 'no-image' },
    company: {type:String}
  },
  {
    timestamps: true,
  }
)

export const ShopModel = mongoose.model(collectionName, schema)
