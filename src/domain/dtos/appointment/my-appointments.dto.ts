import mongoose from "mongoose"
import { RolesEnum } from "../../../data/enums";
interface IMyAppointment {
    status: string;
    customer?: string;
    doctor?: string;
    pet?: string;
    _id?: string;
    startDate?: string
}
export class MyAppointmentsDto {

    static searchByUser(object: {
        [key: string]: any
    }): [string?, IMyAppointment?] {
        const { user, status = 'PENDING', pet, _id, startDate, endDate } = object
        if (!user) return ['userId is Required']
        const { role } = user
        const query: IMyAppointment = { status }
        if (role.includes(RolesEnum.at(0))) query.customer = user.id
        if (role.includes(RolesEnum.at(1))) query.doctor = user.id
        if (pet) query.pet = pet
        if (_id) query._id = _id

        // if(startDate)query.startDate = startDate
        return [undefined, query]
    }
}