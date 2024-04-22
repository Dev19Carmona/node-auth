import { Request, Response } from 'express'
import { CreateAppointmentByUserDto } from '../../domain/dtos'
import { AppointmentRepository } from '../../domain/repositories'
import { CustomError } from '../../domain/errors'
import { RegisterAppointmentByUser } from '../../domain/use-cases'

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
  // getMyPets = (req: Request, res: Response) => {
  //   const owner = req.body.user
  //   new GetMyPets(this.petRepository)
  //     .execute(owner.id)
  //     .then((myPets) => res.json(myPets))
  //     .catch((err) => this.handleError(err, res))
  // }
}
