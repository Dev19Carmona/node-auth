import mongoose, { Schema } from 'mongoose'
import { collectionProductName } from './product.model'
export const collectionShopName = 'Shop'
const schema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    location: {type: String},
    phone: {type: String, required: [true, 'Phone is required']},
    logo: {type: String}, //poner un comentario para despues organizarlo de tipo imagen.
    images: {type: [mongoose.Schema.Types.ObjectId]}, //falta crear modelo documents
    inventory: {type: mongoose.Schema.Types.ObjectId, ref: collectionProductName}, 
    isActive: {type: Boolean, default: false},
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export const ShopModel = mongoose.model(collectionShopName, schema)
