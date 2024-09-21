import {  LoginUserDto } from '../../dtos'
import { SessionUserEntity } from '../../entities'
import { AuthRepository } from '../../repositories'

interface VerifySessionUseCase {
  execute(token: string): Promise<boolean>
}

export class VerifySession implements VerifySessionUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
  ) {}
  async execute(token: string): Promise<boolean> {
    return await this.authRepository.verifySession(token)
  }
}
