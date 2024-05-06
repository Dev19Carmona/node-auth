import { PetEntity, UserEntity } from '../../domain/entities'
import { CustomError } from '../../domain/errors'

export class PetMapper {
  constructor() { }
  static petEntityFromObject(object: { [key: string]: any }): PetEntity {
    const { id, _id, name, specie, gender, owner } = object
    
    if (!id || !_id) throw CustomError.badRequest('Missing id')
    if (!name) throw CustomError.badRequest('Missing name')
    if (!specie) throw CustomError.badRequest('Missing specie')
    if (!gender) throw CustomError.badRequest('Missing gender')
    if (!owner) throw CustomError.badRequest('Missing owner')
    return new PetEntity(id || _id, name, specie, gender, owner)
  }
}
