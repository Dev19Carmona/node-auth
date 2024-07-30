import { RoleDataSource } from "../../../domain/datasources";
import { CreateRoleDto, UpdateRoleDto } from "../../../domain/dtos";
import { RoleEntity } from "../../../domain/entities/role.entity";
import { RoleRepository } from "../../../domain/repositories";

export class MongoRoleRepositoryImpl implements RoleRepository {
    constructor(
        private readonly roleDataSource: RoleDataSource
    ) {

    }
    activeRole(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
        return this.roleDataSource.activeRole(id, updateRoleDto)
    }
    deleteRole(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
        return this.roleDataSource.deleteRole(id, updateRoleDto)
    }
    updateRole(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
        return this.roleDataSource.updateRole(id, updateRoleDto)
    }
    getRole(): Promise<RoleEntity[]> {
        return this.roleDataSource.getRole()
    }
    createRole(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
        return this.roleDataSource.createRole(createRoleDto)
    }

}