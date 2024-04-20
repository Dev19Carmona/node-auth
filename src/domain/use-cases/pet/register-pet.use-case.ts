import { CreatePetDto } from '../../dtos'
import { PetEntity } from '../../entities'
import { CustomError } from '../../errors'
import { PetRepository } from '../../repositories'

interface RegisterPetUseCase {
  execute(createPetDto: CreatePetDto): Promise<PetEntity>
}


export class RegisterPet implements RegisterPetUseCase {
  constructor(
    private readonly petRepository: PetRepository,
  ) { }
  async execute(createPetDto: CreatePetDto): Promise<PetEntity> {
    return await this.petRepository.register(createPetDto)
  }
}

