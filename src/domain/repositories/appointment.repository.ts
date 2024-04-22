import { CreateAppointmentByUserDto } from "../dtos";

export abstract class AppointmentRepository {
  abstract createAppointment(createAppointmentByUserDto:CreateAppointmentByUserDto):Promise<boolean>
}