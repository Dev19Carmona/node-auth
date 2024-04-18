import { AuthDataSource } from "../../../domain/datasources";
import { CreateUserDto, LoginUserDto } from "../../../domain/dtos";
import { SessionUserEntity, UserEntity } from "../../../domain/entities";
import { AuthRepository } from "../../../domain/repositories";

export class AuthRepositoryImpl implements AuthRepository{
  constructor(
    private readonly authDatasource: AuthDataSource
  ) {
    
  }
  login(loginUserDto: LoginUserDto): Promise<SessionUserEntity> {
    return this.authDatasource.login(loginUserDto)
  }
  register(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.authDatasource.register(createUserDto)
  }

}