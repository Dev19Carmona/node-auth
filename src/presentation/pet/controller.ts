import { Request, Response } from 'express'
import { CreatePetDto } from '../../domain/dtos'
import { PetRepository } from '../../domain/repositories'
import { CustomError } from '../../domain/errors'
import { RegisterPet } from '../../domain/use-cases'

export class PetController {
  constructor(private readonly petRepository: PetRepository) {}
  private handleError = (error: unknown, res: Response) => {
    
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    return res.status(500).json({ error: '¡Internal Server Error!' })
  }
  registerPet = (req: Request, res: Response) => {
    const [error, createPetDto] = CreatePetDto.create(req.body)
    if (error) return res.status(404).json({ error })
    const registerPetUseCase = new RegisterPet(this.petRepository)
    registerPetUseCase
      .execute(createPetDto!)
      .then((pet) => res.json(pet))
      .catch((err) => this.handleError(err, res))
  }
  getMyPets = (req: Request, res: Response) => {
    throw 'Not implemented yet'
  }
}
