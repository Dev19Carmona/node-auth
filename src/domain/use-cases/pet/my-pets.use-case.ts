import { PetEntity } from '../../entities'
import { PetRepository } from '../../repositories'

interface MyPetsUseCase {
  execute(owner: string): Promise<PetEntity[]>
}

export class GetMyPets implements MyPetsUseCase {
  constructor(private readonly petRepository: PetRepository) {}
  async execute(owner: string): Promise<PetEntity[]> {
    return await this.petRepository.getMyPets(owner)
  }
}
