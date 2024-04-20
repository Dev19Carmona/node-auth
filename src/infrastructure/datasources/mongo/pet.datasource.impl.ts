import { Validators } from "../../../config";
import { PetModel } from "../../../data/mongodb";
import { PetDataSource } from "../../../domain/datasources";
import { CreatePetDto } from "../../../domain/dtos";
import { PetEntity } from "../../../domain/entities";
import { CustomError } from "../../../domain/errors";
import { PetMapper } from "../../mappers";

export class MongoPetDataSourceImpl implements PetDataSource {
  constructor() {

  }
  async register(createPetDto: CreatePetDto): Promise<PetEntity> {
    try {
      const newPet = await new PetModel({
        ...createPetDto
      }).save()
      
      return PetMapper.petEntityFromObject(newPet)
    } catch (error) {
    console.log({error});

      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }

}