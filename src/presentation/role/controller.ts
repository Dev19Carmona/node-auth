import { Request, Response } from "express";
import { CreateRoleDto, UpdateRoleDto } from "../../domain/dtos";
import { RoleRepository } from "../../domain/repositories";
import { ActiveRole, CreateRole, DeleteRole, GetRole, UpdateRole } from "../../domain/use-cases";
import { CustomError } from "../../domain/errors";

export class RoleController {
    constructor(
        private readonly roleRepository: RoleRepository
    ) {

    }
    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        return res.status(500).json({ error: '¡Internal Server Error!' })
    }
    createRole = (req: Request, res: Response) => {
        const [error, createRoleDto] = CreateRoleDto.create(req.body)
        if (error) return res.status(404).json({ error })
        new CreateRole(this.roleRepository)
            .execute(createRoleDto!)
            .then((response) => res.json(response))
            .catch((err) => this.handleError(err, res))


    }
    getRole = (req: Request, res: Response) => {
        new GetRole(this.roleRepository)
        .execute()
        .then((response) => res.json(response))
        .catch((err) => this.handleError(err, res))
    }

    updateRole = (req: Request, res: Response) => {
        const [error, updateRoleDto] = UpdateRoleDto.update(req.body)
        if (error) return res.status(404).json({ error })
        new UpdateRole(this.roleRepository)
        .execute(req.params.id, updateRoleDto!)
        .then((response) => res.json(response))
        .catch((err) => this.handleError(err, res))
    } 
    deleteRole = (req: Request, res: Response) => {
        const [error, updateRoleDto] = UpdateRoleDto.delete()
        if (error) return res.status(404).json({ error })
        new DeleteRole(this.roleRepository)
        .execute(req.params.id, updateRoleDto!)
        .then((response) => res.json(response))
        .catch((err) => this.handleError(err, res))
    } 
    activeRole = (req: Request, res: Response) => {
        const [error, updateRoleDto] = UpdateRoleDto.active()
        if (error) return res.status(404).json({ error })
        new ActiveRole(this.roleRepository)
        .execute(req.params.id, updateRoleDto!)
        .then((response) => res.json(response))
        .catch((err) => this.handleError(err, res))
    } 
}