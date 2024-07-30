import { CreateRoleDto, UpdateRoleDto } from "../dtos";
import { RoleEntity } from "../entities/role.entity";

export abstract class RoleRepository {
    abstract createRole(createRoleDto:CreateRoleDto):Promise<RoleEntity>
    abstract getRole(): Promise<RoleEntity[]>
    abstract updateRole(id:string,updateRoleDto: UpdateRoleDto): Promise<RoleEntity>
    abstract deleteRole(id:string,updateRoleDto: UpdateRoleDto): Promise<RoleEntity>
    abstract activeRole(id:string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity>
}