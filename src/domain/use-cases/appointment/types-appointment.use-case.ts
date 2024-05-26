import { CreateAppointmentByUserDto, CreatePetDto, MyAppointmentsDto } from '../../dtos'
import { AppointmentEntity } from '../../entities'
import { TypeAppointmentEntity } from '../../entities/type-appointments.entity'
import { AppointmentRepository, PetRepository } from '../../repositories'

interface TypesAppointmentsUseCase {
  execute(object: { [key: string]: TypeAppointmentEntity }): AppointmentEntity[]
}


export class TypesAppointments implements TypesAppointmentsUseCase {
  constructor(
    private readonly appointmentRepository: AppointmentRepository,
  ) { }
  execute(object: { [key: string]: TypeAppointmentEntity }): AppointmentEntity[] {
// console.log(Object.values(object).map(o => TypeAppointmentEntity.fromObject(o)));
console.log(this.appointmentRepository);

    return []
    // throw new Error('Method not implemented.')
  }

}

