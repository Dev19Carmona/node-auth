import { typesAppointments } from "../../../data/appointments";
import { AppointmentModel } from "../../../data/mongodb";
import { AppointmentDataSource } from "../../../domain/datasources";
import { CreateAppointmentByUserDto, MyAppointmentsDto } from "../../../domain/dtos";
import { AppointmentEntity } from "../../../domain/entities";
import { TypeAppointmentEntity } from "../../../domain/entities/type-appointments.entity";
import { CustomError } from '../../../domain/errors'
import { UserMapper } from "../../mappers";


export class MongoAppointmentDataSourceImpl implements AppointmentDataSource {
  typesAppointment(object: { [key: string]: TypeAppointmentEntity; }): TypeAppointmentEntity[] {
    console.log(Object.values(object));
    console.log(object);
    
    return Object.values(object).map(typeAppointment => TypeAppointmentEntity.fromObject(typeAppointment))
  }
  async myAppointments(myAppointmentsDto: MyAppointmentsDto): Promise<AppointmentEntity[]> {
    try {
      const myAppointments = await AppointmentModel.find(myAppointmentsDto)
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
}