import { UserDataSource } from "../../../domain/datasources";
import { UserEntity } from "../../../domain/entities";
import { UserRepository } from "../../../domain/repositories";

export class UserRepositoryImpl implements UserRepository {
    constructor(
        private readonly userDatasource: UserDataSource
      ) {
        
      }
    getDoctors(): Promise<UserEntity[]> {
        return this.userDatasource.getDoctors()

    }

}