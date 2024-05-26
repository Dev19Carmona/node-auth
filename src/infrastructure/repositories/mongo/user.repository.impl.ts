import { UserDataSource } from "../../../domain/datasources";
import { GetDoctorsDto } from "../../../domain/dtos";
import { UserEntity } from "../../../domain/entities";
import { UserRepository } from "../../../domain/repositories";

export class UserRepositoryImpl implements UserRepository {
    constructor(
        private readonly userDatasource: UserDataSource
      ) {
        
      }
    getDoctors(getDoctorsDto: GetDoctorsDto): Promise<UserEntity[]> {
        return this.userDatasource.getDoctors(getDoctorsDto)

    }

}