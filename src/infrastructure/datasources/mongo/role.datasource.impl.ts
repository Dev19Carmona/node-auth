
import { RoleModel } from "../../../data/mongodb";
import { RoleDataSource } from "../../../domain/datasources";
import { CreateRoleDto, UpdateRoleDto } from "../../../domain/dtos";
import { RoleEntity } from "../../../domain/entities/role.entity";
import { CustomError } from "../../../domain/errors";
import { upsertObject } from "./constants";

export class MongoRoleDataSourceImpl implements RoleDataSource {
    async activeRole(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
        try {
            const activedRole = await this.updateRole(id, updateRoleDto)
            if (!activedRole) {
                throw new Error('Failed deleted Role')
            }
            return activedRole

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }
    async deleteRole(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
        try {
            const deletedRole = await this.updateRole(id, updateRoleDto)
            if (!deletedRole) {
                throw new Error('Failed deleted Role')
            }
            return deletedRole

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    } 
    async updateRole(id: string, updateRoleDto: UpdateRoleDto): Promise<RoleEntity> {
        try {
            const updatedRole = await RoleModel.findOneAndUpdate({ _id: id }, updateRoleDto)
            console.log(updatedRole);
            
            if (!updatedRole) {
                throw new Error('Failed updated Role')
            }
            return RoleEntity.fromObject(updatedRole!)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }
    async getRole(): Promise<RoleEntity[]> {
        try {
            const roles = await RoleModel.find()
            return roles.map(role => RoleEntity.fromObject(role))
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }
    async createRole(createRoleDto: CreateRoleDto): Promise<RoleEntity> {
        try {
            const { name } = createRoleDto
            const newProduct = await RoleModel.findOneAndUpdate
                (
                    { name },
                    createRoleDto,
                    upsertObject
                )
            return RoleEntity.fromObject(newProduct!)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }

}