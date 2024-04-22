import { AppointmentDataSource } from "../../../domain/datasources";
import { CreateAppointmentByUserDto } from "../../../domain/dtos";
import { AppointmentRepository } from "../../../domain/repositories";

export class AppointmentRepositoryImpl implements AppointmentRepository {
  constructor(
    private readonly appointmentDatasource: AppointmentDataSource
  ) {
    
  }
  createAppointment(createAppointmentByUserDto: CreateAppointmentByUserDto): Promise<boolean> {
    return this.appointmentDatasource.createAppointment(createAppointmentByUserDto)
  }
 

}