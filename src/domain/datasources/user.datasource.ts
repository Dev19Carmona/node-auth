import { GetDoctorsDto } from "../dtos";
import { UserEntity } from "../entities";

export abstract class UserDataSource {
    abstract getDoctors(getDoctorsDto: GetDoctorsDto):Promise<UserEntity[]>

}