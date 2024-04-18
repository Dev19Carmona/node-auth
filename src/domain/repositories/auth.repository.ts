import { CreateUserDto, LoginUserDto } from "../dtos";
import { SessionUserEntity, UserEntity } from "../entities";

//TODO Abstract no deja crear instancias: EJ: new AuthDataSource X
export abstract class AuthRepository {
  abstract register(createUserDto: CreateUserDto):Promise<UserEntity>
  abstract login(loginUserDto: LoginUserDto):Promise<SessionUserEntity>
}