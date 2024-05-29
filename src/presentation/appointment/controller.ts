import { Request, Response } from 'express'
import { ChangeStatusAppointmentDto, CreateAppointmentByUserDto, MyAppointmentsDto } from '../../domain/dtos'
import { AppointmentRepository } from '../../domain/repositories'
import { CustomError } from '../../domain/errors'
import { ChangeStatus, MyAppointments, RegisterAppointmentByUser } from '../../domain/use-cases'
import { typesAppointments } from '../../data/appointments/types';
import { TypesAppointments } from '../../domain/use-cases/appointment/types-appointment.use-case'

export class AppointmentController {
  constructor(
    private readonly appointmentRepository: AppointmentRepository
  ) {}
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    return res.status(500).json({ error: '¡Internal Server Error!' })
  }
  registerAppointment = (req: Request, res: Response) => {
    const [error, createAppointmentByUserDto] = CreateAppointmentByUserDto.create(req.body)
    if (error) return res.status(404).json({ error })
    new RegisterAppointmentByUser(this.appointmentRepository)
    .execute(createAppointmentByUserDto!)
    .then((is) => res.json({created:is}))
    .catch((err) => this.handleError(err, res))
  }
  myAppointments = (req: Request, res: Response) => {
    const [error, myAppointmentsDto] = MyAppointmentsDto.searchByUser(req.body)
    if (error) return res.status(404).json({ error })

    new MyAppointments(this.appointmentRepository)
    .execute(myAppointmentsDto!)
    .then((myAppointments) => res.json(myAppointments))
    .catch((err) => this.handleError(err, res))

  }
  typesAppointments = (req: Request, res: Response) => {
    res.json(Object.values(typesAppointments))
  }
  changeStatusAppointment = (req: Request, res: Response) => {
    
    
    const [error, changeStatusAppointmentDto] = ChangeStatusAppointmentDto.create(req.body)
    if (error) return res.status(404).json({ error })
    
    new ChangeStatus(this.appointmentRepository)
    .execute(changeStatusAppointmentDto!)
    .then((appointmentUpdated) => res.json(appointmentUpdated))
    .catch((err) => this.handleError(err, res))
  }
}
