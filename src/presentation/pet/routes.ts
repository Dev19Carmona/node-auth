import { Router } from 'express'
import { PetController } from './controller'
import { AuthMiddleware } from '../middlewares/auth.middleware'
import { MongoPetDataSourceImpl } from '../../infrastructure/datasources/mongo'
import { PetRepositoryImpl } from '../../infrastructure/repositories/mongo'

export class PetRoutes {
  static get routes(): Router {
    const datasource = new MongoPetDataSourceImpl()
    
    const petRepository = new PetRepositoryImpl(datasource)
    const controller = new PetController(petRepository)
    const router = Router()
    router.use(AuthMiddleware.validateJwt)
    router.get('/my-pets', controller.getMyPets)
    router.post('/register', controller.registerPet)
    return router
  }
}
