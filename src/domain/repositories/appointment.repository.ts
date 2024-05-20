import { CreateAppointmentByUserDto, MyAppointmentsDto } from "../dtos";
import { AppointmentEntity } from "../entities";

export abstract class AppointmentRepository {
  abstract myAppointments(myAppointmentsDto:MyAppointmentsDto):Promise<AppointmentEntity[]>
  abstract createAppointment(createAppointmentByUserDto:CreateAppointmentByUserDto):Promise<boolean>
}