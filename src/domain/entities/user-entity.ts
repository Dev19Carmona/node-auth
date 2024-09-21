export class UserEntity {
  constructor(
    public id: any ,
    public name: string,
    public email: string,
    public role: string,
    public img: string,
    public companyId: string,
  ) {
    
  }
}