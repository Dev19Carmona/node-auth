import { BcryptAdapter, JwtAdapter } from '../../../config'
import { UserModel } from '../../../data/mongodb'
import { AuthDataSource } from '../../../domain/datasources'
import { CreateUserDto, LoginUserDto } from '../../../domain/dtos'
import { SessionUserEntity, UserEntity } from '../../../domain/entities'
import { CustomError } from '../../../domain/errors'
import { SessionUserMapper, UserMapper } from '../../mappers'

type HashFunction = (password: string) => string
type CompareFunction = (password: string, hashed: string) => boolean
type GenerateTokenFunction = (
  payload: Object,
  duration?: string
) => Promise<string | null>
export class MongoAuthDataSourceImpl implements AuthDataSource {
  constructor(
    private readonly hashPassword: HashFunction = BcryptAdapter.hash,
    private readonly comparePassword: CompareFunction = BcryptAdapter.compare,
    private readonly generateToken: GenerateTokenFunction = JwtAdapter.generateToken
  ) {}
  async login(loginUserDto: LoginUserDto): Promise<SessionUserEntity> {
    const { email, password } = loginUserDto
    try {
      const user = await UserModel.findOne({ email })
      if (!user) throw CustomError.badRequest('User not found')
      const isPasswordMatch = this.comparePassword(password, user.password)
      if (!isPasswordMatch) throw CustomError.badRequest('Password not match')
      const userEntity = UserMapper.userEntityFromObject(user)
      const token = await this.generateToken({ ...userEntity })
      if (!token) throw CustomError.badRequest('Token Failed')
      return SessionUserMapper.sessionUserEntityFromObject({ token, user })
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }
  async register(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { name, email, password } = createUserDto
    try {
      const existingUser = await UserModel.countDocuments({ email })
      if (existingUser) throw CustomError.badRequest('User already exist')

      const user = new UserModel({
        name,
        email,
        password: this.hashPassword(password),
      })
      const newUser = await user.save()
      return UserMapper.userEntityFromObject(newUser)
    } catch (error) {
      if (error instanceof CustomError) {
        throw error
      }
      throw CustomError.internalServer()
    }
  }
}
