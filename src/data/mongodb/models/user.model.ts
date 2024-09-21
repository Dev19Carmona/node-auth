import mongoose, { Schema } from 'mongoose'
import { RolesEnum } from '../../enums'
import { ContactInfo } from './types'
const collectionName = 'User'
const schema = new mongoose.Schema(
  {
    companyId: { type: Schema.Types.ObjectId, ref: 'Company' },
    name: { type: String, required: [true, 'Name is Required by Mongoose'] },
    contactInfo: { type: ContactInfo },
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
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role'
    },
    token: {
      value: {
        type: String,
      },
      iat: {
        type: Number
      },
      exp: {
        type: Number
      }
    },


  },
  {
    timestamps: true,
  }
)

export const UserModel = mongoose.model(collectionName, schema)
