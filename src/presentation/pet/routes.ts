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
    router.get('/my-pets', controller.loginUser)
    router.post('/register-pet', controller.registerUser)
    return router
  }
}
