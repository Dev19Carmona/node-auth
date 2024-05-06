import { Router } from 'express'
import { AuthController } from './controller'
import { MongoAuthDataSourceImpl, AuthRepositoryImpl } from '../../infrastructure'
import { AuthMiddleware } from '../middlewares/auth.middleware'

export class AuthRoutes {
  static get routes(): Router {
    const datasource = new MongoAuthDataSourceImpl()
    const authRepository = new AuthRepositoryImpl(datasource)
    const controller = new AuthController(authRepository)
    
    const router = Router()
    router.post('/login', controller.loginUser)
    router.post('/register', controller.registerUser)
    router.get('/', [AuthMiddleware.validateJwt] ,controller.getUsers)
    return router
  }
}
