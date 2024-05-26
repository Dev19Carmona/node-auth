import { Router } from 'express'
// import { PetController } from './controller'
import { AuthMiddleware } from '../middlewares/auth.middleware'
import {
  MongoAppointmentDataSourceImpl,
} from '../../infrastructure/datasources/mongo'
import {
  AppointmentRepositoryImpl,
} from '../../infrastructure/repositories/mongo'
import { AppointmentController } from './controller'

export class AppointmentRoutes {
  static get routes(): Router {
    const datasource = new MongoAppointmentDataSourceImpl()
    console.log(datasource);
    
    const appointmentRepository = new AppointmentRepositoryImpl(datasource)
    const controller = new AppointmentController(appointmentRepository)
    const router = Router()
    router.use(AuthMiddleware.validateJwt)
    router.post('/register', controller.registerAppointment)
    router.get('/my-appointments', controller.myAppointments)
    router.get('/types-appointments', controller.typesAppointments)
    return router
  }
}
