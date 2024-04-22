import { CreateAppointmentByUserDto } from "../dtos";

export abstract class AppointmentDataSource {
  abstract createAppointment(createAppointmentByUserDto:CreateAppointmentByUserDto):Promise<boolean>
}