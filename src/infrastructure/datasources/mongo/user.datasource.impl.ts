import { GeneralFuncions } from "../../../config";
import { typesAppointments, typesAppointmentsArray } from "../../../data/appointments";
import { AppointmentStatusEnum, RolesEnum } from "../../../data/enums";
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
        const appointments = await AppointmentModel.find(
            {
                "startDate.hours": startDate.hours,
                "startDate.year": startDate.year,
                "startDate.month": startDate.month,
                "startDate.dayOfMonth": startDate.dayOfMonth,
                "startDate.dayOfWeek": startDate.dayOfWeek,
                "startDate.monthName": startDate.monthName,
                "startDate.dayOfWeekName": startDate.dayOfWeekName,
                "endDate.ms": { $lt: endDateObject.ms + 50},
                "startDate.ms": { $gt: startDate.ms - 50 },
                status: AppointmentStatusEnum.at(0)
            }
        )

        const doctorsFound = appointments.map(appointment => appointment.doctor)
        console.log({ appointments, endDateObject, startDate, doctorsFound }, { "startDate.hours": startDate.hours, "startDate.year": startDate.year });

        const doctors = await UserModel.find({ _id: { $nin: doctorsFound }, roles: { $in: [RolesEnum.at(1)] } })
        return doctors.map(doctor => UserMapper.userEntityFromObject(doctor))
    }

}