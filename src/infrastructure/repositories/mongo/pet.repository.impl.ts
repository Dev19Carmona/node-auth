import { PetDataSource } from "../../../domain/datasources";
import { CreatePetDto } from "../../../domain/dtos";
import { PetEntity } from "../../../domain/entities";
import { PetRepository } from "../../../domain/repositories";

export class PetRepositoryImpl implements PetRepository {
  constructor(
    private readonly petDatasource: PetDataSource

  ) {

  }
  register(createPetDto: CreatePetDto): Promise<PetEntity> {
    return this.petDatasource.register(createPetDto)
  }

}