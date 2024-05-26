import { GetDoctorsDto } from '../../dtos'
import { PetEntity, UserEntity } from '../../entities'
import { PetRepository, UserRepository } from '../../repositories'

interface GetDoctorsUseCase {
  execute(getDoctorsDto: GetDoctorsDto): Promise<UserEntity[]>
}

export class GetDoctors implements GetDoctorsUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(getDoctorsDto: GetDoctorsDto): Promise<UserEntity[]> {
    return await this.userRepository.getDoctors(getDoctorsDto)
  }
}
