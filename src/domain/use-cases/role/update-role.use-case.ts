import { UpdateRoleDto } from "../../dtos";
import { RoleEntity } from "../../entities";
import { RoleRepository } from "../../repositories";

interface UpdateRoleUseCase {
    execute(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity>
}

export class UpdateRole implements UpdateRoleUseCase {
    constructor(
        private readonly roleRepository: RoleRepository,

    ) { }
    execute(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
        const updatedRole = this.roleRepository.updateRole(id, updateRoleDto)

        return updatedRole
    }

}