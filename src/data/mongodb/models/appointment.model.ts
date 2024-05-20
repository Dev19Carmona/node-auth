import mongoose, { Schema } from 'mongoose'
import { DateDetails } from './types'
import { AppointmentStatusEnum } from '../../enums'
import { UuidAdapter } from '../../../config'
const modelName = 'Appointment'
const schema = new mongoose.Schema(
  {
    _id: { type: String, default: UuidAdapter.uuidV4 },
    customer: { type: String, ref: 'User', required: true },
    pet: { type: String, ref: 'Pet', required: true },
    doctor: { type: String, ref: 'User', required: true },
    startDate: { type: DateDetails, required: true },
    endDate: { type: DateDetails, required: true },
    location: { type: String, required: true },
    instructions: { type: String },
    status: {
      type: String,
      enum: AppointmentStatusEnum,
      default: 'PENDING',
    },
  },
  {
    timestamps: true,
    _id: false
  }
)
export const AppointmentModel = mongoose.model(modelName, schema)
