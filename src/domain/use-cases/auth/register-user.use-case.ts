import { JwtAdapter } from '../../../config'
import { CreateUserDto } from '../../dtos'
import { CustomError } from '../../errors'
import { AuthRepository } from '../../repositories'

interface RegisterUserUseCase {
  execute(createUserDto: CreateUserDto): Promise<UserToken>
}

interface UserToken {
  token: string | null
  user: {
    id: string
    name: string
    email: string
  }
}

type GenerateTokenFunction = (
  payload: Object,
  duration?: string
) => Promise<string | null>

export class RegisterUser implements RegisterUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly generateToken: GenerateTokenFunction = JwtAdapter.generateToken,
  ) {}
  async execute(createUserDto: CreateUserDto): Promise<UserToken> {
    //TODO Creacion de usuario
    const user = await this.authRepository.register(createUserDto)
    //TODO TOKEN
    const token = await this.generateToken(
      { id: user.id, email: user.email },
      '2h'
    )
    if(!token) throw CustomError.internalServer('Error generate Token')

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    }
  }
}
