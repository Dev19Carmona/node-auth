import { CreateAppointmentByUserDto, CreatePetDto } from '../../dtos'
import { PetEntity } from '../../entities'
import { AppointmentRepository, PetRepository } from '../../repositories'

interface RegisterAppointmentByUserUseCase {
  execute(createAppointmentByUserDto: CreateAppointmentByUserDto): Promise<boolean>
}


export class RegisterAppointmentByUser implements RegisterAppointmentByUserUseCase {
  constructor(
    private readonly appointmentRepository: AppointmentRepository,
  ) { }
  async execute(createAppointmentByUserDto: CreateAppointmentByUserDto): Promise<boolean> {
    return await this.appointmentRepository.createAppointment(createAppointmentByUserDto)
  }
}

