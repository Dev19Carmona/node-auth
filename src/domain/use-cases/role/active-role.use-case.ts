import { UpdateRoleDto } from "../../dtos";
import { RoleEntity } from "../../entities";
import { RoleRepository } from "../../repositories";

interface ActiveRoleUseCase {
    execute(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity>
}

export class ActiveRole implements ActiveRoleUseCase {
    constructor(
        private readonly roleRepository: RoleRepository,

    ) { }
    execute(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
        const deletedRole = this.roleRepository.updateRole(id, updateRoleDto)

        return deletedRole
    }

}