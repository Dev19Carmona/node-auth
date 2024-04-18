import { UserEntity } from "./user-entity";
export class SessionUserEntity {
  constructor(
    public token: string ,
    public user: UserEntity,
  ) {
    
  }
}