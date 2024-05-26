import { AppointmentStatusEnum } from "../../../data/enums"
import { UserEntity } from "../../entities"

export class ChangeStatusAppointmentDto {
    constructor(
        public _id: string,
        public status: string,
        public user: UserEntity
    ) {

    }
    static create(object: {
        [key: string]: any
    }): [string?, ChangeStatusAppointmentDto?] {
        const { _id, status, user } = object
        if (!_id) return ['_id IS REQUIRED']
        if (!status) return ['status IS REQUIRED']
        if(!AppointmentStatusEnum.includes(status.toUpperCase())) return ['INVALID_STATUS']
        if (!user.roles.include('DOCTOR_ROLE')) return ['MUST_BE_NEED_DOCTOR']

        return [undefined, new ChangeStatusAppointmentDto(_id, status, user)]
    }
}