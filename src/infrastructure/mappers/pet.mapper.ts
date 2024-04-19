import { UserEntity } from '../../domain/entities'
import { CustomError } from '../../domain/errors'

export class PetMapper {
  constructor() {}
  static userEntityFromObject(object: { [key: string]: any }): UserEntity {
    const { id, _id, name, specie, owner, roles, img } = object
    if (!id || !_id) throw CustomError.badRequest('Missing id')
    if (!name) throw CustomError.badRequest('Missing name')
    if (!email) throw CustomError.badRequest('Missing email')
    // if (!password) throw CustomError.badRequest('Missing password')
    if (!roles) throw CustomError.badRequest('Missing roles')
    return new UserEntity(id || _id, name, email, roles, img)
  }
}
