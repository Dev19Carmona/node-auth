import mongoose, { Schema } from 'mongoose'
import { DateDetails } from './types'
import { AppointmentStatusEnum } from '../../enums'
import { UuidAdapter } from '../../../config'
const modelName = 'Appointment'
const schema = new mongoose.Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    pet: { type: Schema.Types.ObjectId, ref: 'Pet', required: true },
    doctor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: DateDetails, required: true },
    endDate: { type: DateDetails, required: true },
    location: { type: String, required: true },
    instructions: { type: String },
    status: {
      type: String,
      enum: AppointmentStatusEnum,
      default: 'PENDING',
    },
    typeAppointment: {
      type: Object,
      default: {}
    }
  },
  {
    timestamps: true,
  }
)
export const AppointmentModel = mongoose.model(modelName, schema)
