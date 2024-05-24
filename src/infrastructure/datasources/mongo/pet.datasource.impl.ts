import { Validators } from '../../../config'
import { PetModel } from '../../../data/mongodb'
import { PetDataSource } from '../../../domain/datasources'
import { CreatePetDto } from '../../../domain/dtos'
import { PetEntity } from '../../../domain/entities'
import { CustomError } from '../../../domain/errors'
import { PetMapper } from '../../mappers'

export class MongoPetDataSourceImpl implements PetDataSource {
  constructor() { }
  async deletePet(_id: string): Promise<PetEntity> {
    const petToDelete = await PetModel.findOne({ _id, isRemove: false })
    if (!petToDelete) throw CustomError.badRequest(`Pet not found`)
    petToDelete.isRemove = true
    const petDeleted = await petToDelete.save()
    return PetMapper.petEntityFromObject(petDeleted)
  }
  async getMyPets(owner: string): Promise<PetEntity[]> {
    const myPets = await PetModel.find({ owner, isRemove: false })
    return myPets.map((pet) => PetMapper.petEntityFromObject(pet))
  }
  async register(createPetDto: CreatePetDto): Promise<PetEntity> {
    try {
      const { name, owner, specie } = createPetDto
      const existingPet = await PetModel.countDocuments({ owner, name, specie, isRemove: false })
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
