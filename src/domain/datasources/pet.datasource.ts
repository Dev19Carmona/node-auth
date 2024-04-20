import { CreatePetDto, CreateUserDto, LoginUserDto } from "../dtos";
import { PetEntity, SessionUserEntity, UserEntity } from "../entities";

//TODO Abstract no deja crear instancias: EJ: new AuthDataSource X
export abstract class PetDataSource {
  abstract register(createPetDto: CreatePetDto):Promise<PetEntity>
}