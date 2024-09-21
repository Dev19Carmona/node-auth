import { UserEntity } from '../../domain/entities'
import { CustomError } from '../../domain/errors'

export class UserMapper {
  constructor() {}
  static userEntityFromObject(object: { [key: string]: any }): UserEntity {
    const { id, _id, name, email, role, img, companyId } = object
    if (!id || !_id) throw CustomError.badRequest('Missing id')
    if (!name) throw CustomError.badRequest('Missing name')
    if (!email) throw CustomError.badRequest('Missing email')
    if (!role) throw CustomError.badRequest('Missing roles')
    return new UserEntity(id || _id, name, email, role, img, companyId)
  }
}
