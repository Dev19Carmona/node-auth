import { CreatePetDto, CreateUserDto, LoginUserDto } from "../dtos";
import { PetEntity, SessionUserEntity, UserEntity } from "../entities";

//TODO Abstract no deja crear instancias: EJ: new AuthDataSource X
export abstract class PetRepository {
  abstract register(createPetDto: CreatePetDto):Promise<PetEntity>
  abstract getMyPets(owner: string):Promise<PetEntity[]>
  abstract deletePet(_id: string): Promise<PetEntity>

}