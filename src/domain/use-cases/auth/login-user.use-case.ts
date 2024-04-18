import {  LoginUserDto } from '../../dtos'
import { SessionUserEntity } from '../../entities'
import { AuthRepository } from '../../repositories'

interface LoginUserUseCase {
  execute(loginUserDto: LoginUserDto): Promise<SessionUserEntity>
}

export class LoginUser implements LoginUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
  ) {}
  async execute(loginUserDto: LoginUserDto): Promise<SessionUserEntity> {
    return await this.authRepository.login(loginUserDto)
  }
}
