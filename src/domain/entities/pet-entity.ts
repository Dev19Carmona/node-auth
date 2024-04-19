import { UserEntity } from "./user-entity";

export class PetEntity {
  constructor(
    public id: any ,
    public name: string,
    public specie: string,
    public gender: string,
    public owner: UserEntity,
  ) {
    
  }
}