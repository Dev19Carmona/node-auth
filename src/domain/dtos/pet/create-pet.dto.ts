import { GenderAvailableEnum, PetsAvailableEnum } from "../../../data/enums"

export class CreatePetDto {
  private constructor(
    public name: string,
    public description: string,
    public age: number,
    public reference: string,
    public specie: string,
    public gender: string,
    public weight: number,
    public img: string,
    public medicalHistory: string,
    public owner: string,
  ) {}
  static create(object: { [key: string]: any }): [string?, CreatePetDto?] {
    const { name, description, age, reference, specie, gender, weight, img, medicalHistory, user } = object
    const upperGender = gender.toUpperCase()
    const upperSpecie = specie.toUpperCase()
    
    if (!name) return ['Name is Required']
    if (!age) return ['age is Required']
    if (!specie) return ['specie is Required']
    if (!gender) return ['gender is Required']
    if (!GenderAvailableEnum.includes(upperGender)) return ['Invalid Gender']
    if (!PetsAvailableEnum.includes(upperSpecie)) return ['Invalid Specie']
    if (!user) return ['user is Required']
    return [undefined, new CreatePetDto(name, description, age, reference, upperSpecie, upperGender, weight, img, medicalHistory, user.id)]
  }
}
