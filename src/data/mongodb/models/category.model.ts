import mongoose, { Schema } from 'mongoose'

const collectionName = 'Category'
const schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required by Mongoose'] },
    
    isActive: { type: Boolean, default: true }

  },
  {
    timestamps: true,
  }
)

export const CategoryModel = mongoose.model(collectionName, schema)
