import { UserEntity } from "./user-entity";

export class AppointmentEntity {
  constructor(
    public id: any ,
    public name: string,
    public specie: string,
    public gender: string,
    public owner: UserEntity,
  ) {
    
  }
}