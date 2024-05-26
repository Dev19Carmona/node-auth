import { typesAppointments } from "../../../data/appointments";
import { AppointmentModel } from "../../../data/mongodb";
import { AppointmentDataSource } from "../../../domain/datasources";
import { ChangeStatusAppointmentDto, CreateAppointmentByUserDto, MyAppointmentsDto } from "../../../domain/dtos";
import { AppointmentEntity } from "../../../domain/entities";
import { TypeAppointmentEntity } from "../../../domain/entities/type-appointments.entity";
import { CustomError } from '../../../domain/errors'
import { UserMapper } from "../../mappers";


export class MongoAppointmentDataSourceImpl implements AppointmentDataSource {
  private queryGtToday: { [key: string]: any } = { "startDate.datetime": { $gt: new Date() } }
  async changeStatusAppointment(changeStatusAppointmentDto: ChangeStatusAppointmentDto): Promise<AppointmentEntity> {
    try {
      const { _id, status, user } = changeStatusAppointmentDto
      const appointmentUpdated = await AppointmentModel.findOneAndUpdate({ _id, doctor: user.id }, { status })
      if (!appointmentUpdated) throw CustomError.badRequest('Appointment not found')
      return AppointmentEntity.fromObject(appointmentUpdated)
    } catch (error) {
      console.log(error);

      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }
  typesAppointment(object: { [key: string]: TypeAppointmentEntity; }): TypeAppointmentEntity[] {
    return Object.values(object).map(typeAppointment => TypeAppointmentEntity.fromObject(typeAppointment))
  }
  async myAppointments(myAppointmentsDto: MyAppointmentsDto): Promise<AppointmentEntity[]> {
    try {
      const myAppointments = await AppointmentModel.find({ ...myAppointmentsDto, ...this.queryGtToday })
        .populate("customer", "-password")
        .populate("doctor", "-password")
        .populate("pet")

      return myAppointments.length ? myAppointments.map(myAppointment => AppointmentEntity.fromObject(myAppointment)) : []
    } catch (error) {
      console.log(error);

      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }
  async createAppointment(createAppointmentByUserDto: CreateAppointmentByUserDto): Promise<boolean> {
    try {
      const { typeAppointment, pet, customer } = createAppointmentByUserDto
      const [error, myAppointmentsDto] = MyAppointmentsDto.validPendingAppointments({ typeAppointment, status: 'PENDING', pet, customer })
      if(error)throw CustomError.badRequest(error)
      const existingAppointment = await this.countAppointment(myAppointmentsDto!)
      if (existingAppointment) throw CustomError.badRequest('PENDING APPOINTMENT EXISTING')
      await new AppointmentModel({
        ...createAppointmentByUserDto
      }).save()
      return true
    } catch (error) {
      console.log(error);

      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }
  async countAppointment(myAppointmentsDto: MyAppointmentsDto): Promise<number>{
    return await AppointmentModel.countDocuments({...myAppointmentsDto, ...this.queryGtToday})
  }
}