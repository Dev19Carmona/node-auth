import mongoose from 'mongoose'
import { GeneralFuncions, UuidAdapter } from '../../../config'
import {
  AppointmentStatusEnum,
} from '../../../data/enums'
import { DateDetails } from '../../../interfaces'
import { TypeAppointmentEntity } from '../../entities/type-appointments.entity'
import { ScheduleCompany, typesAppointments } from '../../../data/appointments'

export class CreateAppointmentByUserDto {
  private constructor(
    public customer: mongoose.Types.ObjectId,
    public pet: mongoose.Types.ObjectId,
    public doctor: mongoose.Types.ObjectId,
    public startDate: DateDetails,
    public endDate: DateDetails,
    public location: string,
    public status: string,
    public typeAppointment: TypeAppointmentEntity
  ) { }
  static create(object: {
    [key: string]: any
  }): [string?, CreateAppointmentByUserDto?] {
    const { user, pet, doctor, startDateUnix, location, status, typeAppointment = typesAppointments.banar } = object

    const startDate = new Date(parseFloat(startDateUnix));
    const startMinutes = startDate.getMinutes();
    const endMinutes = startMinutes + typeAppointment.duracion;
    const endDate = new Date(startDate.getTime());
    endDate.setMinutes(endMinutes);
    const start = GeneralFuncions.getDateDetails(startDate)
    const end = GeneralFuncions.getDateDetails(endDate)
    const upperStatus = status ? status.toUpperCase() : 'PENDING'

    if (startDate < new Date()) return ['INVALID DATE']
    if (start.hours < ScheduleCompany.init.hours) return ['AFTER 8 OCLOCK']
    if (end.hours > ScheduleCompany.finish.hours) return ['BEFORE 17 OCLOCK']
    if (!AppointmentStatusEnum.includes(upperStatus)) return ['Invalid Status']
    if (!pet) return ['pet is Required']
    if (!typeAppointment) return ['typeAppointment is Required']
    if (!location) return ['location is Required']
    if (!doctor) return ['doctor is Required']
    if (!startDateUnix) return ['startDate is Required']

    return [
      undefined,
      new CreateAppointmentByUserDto(
        new mongoose.Types.ObjectId(user.id),
        new mongoose.Types.ObjectId(pet),
        new mongoose.Types.ObjectId(doctor),
        start,
        end,
        location,
        upperStatus,
        typeAppointment!
      ),
    ]
  }
}
