import { UserEntity } from "../entities";

export abstract class UserDataSource {
    abstract getDoctors():Promise<UserEntity[]>

}