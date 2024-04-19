import { PetModel } from "../../../data/mongodb";
import { PetDataSource } from "../../../domain/datasources";
import { CreatePetDto } from "../../../domain/dtos";
import { PetEntity } from "../../../domain/entities";
import { CustomError } from "../../../domain/errors";

export class MongoPetDataSourceImpl implements PetDataSource{
  constructor() {
    
  }
  async register(createPetDto: CreatePetDto): Promise<PetEntity> {
    try {
      const newPet = await new PetModel({
        ...createPetDto
      }).save()
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
    
    throw new Error("Method not implemented.");
  }
  
}