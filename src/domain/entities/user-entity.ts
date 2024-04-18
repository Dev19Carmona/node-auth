export class UserEntity {
  constructor(
    public id: any ,
    public name: string,
    public email: string,
    public password: string,
    public role: string[],
    public img: string,
  ) {
    
  }
}