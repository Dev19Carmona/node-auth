import { PetEntity, UserEntity } from '../../entities'
import { PetRepository, UserRepository } from '../../repositories'

interface GetDoctorsUseCase {
  execute(): Promise<UserEntity[]>
}

export class GetDoctors implements GetDoctorsUseCase {
  constructor(private readonly userRepository: UserRepository) {}
  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.getDoctors()
  }
}
