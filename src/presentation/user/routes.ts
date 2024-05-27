import { Router } from 'express'
import { UserController } from './controller'
import { AuthMiddleware } from '../middlewares/auth.middleware'
import { UserRepositoryImpl } from '../../infrastructure/repositories/mongo'
import { MongoUserDataSourceImpl } from '../../infrastructure/datasources/mongo/user.datasource.impl'

export class UserRoutes {
  static get routes(): Router {
    const datasource = new MongoUserDataSourceImpl()

    const userRepository = new UserRepositoryImpl(datasource)
    const controller = new UserController(userRepository)
    const router = Router()
    router.use(AuthMiddleware.validateJwt)
    router.post('/doctors', controller.getDoctors)
    return router
  }
}
