
import { RoleEntity } from "../../entities";
import { RoleRepository } from "../../repositories";

interface GetRoleUseCase {
    execute(): Promise<RoleEntity[]>
}

export class GetRole implements GetRoleUseCase {
    constructor(
        private readonly roleRepository: RoleRepository,
      ) {}
    execute(): Promise<RoleEntity[]> {
        return this.roleRepository.getRole()
    }
    
}