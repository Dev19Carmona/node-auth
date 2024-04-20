import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { PetRoutes } from "./pet/routes";

export class AppRoutes {
  static get routes(): Router{
    const router = Router()
    router.use('/api/auth', AuthRoutes.routes)
    router.use('/api/pet', PetRoutes.routes)
    return router
  }
}
