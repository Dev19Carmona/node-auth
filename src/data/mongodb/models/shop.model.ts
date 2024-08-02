import mongoose from 'mongoose'
import { ContactInfo, LocationInfo } from './types'
const collectionName = 'Shop'
const schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required'] },
    contactInfo: { type: ContactInfo },
    locationInfo: { type: LocationInfo },
    products: { type: [String], ref: 'Product' }, //TODO Cambiar a ObjectId
    img: { type: String, default: 'no-image' },
    company: { type: String }, //TODO Cambiar a ObjectId
    isActive: { type: Boolean, default: true }
  },
  {
    timestamps: true,
  }
)

export const ShopModel = mongoose.model(collectionName, schema)
