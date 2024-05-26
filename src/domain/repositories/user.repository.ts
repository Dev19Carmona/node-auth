import { GetDoctorsDto } from "../dtos";
import { UserEntity } from "../entities";

export abstract class UserRepository {
    abstract getDoctors(getDoctorsDto: GetDoctorsDto): Promise<UserEntity[]>


}