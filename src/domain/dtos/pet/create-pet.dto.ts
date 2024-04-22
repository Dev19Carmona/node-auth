import {
  CatBreeds,
  DogBreeds,
  GenderAvailableEnum,
  PetsAvailableEnum,
} from '../../../data/enums'

export class CreatePetDto {
  private constructor(
    public name: string,
    public description: string,
    public age: number,
    public reference: string,
    public specie: string,
    public gender: string,
    public breed: string,
    public weight: number,
    public img: string,
    public medicalHistory: string,
    public owner: string
  ) {}
  static create(object: { [key: string]: any }): [string?, CreatePetDto?] {
    const {
      name,
      description,
      age,
      reference,
      specie,
      gender,
      breed,
      weight,
      img,
      medicalHistory,
      user,
    } = object
    const upperGender = gender ? gender.toUpperCase() : undefined
    const upperSpecie = specie ? specie.toUpperCase() : undefined
    const upperBreed = breed ? breed.toUpperCase() : undefined

    if (['GATO', 'PERRO'].includes(specie)) {
      if (!breed) return ['Breed is required']
      if (breed === 'GATO' && !CatBreeds.includes(upperBreed))
        return ['Invalid Breed']
      if (breed === 'PERRO' && !DogBreeds.includes(upperBreed))
        return ['Invalid Breed']
    }
    if (!name) return ['Name is Required']
    if (!age) return ['age is Required']
    if (!specie) return ['specie is Required']
    if (!gender) return ['gender is Required']
    if (!GenderAvailableEnum.includes(upperGender)) return ['Invalid Gender']
    if (!PetsAvailableEnum.includes(upperSpecie)) return ['Invalid Specie']
    if (!user) return ['user is Required']
    return [
      undefined,
      new CreatePetDto(
        name,
        description,
        age,
        reference,
        upperSpecie,
        upperGender,
        upperBreed,
        weight,
        img,
        medicalHistory,
        user.id
      ),
    ]
  }
}
