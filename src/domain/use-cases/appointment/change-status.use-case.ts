import { AppointmentEntity } from "../../entities";
import { ChangeStatusAppointmentDto } from '../../dtos/appointment/change-status-appointment.dto';
import { AppointmentRepository } from "../../repositories";

interface ChangeStatusUseCase {
    execute(changeStatusAppointmentDto:ChangeStatusAppointmentDto):Promise<AppointmentEntity>
}

export class ChangeStatus implements ChangeStatusUseCase {
    constructor(
        private readonly appointmentRepository: AppointmentRepository,
      ) { }
    execute(changeStatusAppointmentDto: ChangeStatusAppointmentDto): Promise<AppointmentEntity> {
        return this.appointmentRepository.changeStatusAppointment(changeStatusAppointmentDto)
    }

}