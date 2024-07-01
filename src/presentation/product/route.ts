import { Router } from 'express'
import { ProductController } from './controller'
import { MongoAuthDataSourceImpl, AuthRepositoryImpl } from '../../infrastructure'
import { AuthMiddleware } from '../middlewares/auth.middleware'
import { MongoProductDataSourceImpl } from '../../infrastructure/datasources/mongo'
import { ProductRepositoryImpl } from '../../infrastructure/repositories/mongo'

export class ProductRoutes {
  static get routes(): Router {
    const datasource = new MongoProductDataSourceImpl()
    
    const productRepository = new ProductRepositoryImpl(datasource)
    const controller = new ProductController(productRepository)
    const router = Router()
    router.use([AuthMiddleware.validateJwt])
    router.get('/', controller.getProducts)
    return router
  }
}
