import mongoose, { Schema } from 'mongoose'
const collectionName = 'Pet'
const schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required by Mongoose'] },
    description: { type: String },
    age: { type: Number, required: true },
    reference: { type: String },
    specie: { type: String, required: true },
    gender: { type: String, enum: ['MALE', 'FEMALE'], required: true },
    weight: { type: Number },
    img: { type: String, default: 'no-image' },
    medicalHistory: { type: String },
    owner: { type: [Schema.Types.ObjectId], ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
)

export const PetModel = mongoose.model(collectionName, schema)
