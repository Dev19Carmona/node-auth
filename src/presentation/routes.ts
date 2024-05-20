import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { PetRoutes } from "./pet/routes";
import { AppointmentRoutes } from "./appointment/routes";
import { UserRoutes } from "./user/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router()
    router.use('/api/auth', AuthRoutes.routes)
    router.use('/api/pet', PetRoutes.routes)
    router.use('/api/appointment', AppointmentRoutes.routes)
    router.use('/api/user', UserRoutes.routes)
    return router
  }
}
