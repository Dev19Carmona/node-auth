import { Router } from "express"
import { MongoRoleDataSourceImpl } from "../../infrastructure/datasources/mongo"
import { MongoRoleRepositoryImpl } from "../../infrastructure/repositories/mongo"
import { RoleController } from "./controller"

export class RoleRoutes {
  static get routes(): Router {
    const roleDataSource = new MongoRoleDataSourceImpl()

    const roleRepository = new MongoRoleRepositoryImpl(roleDataSource)
    const controller = new RoleController(roleRepository)
    const router = Router()
    router.post('/create', controller.createRole)
    router.get('/', controller.getRole)
    router.put('/update/:id', controller.updateRole)
    router.put('/delete/:id', controller.deleteRole)
    router.put('/active/:id', controller.activeRole)
    return router
  }
}
