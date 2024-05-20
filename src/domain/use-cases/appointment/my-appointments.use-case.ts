import { CreateAppointmentByUserDto, CreatePetDto, MyAppointmentsDto } from '../../dtos'
import { AppointmentEntity } from '../../entities'
import { AppointmentRepository, PetRepository } from '../../repositories'

interface MyAppointmentsUseCase {
  execute(myAppointmentsDto: MyAppointmentsDto): Promise<AppointmentEntity[]>
}


export class MyAppointments implements MyAppointmentsUseCase {
  constructor(
    private readonly appointmentRepository: AppointmentRepository,
  ) { }
    execute(myAppointmentsDto: MyAppointmentsDto): Promise<AppointmentEntity[]> {
        return this.appointmentRepository.myAppointments(myAppointmentsDto)
    }
 
}

