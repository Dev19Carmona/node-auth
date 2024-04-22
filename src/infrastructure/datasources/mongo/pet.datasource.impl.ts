import { Validators } from '../../../config'
import { PetModel } from '../../../data/mongodb'
import { PetDataSource } from '../../../domain/datasources'
import { CreatePetDto } from '../../../domain/dtos'
import { PetEntity } from '../../../domain/entities'
import { CustomError } from '../../../domain/errors'
import { PetMapper } from '../../mappers'

export class MongoPetDataSourceImpl implements PetDataSource {
  constructor() {}
  async getMyPets(owner: string): Promise<PetEntity[]> {
    const myPets = await PetModel.find({ owner })
    return myPets.map((pet) => PetMapper.petEntityFromObject(pet))
  }
  async register(createPetDto: CreatePetDto): Promise<PetEntity> {
    try {
      const { name, owner, specie } = createPetDto
      const existingPet = await PetModel.countDocuments({ owner, name, specie })
      if (existingPet)
        throw CustomError.badRequest(`Pet with name: ${name} already exist`)
      const newPet = await new PetModel({
        ...createPetDto,
      }).save()

      return PetMapper.petEntityFromObject(newPet)
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }
}
