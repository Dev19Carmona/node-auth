import mongoose from 'mongoose'
import { GeneralFuncions, UuidAdapter } from '../../../config'
import {
  AppointmentStatusEnum,
} from '../../../data/enums'
import { DateDetails } from '../../../interfaces'

export class CreateAppointmentByUserDto {
  private constructor(
    public customer: mongoose.Types.ObjectId,
    public pet: mongoose.Types.ObjectId,
    public doctor: mongoose.Types.ObjectId,
    public startDate: DateDetails,
    public endDate: DateDetails,
    public location: string,
    public status: string
  ) {}
  static create(object: {
    [key: string]: any
  }): [string?, CreateAppointmentByUserDto?] {
    const { user, pet, doctor, startDateUnix, location, status } = object
    const upperStatus = status ? status.toUpperCase() : 'PENDING'
    if (!AppointmentStatusEnum.includes(upperStatus)) return ['Invalid Status']
    if (!pet) return ['pet is Required']
    if (!location) return ['location is Required']
    if (!doctor) return ['doctor is Required']
    if (!startDateUnix) return ['startDate is Required']
    const startDate = new Date(parseFloat(startDateUnix))
    const startHours = startDate.getHours()
    const endHours = startHours + 1
    const endDate = startDate
    endDate.setHours(endHours)
    
    const start = GeneralFuncions.getDateDetails(startDate)
    const end = GeneralFuncions.getDateDetails(endDate)
    
    const userObject = new mongoose.Types.ObjectId(user.id)
    return [
      undefined,
      new CreateAppointmentByUserDto(
        new mongoose.Types.ObjectId(user.id),
        new mongoose.Types.ObjectId(pet),
        new mongoose.Types.ObjectId(doctor),
        start,
        end,
        location,
        upperStatus
      ),
    ]
  }
}
