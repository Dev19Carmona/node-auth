import mongoose, { Schema } from 'mongoose'

const collectionName = 'Role'
const schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required by Mongoose'] },
    
    isActive: { type: Boolean, default: true }

  },
  {
    timestamps: true,
  }
)

export const RoleModel = mongoose.model(collectionName, schema)
