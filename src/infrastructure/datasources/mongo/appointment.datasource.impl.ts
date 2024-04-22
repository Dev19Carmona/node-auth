import { AppointmentModel } from "../../../data/mongodb";
import { AppointmentDataSource } from "../../../domain/datasources";
import { CreateAppointmentByUserDto } from "../../../domain/dtos";
import { CustomError } from '../../../domain/errors'


export class MongoAppointmentDataSourceImpl implements AppointmentDataSource {
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