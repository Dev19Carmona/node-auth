import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { ProductRoutes } from "./product/route";
import { ShopRoutes } from "./shop/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router()
    router.use('/', (req, res, next) => { 
      // res.json({ ServerOn: true, routes: ['/api/auth'] }) 
      next()
    })
    router.use('/api/auth', AuthRoutes.routes)
    router.use('/api/product', ProductRoutes.routes)
    router.use('/api/shop', ShopRoutes.routes)
    return router
  }
}
