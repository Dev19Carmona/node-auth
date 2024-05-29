import { Validators } from "../../../config"

export class CreateUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string,
    public roles:string[]
  ) {}
  static create(object: { [key: string]: any }): [string?, CreateUserDto?] {
    const doctors:string[] = [
      'doctor1@gmail.com',
      'doctor2@gmail.com',
      'doctor3@gmail.com',
      'doctor4@gmail.com',
      'doctor5@gmail.com',
      'ago@gmail.com',
      'doctortest1@gmail.com',
      'doctortest2@gmail.com',
      'doctortest3@gmail.com',
    ]
    const { name, email, password } = object
    let roles = ['USER_ROLE'];
    if(doctors.includes(email)){
      roles = ['DOCTOR_ROLE']
    }
    if (!name) return ['Name is Required']
    if (!email) return ['email is Required']
    if(!Validators.email.test(email))return ['Invalid Email']
    if (!password) return ['password is Required']
    return [undefined, new CreateUserDto(name, email, password,roles)]
  }
}
