import { GeneralFuncions } from "../../../config";
import { typesAppointments, typesAppointmentsArray } from "../../../data/appointments";
import { RolesEnum } from "../../../data/enums";
import { AppointmentModel, UserModel } from "../../../data/mongodb";
import { UserDataSource } from "../../../domain/datasources";
import { GetDoctorsDto } from "../../../domain/dtos";
import { UserEntity } from "../../../domain/entities";
import { UserMapper } from "../../mappers";

export class MongoUserDataSourceImpl implements UserDataSource {
    private queryGtToday: { [key: string]: any } = { "startDate.datetime": { $gt: new Date() } }
    async getDoctors(getDoctorsDto: GetDoctorsDto): Promise<UserEntity[]> {
        const { typeAppointmentId, startDate } = getDoctorsDto
        const typesAppointment = typesAppointmentsArray()
        const typeAppointment = typesAppointment.find(type => type.id === parseFloat(typeAppointmentId))

        const endDate = new Date(startDate.ms)
        endDate.setMinutes(typeAppointment?.duracion! + 50)
        const endDateObject = GeneralFuncions.getDateDetails(endDate)
        const appointments = await AppointmentModel.find({ "startDate.ms": { $gt: startDate.ms }, "endDate.ms": { $lt: endDateObject.ms }, "typeAppointment.id": typeAppointment?.id })
        const doctorsFound = appointments.map(appointment => appointment.doctor)

        const doctors = await UserModel.find({ _id: { $nin: doctorsFound }, roles: { $in: [RolesEnum.at(1)] } })
        return doctors.map(doctor => UserMapper.userEntityFromObject(doctor))
    }

}