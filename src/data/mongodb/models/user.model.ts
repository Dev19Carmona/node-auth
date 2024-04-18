import mongoose from 'mongoose'
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
      enum: ['USER_ROLE', 'ADMIN_ROLE'],
    },
  },
  {
    timestamps: true,
  }
)

export const UserModel = mongoose.model(collectionName, schema)