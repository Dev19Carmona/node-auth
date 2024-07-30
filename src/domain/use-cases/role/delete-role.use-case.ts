import { UpdateRoleDto } from "../../dtos";
import { RoleEntity } from "../../entities";
import { RoleRepository } from "../../repositories";

interface DeleteRoleUseCase {
    execute(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity>
}

export class DeleteRole implements DeleteRoleUseCase {
    constructor(
        private readonly roleRepository: RoleRepository,

    ) { }
    execute(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
        const deletedRole = this.roleRepository.updateRole(id, updateRoleDto)

        return deletedRole
    }

}