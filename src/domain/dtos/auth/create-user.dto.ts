import { Validators } from "../../../config"

export class CreateUserDto {
  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly role: string,
  ) { }
  static create(object: { [key: string]: any }): [string?, CreateUserDto?] {
    const { name, email, password, role } = object
    if (!name) return ['Name is Required']
    if (!email) return ['email is Required']
    if (!Validators.email.test(email)) return ['Invalid Email']
    if (!password) return ['password is Required']
    return [undefined, new CreateUserDto(name, email, password, role || '66a9770c892006f9c047da30')]
  }
}
