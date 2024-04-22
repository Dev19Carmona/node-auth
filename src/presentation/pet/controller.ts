import { Request, Response } from 'express'
import { CreatePetDto } from '../../domain/dtos'
import { PetRepository } from '../../domain/repositories'
import { CustomError } from '../../domain/errors'
import { GetMyPets, RegisterPet } from '../../domain/use-cases'

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
    new RegisterPet(this.petRepository)
      .execute(createPetDto!)
      .then((pet) => res.json(pet))
      .catch((err) => this.handleError(err, res))
  }
  getMyPets = (req: Request, res: Response) => {
    const owner = req.body.user
    new GetMyPets(this.petRepository)
      .execute(owner.id)
      .then((myPets) => res.json(myPets))
      .catch((err) => this.handleError(err, res))
  }
}
