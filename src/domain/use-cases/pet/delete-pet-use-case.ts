import { PetEntity } from '../../entities'
import { PetRepository } from '../../repositories'

interface DeletePetUseCase {
  execute(_id: string): Promise<PetEntity>
}

export class DeletePet implements DeletePetUseCase {
  constructor(private readonly petRepository: PetRepository) {}
  async execute(_id: string): Promise<PetEntity> {
    return await this.petRepository.deletePet(_id)
  }
}
