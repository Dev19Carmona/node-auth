import { RolesEnum } from "../../../data/enums";
import { UserModel } from "../../../data/mongodb";
import { UserDataSource } from "../../../domain/datasources";
import { UserEntity } from "../../../domain/entities";
import { UserMapper } from "../../mappers";

export class MongoUserDataSourceImpl implements UserDataSource {
    async getDoctors(): Promise<UserEntity[]> {
        const doctors = await UserModel.find({ roles: { $in: [RolesEnum.at(1)] } })
        return doctors.map(doctor=>UserMapper.userEntityFromObject(doctor))
    }

}