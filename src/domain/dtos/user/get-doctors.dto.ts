import { GeneralFuncions } from "../../../config";
import { DateDetails } from "../../../interfaces";

export class GetDoctorsDto {
    private constructor(
        public typeAppointmentId: string,
        public startDate: DateDetails
    ) {

    }
    static create(object: { [key: string]: any }): [string?, GetDoctorsDto?] {
        const { typeAppointmentId, startDateUnix } = object
        if(!typeAppointmentId)return ['typeAppointmentId is required']
        if(!startDateUnix)return ['startDateUnix is required']
        const startDate = new Date(startDateUnix)
        console.log({startDate});
        
        const startDateObject = GeneralFuncions.getDateDetails(startDate)
        return [undefined, new GetDoctorsDto(typeAppointmentId, startDateObject)]
    }
}