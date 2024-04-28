import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { PetRoutes } from "./pet/routes";
import { AppointmentRoutes } from "./appointment/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router()
    router.use('/', (req, res, next) => { 
      res.json({ ServerOn: true, routes: ['/api/auth', '/api/pet', '/api/appointment'] }) 
      next()
    })
    router.use('/api/auth', AuthRoutes.routes)
    router.use('/api/pet', PetRoutes.routes)
    router.use('/api/appointment', AppointmentRoutes.routes)
    return router
  }
}
