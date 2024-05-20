import { UserEntity } from "../entities";

export abstract class UserRepository {
    abstract getDoctors():Promise<UserEntity[]>

}