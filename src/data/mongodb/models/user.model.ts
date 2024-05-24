import mongoose, { Schema } from 'mongoose'
import { RolesEnum } from '../../enums'
const collectionName = 'User'
const schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required by Mongoose'] },
    email: {
      type: String,
      required: [true, 'email is Required by Mongoose'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required by Mongoose'],
    },
    img: { type: String, default: 'no-image' },
    roles: {
      type: [String],
      default: ['USER_ROLE'],
      enum: RolesEnum,
    },

  },
  {
    timestamps: true,
  }
)

export const UserModel = mongoose.model(collectionName, schema)
