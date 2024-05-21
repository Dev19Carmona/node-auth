import { DateDetails } from "../../interfaces";
import { CustomError } from "../errors";
import { PetEntity } from "./pet-entity";
import { UserEntity } from "./user-entity";

export class AppointmentEntity {
  constructor(
    public id: any,
    public customer: UserEntity,
    public doctor: UserEntity,
    public status: string,
    public pet: PetEntity,
    public startDate: DateDetails,
    // public endDate: DateDetails,
  ) {

  }
  static fromObject(object: { [key: string]: any }): AppointmentEntity {
    const { id, _id, customer, doctor, status, pet, startDate, endDate } = object

    if (!id || !_id) throw CustomError.badRequest('Missing id')
    if (!customer) throw CustomError.badRequest('Missing customer')
    if (!status) throw CustomError.badRequest('Missing status')
    if (!pet) throw CustomError.badRequest('Missing pet')
    if (!startDate) throw CustomError.badRequest('Missing startDate')
    // if (!endDate) throw CustomError.badRequest('Missing endDate')

    return new AppointmentEntity(id || _id, customer, doctor, status, pet, startDate)
  }
}