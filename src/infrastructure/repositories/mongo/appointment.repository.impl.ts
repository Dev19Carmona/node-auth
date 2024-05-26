import { AppointmentDataSource } from "../../../domain/datasources";
import { ChangeStatusAppointmentDto, CreateAppointmentByUserDto, MyAppointmentsDto } from "../../../domain/dtos";
import { AppointmentEntity } from "../../../domain/entities";
import { TypeAppointmentEntity } from "../../../domain/entities/type-appointments.entity";
import { AppointmentRepository } from "../../../domain/repositories";

export class AppointmentRepositoryImpl implements AppointmentRepository {
  constructor(
    private readonly appointmentDatasource: AppointmentDataSource
  ) {
    
  }
  changeStatusAppointment(changeStatusAppointmentDto: ChangeStatusAppointmentDto): Promise<AppointmentEntity> {
    return this.appointmentDatasource.changeStatusAppointment(changeStatusAppointmentDto)
  }
  typesAppointment(object: { [key: string]: TypeAppointmentEntity; }): TypeAppointmentEntity[] {
    return this.appointmentDatasource.typesAppointment(object)
  }
  myAppointments(myAppointmentsDto: MyAppointmentsDto): Promise<AppointmentEntity[]> {
    return this.appointmentDatasource.myAppointments(myAppointmentsDto)
  }
  createAppointment(createAppointmentByUserDto: CreateAppointmentByUserDto): Promise<boolean> {
    return this.appointmentDatasource.createAppointment(createAppointmentByUserDto)
  }
 

}