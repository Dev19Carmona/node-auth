import mongoose, { Schema } from 'mongoose'
import {
  CatBreeds,
  DogBreeds,
  GenderAvailableEnum,
  PetsAvailableEnum,
} from '../../enums'
const collectionName = 'Pet'
const schema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name is Required by Mongoose'] },
    description: { type: String },
    age: { type: Number, required: true },
    reference: { type: String },
    specie: { type: String, required: true, enum: PetsAvailableEnum },
    gender: { type: String, enum: GenderAvailableEnum, required: true },
    breed: { type: String, enum: [...DogBreeds, ...CatBreeds] },
    weight: { type: Number },
    img: { type: String, default: 'no-image' },
    medicalHistory: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isRemove: { type: Boolean, default: false }
  },
  {
    timestamps: true,
  }
)

export const PetModel = mongoose.model(collectionName, schema)
