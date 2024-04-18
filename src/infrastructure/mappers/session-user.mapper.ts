import { SessionUserEntity, UserEntity } from '../../domain/entities'
import { CustomError } from '../../domain/errors'
import { UserMapper } from './user.mapper'

export class SessionUserMapper {
  constructor() {}
  static sessionUserEntityFromObject(object: {
    [key: string]: any
  }): SessionUserEntity {
    const { token, user } = object
    if (!token) throw CustomError.badRequest('Missing token')
    const userEntity = UserMapper.userEntityFromObject(user)
    return new SessionUserEntity(token, userEntity)
  }
}
