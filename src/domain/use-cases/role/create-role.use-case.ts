import { CreateRoleDto } from "../../dtos";
import { RoleEntity } from "../../entities";
import { RoleRepository } from "../../repositories";

interface CreateRoleUseCase {
    execute(createRoleDto: CreateRoleDto): Promise<RoleEntity>
}

export class CreateRole implements CreateRoleUseCase {
    constructor(
        private readonly roleRepository: RoleRepository,
        
      ) {}
    execute(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
        const newRole = this.roleRepository.createRole(createRoleDto)

        return newRole
    }
    
}