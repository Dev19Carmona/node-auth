import { Router } from 'express'
import { ShopController } from './controller'
import { AuthMiddleware } from '../middlewares/auth.middleware'
import { MongoShopDataSourceImpl } from '../../infrastructure/datasources/mongo'
import { ShopRepositoryImpl } from '../../infrastructure/repositories/mongo'

export class ShopRoutes {
    static get routes(): Router {
        const productDataSource = new MongoShopDataSourceImpl()

        const shopRepository = new ShopRepositoryImpl(productDataSource)
        const controller = new ShopController(shopRepository)
        const router = Router()
        router.use([AuthMiddleware.validateJwt])
        router.post('/create',controller.createShop)
        return router
    }
}
