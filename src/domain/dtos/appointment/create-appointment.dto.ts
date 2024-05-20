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
    
    return [
      undefined,
      new CreateAppointmentByUserDto(
        user.id,
        pet,
        doctor,
        start,
        end,
        location,
        upperStatus
      ),
    ]
  }
}
