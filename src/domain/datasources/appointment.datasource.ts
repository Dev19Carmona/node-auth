import { ChangeStatusAppointmentDto, CreateAppointmentByUserDto, MyAppointmentsDto } from "../dtos";
import { AppointmentEntity } from "../entities";
import { typesAppointments } from '../../data/appointments/types';
import { TypeAppointmentEntity } from "../entities/type-appointments.entity";

export abstract class AppointmentDataSource {
  abstract myAppointments(myAppointmentsDto:MyAppointmentsDto):Promise<AppointmentEntity[]>
  abstract createAppointment(createAppointmentByUserDto:CreateAppointmentByUserDto):Promise<boolean>
  abstract typesAppointment(object: {[key: string]: TypeAppointmentEntity}):TypeAppointmentEntity[]
  abstract changeStatusAppointment(changeStatusAppointmentDto:ChangeStatusAppointmentDto): Promise<AppointmentEntity>
}