import { GeneralFuncions } from '../../../config'
import {
  AppointmentStatusEnum,
} from '../../../data/enums'
import { DateDetails } from '../../../interfaces'

export class CreateAppointmentByUserDto {
  private constructor(
    public customer: string,
    public pet: string,
    public doctor: string,
    public startDate: DateDetails,
    public endDate: DateDetails,
    public location: string,
    public status: string
  ) {}
  static create(object: {
    [key: string]: any
  }): [string?, CreateAppointmentByUserDto?] {
    const { user, pet, doctor, startDate, endDate, location, status } = object
    const upperStatus = status ? status.toUpperCase() : 'PENDING'
    if (!AppointmentStatusEnum.includes(upperStatus)) return ['Invalid Status']
    if (!pet) return ['pet is Required']
    if (!location) return ['location is Required']
    if (!doctor) return ['doctor is Required']
    if (!startDate) return ['startDate is Required']
    const start = new Date(startDate)
    if (!endDate) return ['endDate is Required']
    const end = new Date(endDate)
    return [
      undefined,
      new CreateAppointmentByUserDto(
        user.id,
        pet,
        doctor,
        GeneralFuncions.getDateDetails(start),
        GeneralFuncions.getDateDetails(end),
        location,
        upperStatus
      ),
    ]
  }
}
