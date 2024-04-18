import { Validators } from "../../../config"

export class CreateUserDto {
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}
  static create(object: { [key: string]: any }): [string?, CreateUserDto?] {
    const { name, email, password } = object
    if (!name) return ['Name is Required']
    if (!email) return ['email is Required']
    if(!Validators.email.test(email))return ['Invalid Email']
    if (!password) return ['password is Required']
    return [undefined, new CreateUserDto(name, email, password)]
  }
}
